<script setup>
import MainSection from "../components/MainSectionComponent.vue";
import Projects from "../components/ProjectsComponent.vue";
const props = defineProps(["Locale", "language"]);
</script>

<template>
    <MainSection :Locale="props.Locale" class="margin-bottom40"/>
    <Projects :Locale="props.Locale" :language="props.language" class="margin-bottom40 "/>
</template>

<style scoped>
</style>