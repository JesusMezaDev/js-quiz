import { storeToRefs } from 'pinia';

import { useQuestionStore } from '@/stores/question.store';

export const useQuestionsData = () => {
    const { questions } = storeToRefs(useQuestionStore());

    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unanswered = 0;

    questions.value.forEach(question => {
        const { userAnswer, correctAnswer } = question;
        if (userAnswer == null) unanswered++;
        else if (userAnswer === correctAnswer) correctAnswers++;
        else incorrectAnswers++;
    
    });

    return {
        correctAnswers,
        incorrectAnswers,
        unanswered,
    }
}