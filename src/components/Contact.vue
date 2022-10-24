<template>
    <div id="popup" class="fixed w-11/12 md:w-1/4 bg-secondary shadow-button-backglow shadow-primary border-solid border-primary border-2 rounded-3xl inset-x-0 mx-auto backdrop-blur-lg bg-opacity-95 text-center p-5">
        <h1 class="text-xl font-bold m-5">Contact</h1>
        <form class="m-auto">
            <h2 class="font-semibold">Form</h2>
            <input class="primary-input w-full" placeholder="Name"/>
            <input class="primary-input w-full" placeholder="Email"/>
            <textarea class="my-2 bg-transparent rounded-xl border-solid border-primary border-2 p-2 resize-none focus:outline-none w-full" placeholder="Message"/>
            <button class="primary-button m-auto">Send</button>
        </form>
        <h2 class="font-semibold my-3">Other contact options</h2>
        <ul>
            <li><a class="text-primary" href="mailto:malek.hamza@tuta.io">malek.hamza@tuta.io</a></li>
        </ul>
    </div>
</template>