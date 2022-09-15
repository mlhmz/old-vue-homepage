<script setup>
  import Navbar from './components/Navbar.vue'
  import { LoremIpsum } from 'lorem-ipsum';
  import { withModifiers } from 'vue';

  const mockMode = true;

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  })  
</script>

<template>
  <Navbar></Navbar>
  <h1 class="text-5xl text-center m-5 font-bold">Hi, i'm Malek! 👋🏻</h1>
  <div v-if="mockMode">
    <p class="w-1/2 text-center m-auto my-1">{{lorem.generateSentences(20)}}</p>
    <p class="w-1/2 text-center m-auto my-1">{{lorem.generateSentences(20)}}</p>
    <p class="w-1/2 text-center m-auto my-1">{{lorem.generateSentences(20)}}</p>
  </div>
  
</template>

<style scoped>
</style>
