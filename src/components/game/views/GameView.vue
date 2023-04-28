<template>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <h3>
          <IconJavascript />
          Javascript Quiz
        </h3>
      </div>
    </div>
    <div v-if="questions.length === 0" class="row">
      <div class="col d-flex justify-content-center">
        <button class="btn btn-success m-3" @click.prevent="fetchQuestions(10)">¡Empezar el Juego!</button>
      </div>
    </div>
</template>

<script setup lang="ts">
    import IconJavascript from '@/components/icons/IconJavascript.vue';
    import { storeToRefs } from 'pinia';
    import { useQuestionStore } from '@/stores/question.store';
    const questionsStore = useQuestionStore();
    const { questions } = storeToRefs(questionsStore);
    const { fetchQuestions } = questionsStore;
</script>

<style scoped>

</style>