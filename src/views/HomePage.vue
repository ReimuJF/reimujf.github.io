<script setup>
import MainSection from "../components/MainSectionComponent.vue";
import Projects from "../components/ProjectsComponent.vue";
const props = defineProps(["locale"]);
</script>

<template>
    <MainSection :locale="props.locale" class="main"/>
    <Projects />
</template>

<style scoped>
.main {
    margin-bottom: 40px;
}
</style>