<script setup>
import { ref } from "vue"
import MainSection from "./components/MainSectionComponent.vue";
import Header from "./components/HeaderComponent.vue"
import Projects from "./components/ProjectsComponent.vue";
import { localeText } from "./scipts/locale.js"
const language = ref("en");

function updateLanguage(lang) {
  if (localeText[lang]) {
    language.value = lang.toLowerCase();
  }
}
</script>

<template>
  <Header :locale="localeText[language]" @lang="updateLanguage" />
  <MainSection :locale="localeText[language]" />
  <Projects />
</template>

<style scoped>
Header {
  margin-bottom: 40px;
}
</style>
