<script setup>
import VTypical from 'vue-typical'

const views = localStorage.getItem(new Date().toDateString() + " Views")
</script>

<template>
    <div class="home">
        <div class="h-screen flex place-items-center">
            <div class="w-screen h-1/2 m-auto">
                <VTypical 
                class="blink text-3xl md:text-5xl m-5 font-bold font-mono text-center"
                :steps="['Hi I\'m Malek! 👋🏻']"
                :wrapper="'h2'"
                ></VTypical>
                <div class="container text-center m-auto">
                    <p>Welcome to my Homepage!</p>
                    <p>This is your {{views}}. view today</p>
                    <div class="flex justify-between h-10 w-4/12 my-5 m-auto" id="desktop-menu">
                        <a href="https://github.com/mlhmz"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                        <a href="https://instagram.com/ml.hmz_"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                        <a href="https://https://twitter.com/ml_hmz"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                        <a href="https://www.linkedin.com/in/malek-hamza-98254a248/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                        <a href="https://www.xing.com/profile/Malek_Hamza"><FontAwesomeIcon icon="fa-brands fa-xing" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .blink::after {
        position: relative;
        content: '|';
        animation: blink 2s infinite ease-in-out;
        z-index: -100;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
</style>