<template>
    <div v-if="questions.length > 0" class="row">
        <div class="col">
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <h3>Estos son tus resultados</h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p><i class="bi-check2"></i> {{ correctAnswers }} correctas! </p>
                </div>
                <div class="col">
                    <p><i class="bi-x-lg"></i> {{ incorrectAnswers }} incorrectas </p>
                </div>
                <div class="col">
                    <p><i class="bi-exclamation-lg"></i> {{ unanswered }} sin contestar </p>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" @click.prevent="reset()">¡Iniciar de nuevo!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useQuestionStore } from '@/stores/question.store';
    import { useQuestionsData } from '../composables/useQuestionsData';
    const questionsStore = useQuestionStore();
    const { questions } = storeToRefs(questionsStore);
    const { reset } = questionsStore;
    const { correctAnswers, incorrectAnswers, unanswered } = useQuestionsData();
</script>

<style scoped>

</style>