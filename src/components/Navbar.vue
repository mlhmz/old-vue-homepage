<script setup>
</script>

<template>
    <nav class="fixed">
        <div class="flex flex-wrap justify-between items-center mx-auto w-screen p-3 bg-slate-900 bg-opacity-80 border-b border-slate-800 backdrop-blur-lg">
            <RouterLink to="/" class="font-bold text-xl flex self-center">🧑‍💻 <span class="text-white">Malek Hamza</span></RouterLink>
            <div class="block md:hidden">
                <button class="flex items-center px-3 py-2 mx-7 border rounded text-teal-200 border-primary hover:text-secondary hover:bg-primary">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="md:w-auto hidden md:block">
                <ul class="flex md:flex-row">
                    <li class="mx-5">
                        <RouterLink to="/about" class="transition ease-in-out delay-50 font-bold hover:text-primary">About me</RouterLink>
                    </li>
                    <li class="mx-5">
                        <RouterLink to="/projects" class="transition ease-in-out delay-50 font-bold hover:text-primary">Projects</RouterLink>
                    </li>
                    <li class="mx-5">
                        <RouterLink to="/links" class="transition ease-in-out delay-50 font-bold hover:text-primary">Links</RouterLink>
                    </li>
                    <li class="mx-5">
                        <RouterLink to="/server" class="transition ease-in-out delay-50 font-bold hover:text-primary">Server</RouterLink>
                    </li>
                </ul>
            </div>
            <button class="transition ease-in-out delay-50 bg-teal-400 text-secondary font-bold py-1 px-4 mx-7 rounded-full shadow-button-backglow hover:shadow-teal-800 hidden md:block">Contact</button>
        </div>
    </nav>
    <div class="container h-20 w-screen"></div>
</template>

<style scoped>
    .active {
        color: rgb(45 212 191);
    }
</style>
    
