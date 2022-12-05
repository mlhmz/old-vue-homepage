<script setup>
const props = defineProps({
    project: Object,
    projectScreenshotUrl: String
})
</script>

<template>
    <!-- TODO: Implement Style -->
    <img :src="props.projectScreenshotUrl" />
    <p>{{ props.project.title }}</p>
    <p>{{ props.project.description }}</p>
    <p><a :href="props.project.repo_url">Github-Repo</a></p>
    <ul>
        <li v-for="tag in props.project.tags">
            {{ tag.tag_name }}
        </li>
    </ul>
</template>