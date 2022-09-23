<script setup>
    import { LoremIpsum } from "lorem-ipsum";

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
    <div class="about w-1/2 m-auto">
        <h1 class="text-center text-2xl font-bold">About me</h1>
        <div class="bg-white w-40 h-40 rounded-md m-auto my-5">
        
        </div>
        <p>{{lorem.generateSentences(3)}}</p>
    </div>
</template>