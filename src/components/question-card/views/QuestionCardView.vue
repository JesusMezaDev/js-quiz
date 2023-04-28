<template>
    <div v-if="currentQuestionInfo" class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">{{ currentQuestionInfo.description }}</h5>
                </div>
                <div class="card-body">
                    <code v-if="currentQuestionInfo.code">
                        <pre class="m-3">{{ currentQuestionInfo.code }}</pre>
                    </code>
                    <div class="list-group text-center">
                        <button
                            type="button"
                            v-for="(answer, index) in currentQuestionInfo.answers"
                            :disabled="currentQuestionInfo.userAnswer != null"
                            class="list-group-item list-group-item-action"
                            :class="getClassButtonColor(currentQuestionInfo, index)"
                            @click.prevent="selectAnswer(currentQuestionInfo.id, index)"
                        >
                            {{ answer }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useQuestionStore } from '@/stores/question.store';
    import type { iQuestion } from '../../../interfaces/questions.interface';
    const questionsStore = useQuestionStore();
    const { currentQuestionInfo } = storeToRefs(questionsStore);
    const { selectAnswer } = questionsStore;

    const getClassButtonColor = (info: iQuestion, index: number) => {
        const { userAnswer, correctAnswer, isCorrectUserAnswer } = info;
        if (userAnswer == null) return '';
        if (index !== correctAnswer && index !== userAnswer) return '';
        if (index === correctAnswer) return 'list-group-item-success correct-answer';
        if (index === userAnswer) return 'list-group-item-danger wrong-answer';
        return ''
    }
</script>

<style scoped>
    pre {
        background-color: #464646;
        border: 5px solid #464646;
        border-radius: 5px;
    }

    .correct-answer {
        background-color: green !important;
    }

    .wrong-answer {
        background-color: red !important;
    }
</style>