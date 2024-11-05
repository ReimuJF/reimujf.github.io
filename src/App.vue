<script setup>
import { ref } from "vue"
import Header from './components/HeaderComponent.vue';
import { localeText } from "./scipts/locale.js"
const language = ref("ru");

function updateLanguage(lang) {
  if (localeText[lang]) {
    language.value = lang.toLowerCase();
  }
}
</script>

<template>
  <Header :locale="localeText[language]" @lang="updateLanguage" />
  <RouterView :locale="localeText[language]"></RouterView>
</template>



<style scoped>
Header {
  margin-bottom: 40px;
}
</style>
