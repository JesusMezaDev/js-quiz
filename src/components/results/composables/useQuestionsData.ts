import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { useQuestionStore } from '@/stores/question.store';

export const useQuestionsData = () => {
    const { questions } = storeToRefs(useQuestionStore());

    let correctAnswers = ref<number>(0);
    let incorrectAnswers = ref<number>(0);
    let unanswered = ref<number>(0);

    watch(
        () => questions.value,
        (newQuestions) => {
            correctAnswers.value = 0;
            incorrectAnswers.value = 0;
            unanswered.value = 0;
            
            newQuestions.forEach(question => {
                const { userAnswer, correctAnswer } = question;
                if (userAnswer == null) unanswered.value++;
                else if (userAnswer === correctAnswer) correctAnswers.value++;
                else incorrectAnswers.value++;
            
            });
        }
    );

    return {
        correctAnswers,
        incorrectAnswers,
        unanswered,
    }
}