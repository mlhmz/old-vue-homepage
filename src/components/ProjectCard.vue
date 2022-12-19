<script setup>
const props = defineProps({
  project: Object,
  projectScreenshotUrl: String,
});
</script>

<template>
  <div :id="props.project.id">
    <div id="content" class="m-3">
      <img
        :src="props.projectScreenshotUrl"
        class="w-full my-2 rounded-xl shadow-lg shadow-secondary-compatible-shadow"
      />
      <h2 class="font-bold">{{ props.project.title }}</h2>
      <p>{{ props.project.description }}</p>
      <p class="text-primary">
        <a :href="props.project.repo_url">Github-Repo</a>
      </p>
      <ul>
        <li v-for="tag in props.project.tags">
          {{ tag.tag_name }}
        </li>
      </ul>
    </div>
  </div>
</template>
