<script setup>
import { inject, ref } from "vue";

const $pb = inject("pb");

const projects = ref([]);

const getProjects = async () => {
  const result = await $pb.collection("homepage_projects").getFullList(200, {
    expand: "tags",
  });
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
  <div id="projects">
    <h1 class="text-center text-2xl font-bold">Projects</h1>
    <div
      id="projects-container"
      class="w-full md:w-14/16 lg:w-5/6  m-auto flex flex-wrap justify-center"
    >
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :projectScreenshotUrl="getScreenshotUrl(project)"
        class="xs:w-full s:w-1/3 md:w-1/2 lg:w-1/3"
      />
    </div>
  </div>
</template>
