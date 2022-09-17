<script setup>
</script>

<template>
    <nav class="fixed">
        <div class="flex flex-wrap justify-between items-center mx-auto w-screen p-3 bg-slate-900 bg-opacity-80 border-b border-slate-800 backdrop-blur-lg">
            <RouterLink to="/" class="font-bold text-xl flex self-center">🧑‍💻 Malek Hamza</RouterLink>
            <div class="w-full md:block md:w-auto">
                <ul class="flex md:flex-row">
                    <li class="mx-5">
                        <RouterLink to="/about" class="transition ease-in-out delay-50 font-bold hover:text-primary">About me</RouterLink>
                    </li>
                    <li class="mx-5">
                        <RouterLink to="/blog" class="transition ease-in-out delay-50 font-bold hover:text-primary">Blog</RouterLink>
                    </li>
                    <li class="mx-5">
                        <RouterLink to="/links" class="transition ease-in-out delay-50 font-bold hover:text-primary">Links</RouterLink>
                    </li>
                    <li class="mx-5">
                        <RouterLink to="/server" class="transition ease-in-out delay-50 font-bold hover:text-primary">Server</RouterLink>
                    </li>
                </ul>
            </div>
            <button class="transition ease-in-out delay-50 bg-teal-400 text-secondary font-bold py-1 px-4 mx-5 rounded-full shadow-button-backglow hover:shadow-teal-800">Contact</button>
        </div>
    </nav>
    <div class="container h-20 w-screen"></div>
</template>

<style scoped>
    .active {
        color: rgb(45 212 191);
    }
</style>
    
