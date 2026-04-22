'use client';

import { useEffect, useMemo, useRef, useState } from "react";

import { studyAreas } from "@/data/study-areas";
import {
  buildAdaptiveQuestionSet,
  getRecommendation,
  getWeakAreas,
  evaluateAttempt
} from "@/lib/evaluation";
import { AttemptResult, Question } from "@/lib/types";

const STORAGE_KEY = "bauti-vs-la-cnv-attempt-history";

export function QuizExperience() {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>(() => buildAdaptiveQuestionSet([]));
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<AttemptResult | null>(null);
  const [history, setHistory] = useState<AttemptResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDir, setSlideDir] = useState<'right' | 'left'>('right');
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const rawHistory = window.localStorage.getItem(STORAGE_KEY);
    if (!rawHistory) {
      setCurrentQuestions(buildAdaptiveQuestionSet([]));
      return;
    }

    try {
      const parsed = JSON.parse(rawHistory) as AttemptResult[];
      setHistory(parsed);
      setCurrentQuestions(buildAdaptiveQuestionSet(parsed));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      setCurrentQuestions(buildAdaptiveQuestionSet([]));
    }
  }, []);

  const completion = useMemo(() => {
    return Math.round((Object.keys(answers).length / currentQuestions.length) * 100);
  }, [answers, currentQuestions.length]);

  const weakAreas = result ? getWeakAreas(result) : [];
  const currentRun = history.length + (submitted ? 0 : 1);

  const areaMap = useMemo(() => {
    return new Map(studyAreas.map((area) => [area.id, area]));
  }, []);

  function goToQuestion(index: number) {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    const clamped = Math.max(0, Math.min(index, currentQuestions.length - 1));
    setSlideDir(clamped > activeIndex ? 'right' : 'left');
    setActiveIndex(clamped);
  }

  function handleAnswer(questionId: number, optionIndex: number) {
    setAnswers((current) => ({ ...current, [questionId]: optionIndex }));

    if (!submitted && activeIndex < currentQuestions.length - 1) {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = setTimeout(() => {
        setSlideDir('right');
        setActiveIndex((i) => i + 1);
      }, 480);
    }
  }

  function handleSubmit() {
    const nextResult = evaluateAttempt(currentQuestions, answers);
    const nextHistory = [nextResult, ...history].slice(0, 8);

    setResult(nextResult);
    setHistory(nextHistory);
    setSubmitted(true);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextHistory));
  }

  function handleReset() {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    const nextQuestions = buildAdaptiveQuestionSet(history);
    setAnswers({});
    setResult(null);
    setSubmitted(false);
    setCurrentQuestions(nextQuestions);
    setActiveIndex(0);
    setSlideDir('right');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const activeQuestion = currentQuestions[activeIndex];
  const selected = activeQuestion ? answers[activeQuestion.id] : undefined;
  const activeArea = activeQuestion ? areaMap.get(activeQuestion.area) : null;
  const isCorrect = submitted && activeQuestion ? selected === activeQuestion.correctIndex : false;
  const isWrong =
    submitted && activeQuestion ? selected !== undefined && selected !== activeQuestion.correctIndex : false;
  const answeredCount = Object.keys(answers).length;
  const isLastQuestion = activeIndex === currentQuestions.length - 1;

  return (
    <div className="quiz-shell">
      <section className="hero-block">
        <div className="hero-copyblock">
          <p className="eyebrow">BAUTI VS. LA CNV // Arcade Mode</p>
          <h1>BAUTI VS. LA CNV</h1>
          <p className="hero-copy">
            Que la CNV no te rompa el orto.
          </p>
        </div>

        <div className="hero-hud">
          <div className="hud-panel">
            <span>Run</span>
            <strong>{String(currentRun).padStart(2, "0")}</strong>
            <small>modo examen adaptativo</small>
          </div>
          <div className="hud-panel accent">
            <span>Progreso</span>
            <strong>{completion}%</strong>
            <small>{answeredCount} / {currentQuestions.length} checkpoints</small>
          </div>
        </div>
      </section>

      <section className="question-stage" aria-label="Simulacro">
        <div className="question-stage-header">
          <div className="question-stage-meta">
            <span>Stage {String(activeIndex + 1).padStart(2, "0")} / {String(currentQuestions.length).padStart(2, "0")}</span>
            <strong>{activeArea?.title ?? activeQuestion?.area}</strong>
          </div>
          <div className="question-stage-meter" aria-hidden="true">
            <div
              className="question-stage-meter-fill"
              style={{ width: `${((answeredCount) / currentQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {activeQuestion ? (
          <article key={activeIndex} data-dir={slideDir} className="question-card spotlight-card">
            <div className="question-meta">
              <span>Checkpoint activo</span>
              <span>{activeArea?.title ?? activeQuestion.area}</span>
            </div>
            <h2>{activeQuestion.prompt}</h2>

            <div className="options">
              {activeQuestion.options.map((option, optionIndex) => {
                const checked = selected === optionIndex;
                const showCorrect = submitted && optionIndex === activeQuestion.correctIndex;

                return (
                  <label
                    key={option}
                    className={[
                      "option",
                      checked ? "selected" : "",
                      showCorrect ? "correct" : "",
                      isWrong && checked ? "incorrect" : ""
                    ].join(" ").trim()}
                  >
                    <input
                      type="radio"
                      name={`question-${activeQuestion.id}`}
                      checked={checked}
                      onChange={() => handleAnswer(activeQuestion.id, optionIndex)}
                      disabled={submitted}
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>

            {submitted ? (
              <p className={`explanation ${isCorrect ? "ok" : "review"}`}>
                {activeQuestion.explanation}
              </p>
            ) : null}
          </article>
        ) : null}

        <div className="question-nav">
          <button
            type="button"
            className="secondary-button"
            onClick={() => goToQuestion(activeIndex - 1)}
            disabled={activeIndex === 0}
          >
            Anterior
          </button>
          <p>
            {submitted
              ? (isCorrect ? "Correcto." : "Incorrecto.")
              : selected !== undefined
                ? isLastQuestion ? "Ultima pregunta respondida." : "Avanzando..."
                : "Selecciona una opcion."}
          </p>
          <button
            type="button"
            className="secondary-button"
            onClick={() => goToQuestion(activeIndex + 1)}
            disabled={isLastQuestion}
          >
            Siguiente
          </button>
        </div>
      </section>

      <section className="actions">
        <button
          className={`primary-button${!submitted && answeredCount === currentQuestions.length ? ' ready' : ''}`}
          onClick={submitted ? handleReset : handleSubmit}
          disabled={!submitted && answeredCount !== currentQuestions.length}
        >
          {submitted ? "Nuevo intento" : "Finalizar simulacro"}
        </button>
        <p>
          {submitted
            ? "Ya puedes iniciar otro run y ver si sube tu precision por modulo."
            : `${answeredCount} de ${currentQuestions.length} respondidas. Completa el run para desbloquear el resultado.`}
        </p>
      </section>

      {result ? (
        <section className="results-grid">
          <article className="result-panel score-panel">
            <p className="eyebrow">Resultado</p>
            <h3>{result.score} / {result.total}</h3>
            <p>{getRecommendation(result)}</p>

            <div className="breakdown">
              {result.areaBreakdown.map((item) => (
                <div key={item.area} className="breakdown-row">
                  <span>{item.title}</span>
                  <strong>{Math.round(item.accuracy * 100)}%</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="result-panel">
            <p className="eyebrow">Refuerzo recomendado</p>
            <h3>Lectura corta para tu siguiente mejora</h3>
            <div className="study-stack">
              {weakAreas.map((area) => (
                <section key={area.area} className="study-card">
                  <header>
                    <strong>{area.title}</strong>
                    <span>
                      {Math.round(area.accuracy * 100)}% de acierto · {areaMap.get(area.area)?.readingMinutes ?? 8} min
                    </span>
                  </header>
                  {result.reinforcementParagraphs
                    .filter((paragraph) =>
                      paragraph.toLowerCase().includes(area.title.slice(0, 8).toLowerCase()) ||
                      area.reinforcement.includes(paragraph)
                    )
                    .map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                    ))}
                </section>
              ))}
            </div>
          </article>
        </section>
      ) : null}

      <section className="history-panel">
        <p className="eyebrow">Historial local</p>
        <h3>Ultimos intentos en este dispositivo</h3>
        {history.length ? (
          <div className="history-list">
            {history.map((item) => (
              <article key={item.finishedAt} className="history-card">
                <strong>{item.score} / {item.total}</strong>
                <span>
                  {new Date(item.finishedAt).toLocaleString("es-AR", {
                    dateStyle: "short",
                    timeStyle: "short"
                  })}
                </span>
              </article>
            ))}
          </div>
        ) : (
          <p className="history-empty">
            Cuando cierres el primer run, aqui vas a ver tu tendencia y consistencia.
          </p>
        )}
      </section>
    </div>
  );
}
