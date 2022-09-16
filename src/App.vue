<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import VTypical from 'vue-typical'
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
  <Navbar/>
  <div class="h-screen flex place-items-center">
    <div class="w-1/2 h-1/2 m-auto">
      <VTypical 
      class="blink text-5xl m-5 font-bold font-mono text-center"
      :steps="['Hi i\'m Malek! 👋🏻']"
      :wrapper="'h2'"
      ></VTypical>
      <div class="container text-center m-auto">
        <p>Welcome to my Homepage!</p>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
