import type { iQuestion } from './questions.interface';

export interface iGlobalState {
    loading: boolean,
    questions?: iQuestion[],
    currentQuestion: number,
    fetchQuestions: (limit: number) => Promise<void>,
    selectAnswer: (questionId: number, answerId: number) => void,
    nextQuestion: () => void,
    prevQuestion: () => void,
    reset: () => void,
}