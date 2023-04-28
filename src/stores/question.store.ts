import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import confetti from 'canvas-confetti';
import type { iQuestion } from '@/interfaces/questions.interface';

export const useQuestionStore = defineStore('questions', () => {
    const questions = ref<iQuestion[]>([]);
    const loading =  ref<boolean>(false);
    const currentQuestion = ref<number>(1);

    return {
        loading,
        questions,
        currentQuestion,
        currentQuestionInfo: computed(() => questions.value[currentQuestion.value - 1]),
        fetchQuestions: async (limit: number) => {
            const res = await fetch(`${ import.meta.env.Q_SERVER }/questions.json`);
            const data = await res.json();
            questions.value = <iQuestion[]>data.sort(() => Math.random() - 0.5).slice(0, limit);
        },
        selectAnswer: (questionId: number, answerIndex: number) => {
            const newQuestions = [...questions.value];
            const questionIndex = newQuestions.findIndex(question => question.id === questionId);
            const questionInfo = newQuestions[questionIndex];
            const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;

            if (isCorrectUserAnswer) confetti();

            newQuestions[questionIndex] = {
                ...questionInfo,
                isCorrectUserAnswer,
                userAnswer: answerIndex
            }

            questions.value = newQuestions;
        },
        nextQuestion: () => {
            const nextQuestion = currentQuestion.value + 1;
            if (nextQuestion <= questions.value.length) currentQuestion.value = nextQuestion;
        },
        prevQuestion: () => {
            const previouseQuestion = currentQuestion.value - 1;
            if (previouseQuestion >= 0) currentQuestion.value = previouseQuestion;
        },

        reset: () => {
            currentQuestion.value = 1;
            questions.value = [];
        }
    }
}); 