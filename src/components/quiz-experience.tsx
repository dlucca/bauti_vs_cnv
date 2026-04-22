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

const STORAGE_KEY = "cnv-attempt-history";

export function QuizExperience() {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>(() => buildAdaptiveQuestionSet([]));
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<AttemptResult | null>(null);
  const [history, setHistory] = useState<AttemptResult[]>([]);

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="quiz-shell">
      <section className="hero-block">
        <div className="hero-copyblock">
          <p className="eyebrow">Examenbau // Arcade Mode</p>
          <h1>Simulador CNV con look de videogame retro de los 80.</h1>
          <p className="hero-copy">
            Pool ampliado de practica inspirado en la guia local. Cada run toma
            {` ${QUESTIONS_PER_RUN} `}preguntas, mide tus puntos debiles y
            rearma el siguiente intento reforzando donde vienes fallando sin
            repetir siempre el mismo examen.
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
          <span>Motor</span>
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

      <section className="question-list" aria-label="Simulacro">
        {currentQuestions.map((question, index) => {
          const selected = answers[question.id];
          const isCorrect = submitted && selected === question.correctIndex;
          const isWrong = submitted && selected !== undefined && selected !== question.correctIndex;
          const area = areaMap.get(question.area);

          return (
            <article key={question.id} className="question-card">
              <div className="question-meta">
                <span>Stage {String(index + 1).padStart(2, "0")}</span>
                <span>{area?.title ?? question.area}</span>
              </div>
              <h2>{question.prompt}</h2>

              <div className="options">
                {question.options.map((option, optionIndex) => {
                  const checked = selected === optionIndex;
                  const showCorrect = submitted && optionIndex === question.correctIndex;

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
                        name={`question-${question.id}`}
                        checked={checked}
                        onChange={() => handleAnswer(question.id, optionIndex)}
                        disabled={submitted}
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>

              {submitted ? (
                <p className={`explanation ${isCorrect ? "ok" : "review"}`}>
                  {question.explanation}
                </p>
              ) : null}
            </article>
          );
        })}
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
