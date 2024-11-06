<script setup>
import { projects } from '../scipts/projects';
const props = defineProps(["language", "id", "Locale"]);
const project = projects[props.id];
</script>

<template>
    <h2 class="todo">todo Project Main Component</h2>
    <div class="project-container">

        {{ project.title }}
        {{ project.img }}
        <a :href="project.livePage" target="_blank"><button class="button">{{ props.Locale.live }}</button></a>
        <button class="button" @click="$router.go(-1)"> {{ props.Locale.back }}</button>
        <a :href="project.url" target="_blank"><button class="button">{{ props.Locale.repo }}</button></a>
        {{ project.localesDescription[props.language].description }}

    </div>
</template>