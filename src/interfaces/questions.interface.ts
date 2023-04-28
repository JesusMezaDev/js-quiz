export interface iQuestion {
    id: number;
    description: string;
    code: string;
    answers: string[];
    correctAnswer: number;
    userAnswer?: number;
    isCorrectUserAnswer?: boolean;
}