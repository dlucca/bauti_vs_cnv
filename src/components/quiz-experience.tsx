'use client';

import { useEffect, useMemo, useState } from "react";

import { questions } from "@/data/questions";
import { studyAreas } from "@/data/study-areas";
import {
  buildAdaptiveQuestionSet,
  getRecommendation,
  getWeakAreas,
  QUESTIONS_PER_AREA,
  QUESTIONS_PER_RUN,
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
  const questionPoolByArea = useMemo(() => {
    return studyAreas.map((area) => ({
      ...area,
      pool: questions.filter((question) => question.area === area.id).length
    }));
  }, []);

  const areaMap = useMemo(() => {
    return new Map(studyAreas.map((area) => [area.id, area]));
  }, []);

  function handleAnswer(questionId: number, optionIndex: number) {
    setAnswers((current) => ({ ...current, [questionId]: optionIndex }));
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
    const nextQuestions = buildAdaptiveQuestionSet(history);
    setAnswers({});
    setResult(null);
    setSubmitted(false);
    setCurrentQuestions(nextQuestions);
    setActiveIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToQuestion(index: number) {
    setActiveIndex(Math.max(0, Math.min(index, currentQuestions.length - 1)));
  }

  const activeQuestion = currentQuestions[activeIndex];
  const selected = activeQuestion ? answers[activeQuestion.id] : undefined;
  const activeArea = activeQuestion ? areaMap.get(activeQuestion.area) : null;
  const isCorrect = submitted && activeQuestion ? selected === activeQuestion.correctIndex : false;
  const isWrong =
    submitted && activeQuestion ? selected !== undefined && selected !== activeQuestion.correctIndex : false;

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
            <small>{Object.keys(answers).length} / {currentQuestions.length} checkpoints</small>
          </div>
        </div>
      </section>

      <section className="summary-strip">
        <article>
          <span>Modo de juego</span>
          <strong>Next.js + TypeScript</strong>
          <p>Deploy natural en Vercel y camino simple para sumar base de datos, login y analytics.</p>
        </article>
        <article>
          <span>Banco</span>
          <strong>{questions.length} preguntas / 6 modulos</strong>
          <p>Cada intento usa 10 por modulo y rota segun errores previos, exposicion y nivel de dominio.</p>
        </article>
        <article>
          <span>Feedback</span>
          <strong>Diagnostico + lectura corta</strong>
          <p>Score total, precision por modulo y refuerzo breve generado desde tus errores reales del run.</p>
        </article>
      </section>

      <section className="module-grid">
        {questionPoolByArea.map((area) => (
          <article key={area.id} className="module-card">
            <span>{area.title}</span>
            <strong>{QUESTIONS_PER_AREA} por run · pool {area.pool}</strong>
            <p>{area.description}</p>
          </article>
        ))}
      </section>

      <section className="question-stage" aria-label="Simulacro">
        <div className="question-stage-header">
          <div className="question-stage-meta">
            <span>Stage {String(activeIndex + 1).padStart(2, "0")}</span>
            <strong>{activeArea?.title ?? activeQuestion?.area}</strong>
          </div>
          <div className="question-stage-meter" aria-hidden="true">
            <div
              className="question-stage-meter-fill"
              style={{ width: `${((activeIndex + 1) / currentQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {activeQuestion ? (
          <article className="question-card spotlight-card">
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
            {selected !== undefined
              ? "Respuesta guardada para este checkpoint."
              : "Selecciona una opcion y sigue avanzando."}
          </p>
          <button
            type="button"
            className="secondary-button"
            onClick={() => goToQuestion(activeIndex + 1)}
            disabled={activeIndex === currentQuestions.length - 1}
          >
            Siguiente
          </button>
        </div>

        <div className="question-dots" aria-label="Navegacion de preguntas">
          {currentQuestions.map((question, index) => {
            const answered = answers[question.id] !== undefined;
            const isActive = index === activeIndex;

            return (
              <button
                key={question.id}
                type="button"
                className={[
                  "question-dot",
                  answered ? "answered" : "",
                  isActive ? "active" : ""
                ].join(" ").trim()}
                onClick={() => goToQuestion(index)}
                aria-label={`Ir a la pregunta ${index + 1}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </section>

      <section className="actions">
        <button
          className="primary-button"
          onClick={submitted ? handleReset : handleSubmit}
          disabled={!submitted && Object.keys(answers).length !== currentQuestions.length}
        >
          {submitted ? "Nuevo intento" : "Finalizar simulacro"}
        </button>
        <p>
          {submitted
            ? "Ya puedes iniciar otro run y ver si sube tu precision por modulo."
            : "Para desbloquear el resultado final, completa este run adaptativo de 60 checkpoints."}
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
