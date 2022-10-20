<script setup>
    import {AgeFromDateString} from 'age-calculator'
    import VTypical from 'vue-typical'
    import { reactive } from '@vue/reactivity';

    const age = new AgeFromDateString('2003-07-20').age
    const personalTraits = reactive({
        activated: true
    });

    function switchToPersonalTraits() {
        personalTraits.activated = true;
        console.log(personalTraits.activated)
    }

    function switchToHobbies() {
        personalTraits.activated = false;
        console.log(personalTraits.activated)
    }
</script>

<template>
    <div id="about" class="w-1/2 m-auto">
        <h1 class="text-center text-2xl font-bold">About me</h1>
        <div id="profile-picture" class="bg-white w-40 h-40 rounded-md m-auto my-10" />
        <div id="text-content" class="text-center my-5">
            <div id="introduction">
                <p>I am a {{age}} year old software developer (in education) from germany.</p>
            </div>
            <br/>
            <div id="information-selection">
                <button :class="{ active: personalTraits.activated }" v-on:click="switchToPersonalTraits">my personal traits</button>
                <br/>
                <button :class="{ active: !personalTraits.activated }" v-on:click="switchToHobbies">my hobbies</button>
                <VTypical 
                class="h-10 m-auto my-5 blink text-xl md:text-4xl font-bold font-mono text-center block"
                v-if="personalTraits.activated"
                :steps="['tech geek 💻', 1000, 'goal-oriented 🎯', 1000, 'team-oriented 🤝🏻', 10000]"
                :wrapper="'div'"
                :loop="Infinity"
                ></VTypical>
                <VTypical 
                class="h-10 m-auto my-5 blink text-xl md:text-4xl font-bold font-mono text-center block"
                v-else
                :steps="['photography 📷', 1000, 'guitar 🎸', 1000, 'programming ⌨', 10000]"
                :wrapper="'div'"
                :loop="Infinity"
                ></VTypical>
            </div>
            <br/>
            <div id="text">
                <p>since I was a child I have been fascinated with computers and their environment. <br/>
                now being an adult, I made my dream come true and started
                to develop software.</p>
                <br/>
                <p>I am mainly a java developer and am oriented towards full-stack workflows and, privately, <br/>
                    I am testing new technologies to automate boring tasks that I face. 
                    most of my private projects, if they are public, can be found on github.</p>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .active {
        color: rgb(45 212 191);
    }
</style>