<script setup>
import MainSection from "../components/MainSectionComponent.vue";
import Projects from "../components/ProjectsComponent.vue";
const props = defineProps(["locale", "language"]);
</script>

<template>
    <MainSection :locale="props.locale" class="margin-bottom40"/>
    <Projects :locale="props.locale" :language="props.language" class="margin-bottom40 "/>
</template>

<style scoped>
</style>