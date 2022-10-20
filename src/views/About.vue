<script setup>
    import {AgeFromDateString} from 'age-calculator'
    import VTypical from 'vue-typical'

    const age = new AgeFromDateString('2003-07-20').age
</script>

<template>
    <div class="about w-1/2 m-auto">
        <h1 class="text-center text-2xl font-bold">About me</h1>
        <div class="bg-white w-40 h-40 rounded-md m-auto my-5" />
        <div class="h-10 m-auto">
            <VTypical 
                class="blink text-xl md:text-4xl mt-5 font-bold font-mono text-center block"
                :steps="['nerd', 1000, 'goal-oriented', 1000, 'flexible', 10000]"
                :wrapper="'h2'"
                :loop="Infinity"
                ></VTypical>
        </div>
        <div class="text-center mt-5">
            <p>I am a {{age}} year old software developer (in education) from germany.</p>
            <br/>
            <p>my hobbies are:</p>
            <ul>
                <li>photographing 📷</li>
                <li>playing guitar 🎸</li>
                <li>programming 🧑‍💻</li>
            </ul>
            <br/>
            <p>since I was a child I have been fascinated with computers and their environment. <br/>
                now being an adult, I made my dream come true and started
                to develop software.</p>
            <br/>
            <p>I am mainly a java developer and am oriented towards full-stack workflows and, privately, <br/>
                I am testing new technologies to automate boring tasks that I face. 
                most of my private projects, if they are public, can be found on github.</p>

        </div>
        
    </div>
</template>