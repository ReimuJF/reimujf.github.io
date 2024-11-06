<script setup>
import { ref } from "vue"
import Header from './components/HeaderComponent.vue';
import { localeText } from "./scipts/locale.js";
import Footer from "./components/FooterComponent.vue";
const language = ref("ru");

function updateLanguage(lang) {
  if (localeText[lang]) {
    language.value = lang.toLowerCase();
  }
}
</script>

<template>
  <Header :locale="localeText[language]" @lang="updateLanguage" />
  <RouterView :Locale="localeText[language]" :language="language"></RouterView>
  <Footer />
</template>



<style scoped>
Header {
  margin-bottom: 40px;
}
</style>
