<script setup>
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const projects = await pb.collection('homepage_projects').getFullList();

for (project in projects) {
    console.log(project.id)
}
</script>

<template>
    <div class="projects">
        <h1 class="text-center">Coming soon</h1>
    </div>
</template>