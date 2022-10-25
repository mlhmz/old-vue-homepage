<script setup>
const emits = defineEmits(['toggle-contact'])

const props = defineProps({
    contactOpen: Boolean
})
</script>

<template>
    <div v-show="props.contactOpen" id="popup" class="fixed w-11/12 md:w-3/4 lg:w-2/6 bg-secondary shadow-button-backglow shadow-primary border-solid border-primary border-2 rounded-3xl inset-x-0 mx-auto backdrop-blur-lg bg-opacity-95 text-center p-5">
        <div id="close-btn-container" class="grid place-items-end">
            <font-awesome-icon class="text-2xl align-right cursor-pointer" @click="$emit('toggle-contact')" icon="fa-solid fa-xmark" />
        </div>
        <h1 class="text-xl font-bold m-5">Contact</h1>
        <form class="m-auto">
            <h2 class="font-semibold">Form - coming soon</h2>
            <input class="primary-input w-full cursor-not-allowed" disabled placeholder="Name"/>
            <input class="primary-input w-full cursor-not-allowed" disabled placeholder="Email"/>
            <textarea class="my-2 bg-transparent rounded-xl border-solid border-primary border-2 p-2 resize-none focus:outline-none w-full cursor-not-allowed" disabled placeholder="Message"/>
            <button class="primary-button m-auto cursor-not-allowed" disabled>Send</button>
        </form>
        <h2 class="font-semibold my-3">Other contact options</h2>
        <ul>
            <li><a class="text-primary" href="mailto:malek.hamza@tuta.io">malek.hamza@tuta.io</a></li>
        </ul>
    </div>
</template>