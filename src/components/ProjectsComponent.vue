<script setup>
import { defineAsyncComponent } from "vue"
import { projects } from '../scipts/projects';
import ProjectPreview from "./ProjectPreviewComponent.vue"
const props = defineProps(["locale", "language"]);
</script>

<template>
    <div class="todo-container">
        <h2 class="todo">TODO Projects</h2>
    </div>
    <div class="projects-container" id="projects">
        <h2 class="big-font-size">Мои проекты</h2>
        <div class="projects-grid-table">
            <ProjectPreview class="project" v-for="project in projects" :key="project">
                <template v-slot:image-slot><img :src="project.img" :alt="project.img" class="preview-screenshot"></template>
                <p class="big-font-size">
                    {{ project.title }}
                </p>
                <template v-slot:tecs-content>
                    <span class="regular-font-size">
                        {{ props.locale.made_with }}
                    </span>
                    <component v-for="tec in project.technologies" :key="tec" class="small-logo" :title="tec"
                        :is="defineAsyncComponent(() => import(`./logos/${tec}Component.vue`))" />
                </template>
                <template v-slot:button-label>{{ props.locale.view }}</template>
            </ProjectPreview>
        </div>
    </div>
</template>

<style scoped>
.projects-container {
    padding-top: 20px;
    max-width: 1440px;
    margin: auto;
    text-align: center;
    background: rgba(107, 109, 164, 0.36);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(11px);
    border: 1px solid rgba(107, 109, 164, 0.41);

}
.projects-grid-table {
    padding: 32px;
    display: grid;
    gap: 48px;
    grid-template-columns: repeat(2, minmax(0, 550px));
    justify-content: center;
    
}
@media screen and (max-width: 768px) {
    .projects-grid-table {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
