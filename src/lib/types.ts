export type AreaId =
  | "modulo-1"
  | "modulo-2"
  | "modulo-3"
  | "modulo-4"
  | "modulo-5"
  | "modulo-6";

export type Question = {
  id: number;
  area: AreaId;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  concept?: string;
  subtopic?: string;
};

export type StudyArea = {
  id: AreaId;
  title: string;
  description: string;
  readingMinutes: number;
  reinforcement: string[];
};

export type AttemptResult = {
  finishedAt: string;
  score: number;
  total: number;
  questionIds: number[];
  wrongQuestionIds: number[];
  reinforcementParagraphs: string[];
  areaBreakdown: Array<{
    area: AreaId;
    title: string;
    correct: number;
    total: number;
    accuracy: number;
  }>;
  questionResults: Array<{
    id: number;
    area: AreaId;
    prompt: string;
    concept: string;
    isCorrect: boolean;
    explanation: string;
  }>;
};
