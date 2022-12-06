<script setup>
import { inject, ref } from 'vue';

const $pb = inject('pb')

const projects = ref([])

const getProjects = async () => {
    const result = await $pb.collection('homepage_projects').getFullList();
    if (result) {
        projects.value = result
    }
}

const getScreenshotUrl = (project) => {
    return $pb.getFileUrl(project, project.screenshot, {'thumb': '800x600'})
}

getProjects()

</script>

<template>
    <div class="projects">
        <h1 class="text-center font-bold">Projects</h1>
        <div v-for="project in projects">
            <ProjectCard :project="project" :projectScreenshotUrl="getScreenshotUrl(project)" />
        </div>
    </div>
</template>