<script setup>
import MainSection from "../components/MainSectionComponent.vue";
import Projects from "../components/ProjectsComponent.vue";
const props = defineProps(["locale"]);
</script>

<template>
    <MainSection :locale="props.locale" />
    <Projects />
</template>