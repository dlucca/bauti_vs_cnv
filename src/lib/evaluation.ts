import { questions } from "@/data/questions";
import { studyAreas } from "@/data/study-areas";
import { AreaId, AttemptResult, Question } from "@/lib/types";

export const QUESTIONS_PER_RUN = 60;
export const QUESTIONS_PER_AREA = 10;

function getAreaAccuracy(history: AttemptResult[], area: AreaId) {
  const recent = history.slice(0, 3);
  if (!recent.length) return 0.55;

  const values = recent
    .map((attempt) => attempt.areaBreakdown.find((item) => item.area === area)?.accuracy)
    .filter((value): value is number => typeof value === "number");

  if (!values.length) return 0.55;

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getQuestionStats(history: AttemptResult[]) {
  const stats = new Map<number, { seen: number; wrong: number; correct: number }>();

  for (const attempt of history) {
    for (const id of attempt.questionIds ?? []) {
      const current = stats.get(id) ?? { seen: 0, wrong: 0, correct: 0 };
      current.seen += 1;
      stats.set(id, current);
    }

    for (const id of attempt.wrongQuestionIds ?? []) {
      const current = stats.get(id) ?? { seen: 0, wrong: 0, correct: 0 };
      current.wrong += 1;
      stats.set(id, current);
    }

    for (const result of attempt.questionResults ?? []) {
      const current = stats.get(result.id) ?? { seen: 0, wrong: 0, correct: 0 };
      if (result.isCorrect) current.correct += 1;
      stats.set(result.id, current);
    }
  }

  return stats;
}

function getRotationNoise(questionId: number, runNumber: number) {
  const seed = (questionId * 9301 + runNumber * 49297) % 233280;
  return seed / 233280;
}

function interleaveAreaBuckets(buckets: Question[][]) {
  const mixed: Question[] = [];
  const longest = Math.max(...buckets.map((bucket) => bucket.length));

  for (let index = 0; index < longest; index += 1) {
    for (const bucket of buckets) {
      if (bucket[index]) mixed.push(bucket[index]);
    }
  }

  return mixed;
}

export function buildAdaptiveQuestionSet(history: AttemptResult[]) {
  const stats = getQuestionStats(history);
  const runNumber = history.length + 1;

  const buckets = studyAreas.map((area) => {
    const areaAccuracy = getAreaAccuracy(history, area.id);
    const weaknessWeight = 1 - areaAccuracy;

    const ranked = questions
      .filter((question) => question.area === area.id)
      .sort((left, right) => {
        const leftStats = stats.get(left.id) ?? { seen: 0, wrong: 0, correct: 0 };
        const rightStats = stats.get(right.id) ?? { seen: 0, wrong: 0, correct: 0 };

        const leftScore =
          leftStats.wrong * 5 +
          (leftStats.seen === 0 ? 4 : 0) +
          Math.max(0, 2 - leftStats.correct) +
          weaknessWeight * 3 +
          getRotationNoise(left.id, runNumber);

        const rightScore =
          rightStats.wrong * 5 +
          (rightStats.seen === 0 ? 4 : 0) +
          Math.max(0, 2 - rightStats.correct) +
          weaknessWeight * 3 +
          getRotationNoise(right.id, runNumber);

        return rightScore - leftScore;
      });

    return ranked.slice(0, QUESTIONS_PER_AREA);
  });

  return interleaveAreaBuckets(buckets);
}

function buildReinforcementParagraphs(result: AttemptResult) {
  const weakAreas = getWeakAreas(result);
  const paragraphs: string[] = [];

  for (const weakArea of weakAreas) {
    const moduleInfo = studyAreas.find((area) => area.id === weakArea.area);
    const missedQuestionResults = result.questionResults
      .filter((item) => item.area === weakArea.area && !item.isCorrect)
      .slice(0, 4);
    const conceptCounts = new Map<string, number>();

    for (const item of missedQuestionResults) {
      conceptCounts.set(item.concept, (conceptCounts.get(item.concept) ?? 0) + 1);
    }

    const missedConcepts = [...conceptCounts.entries()]
      .sort((left, right) => right[1] - left[1])
      .map(([concept]) => concept)
      .slice(0, 3);

    paragraphs.push(...weakArea.reinforcement.slice(0, 2));

    if (missedConcepts.length) {
      paragraphs.push(
        `En este intento conviene volver sobre ${missedConcepts.join(", ")} dentro de ${moduleInfo?.title ?? "este modulo"}. No hace falta releer todo: enfocate en la definicion correcta, el criterio regulatorio aplicable y la razon por la que la opcion correcta desplaza a las demas.`
      );
    }

    const examples = missedQuestionResults.slice(0, 2).map((item) => item.prompt);
    if (examples.length) {
      paragraphs.push(
        `Tus errores recientes en ${moduleInfo?.title ?? "este modulo"} aparecieron especialmente en consignas como: ${examples.join(" / ")}. Para mejorar en el proximo run, intenta reconocer primero la palabra gatillo de la consigna y luego descartar opciones por criterio normativo o financiero antes de elegir.`
      );
    }
  }

  return paragraphs.slice(0, 6);
}

export function evaluateAttempt(
  selectedQuestions: Question[],
  answers: Record<number, number>
): AttemptResult {
  const score = selectedQuestions.reduce((acc, question) => {
    return acc + (answers[question.id] === question.correctIndex ? 1 : 0);
  }, 0);

  const areaBreakdown = studyAreas.map((area) => {
    const areaQuestions = selectedQuestions.filter((question) => question.area === area.id);
    const correct = areaQuestions.reduce((acc, question) => {
      return acc + (answers[question.id] === question.correctIndex ? 1 : 0);
    }, 0);

    return {
      area: area.id,
      title: area.title,
      correct,
      total: areaQuestions.length,
      accuracy: areaQuestions.length ? correct / areaQuestions.length : 0
    };
  });

  const questionResults = selectedQuestions.map((question) => ({
    id: question.id,
    area: question.area,
    prompt: question.prompt,
    concept: question.concept ?? question.prompt,
    isCorrect: answers[question.id] === question.correctIndex,
    explanation: question.explanation
  }));

  const wrongQuestionIds = questionResults
    .filter((item) => !item.isCorrect)
    .map((item) => item.id);

  const attempt: AttemptResult = {
    finishedAt: new Date().toISOString(),
    score,
    total: selectedQuestions.length,
    questionIds: selectedQuestions.map((question) => question.id),
    wrongQuestionIds,
    areaBreakdown,
    questionResults,
    reinforcementParagraphs: []
  };

  attempt.reinforcementParagraphs = buildReinforcementParagraphs(attempt);

  return attempt;
}

export function getWeakAreas(result: AttemptResult): Array<{
  area: AreaId;
  title: string;
  accuracy: number;
  reinforcement: string[];
}> {
  return [...result.areaBreakdown]
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 2)
    .map((entry) => {
      const studyArea = studyAreas.find((area) => area.id === entry.area);

      return {
        area: entry.area,
        title: entry.title,
        accuracy: entry.accuracy,
        reinforcement: studyArea?.reinforcement ?? []
      };
    });
}

export function getRecommendation(result: AttemptResult): string {
  const ratio = result.score / result.total;

  if (ratio >= 0.85) {
    return "Buen nivel general. El foco ahora deberia estar en sostener consistencia y pulir errores puntuales.";
  }

  if (ratio >= 0.65) {
    return "Hay una base solida, pero todavia conviene reforzar las areas con menor precision antes de otro simulacro completo.";
  }

  return "Conviene combinar mas practica guiada con repaso conceptual corto por area antes de intentar nuevamente en modo examen.";
}
