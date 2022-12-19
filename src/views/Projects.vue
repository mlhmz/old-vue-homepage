<script setup>
import { inject, ref } from "vue";

const $pb = inject("pb");

const projects = ref([]);

const getProjects = async () => {
  const result = await $pb.collection("homepage_projects").getFullList(200, 
    {
      expand: 'tags',
    }
  );
  if (result) {
    projects.value = result;
  }
};

const getScreenshotUrl = (project) => {
  return $pb.getFileUrl(project, project.screenshot, { thumb: "800x600" });
};

getProjects();
</script>

<template>
  <div id="projects" class="">
    <h1 class="text-center text-2xl font-bold">Projects</h1>
    <div
      id="projects-container"
      class="w-1/2 m-auto flex flex-wrap justify-center"
    >
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :projectScreenshotUrl="getScreenshotUrl(project)"
        class="w-1/3"
      />
    </div>
  </div>
</template>
