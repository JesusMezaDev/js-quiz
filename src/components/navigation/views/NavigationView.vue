<template>
    <div v-if="questions.length > 0" class="row">
        <div class="col d-flex justify-content-center">
            <nav>
                <ul class="pagination">
                    <li class="page-item" :class="{ disabled: currentQuestion === 1 }">
                        <a class="page-link" href="#" @click.prevent="prevQuestion()">Previous</a>
                    </li>
                    <li class="page-item disabled ms-3 me-3">
                        <a class="page-link" href="#">Pregunta actual: {{ currentQuestion }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: currentQuestion === questions.length }">
                        <a class="page-link" href="#" @click.prevent="nextQuestion()">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useQuestionStore } from '@/stores/question.store';
    const questionsStore = useQuestionStore();
    const { currentQuestion, questions } = storeToRefs(questionsStore);
    const { prevQuestion, nextQuestion } = questionsStore;
</script>

<style scoped>

</style>