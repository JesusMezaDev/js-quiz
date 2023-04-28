
<template>
  <div class="container-sm">
    <Game />
    <Navigation />
    <QuestionCard />
    <Results />
  </div>
</template>

<script setup lang="ts">
  import Game from './components/game/views/GameView.vue';
  import Navigation from './components/navigation/views/NavigationView.vue';
  import QuestionCard from './components/question-card/views/QuestionCardView.vue';
  import Results from './components/results/views/ResultsView.vue';
</script>

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  @import 'bootstrap-icons/font/bootstrap-icons.css';
</style>