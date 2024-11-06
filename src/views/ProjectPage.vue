<script setup>
import { projects } from '../scipts/projects';
import GitHub from "../components/logos/GitHubComponent.vue"
import Arrow from '@/components/logos/ArrowComponent.vue';
const props = defineProps(["language", "id", "Locale"]);
const project = projects[props.id];
</script>

<template>
    <div class="project-container max-width">
        <button class="button regular-font-size" @click="$router.go(-1)"
            style="margin-left: 30px; margin-bottom: 0;">{{ props.Locale.back }}</button>
        <div class="project-flex-container">
            <div class="left-part">
                <div class="text-block">
                    <h2 class="largest-font-size">{{ project.title }}</h2>
                    <p class="regular-font-size">{{ project.localesDescription[props.language].description }}</p>
                </div>
                <div class="buttons-row">
                    <a :href="project.livePage" target="_blank">
                        <button class="button regular-font-size button-flex"><Arrow  /> {{ props.Locale.live }}</button></a>
                    <a :href="project.url" target="_blank">
                        <button class="button regular-font-size button-flex"><span><GitHub class="small-logo"/> </span>{{ props.Locale.repo }}</button></a>
                </div>
            </div>
            <div class="right-part">
                <img :src="project.img" :alt="project.img" class="preview-screenshot big-image">
            </div>

        </div>

    </div>
</template>

<style scoped>
.project-container {
    height: auto;
    padding-bottom: 30px;
    margin: 40px auto 40px auto;
    background: rgba(107, 109, 164, 0.36);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(11px);
    border: 1px solid rgba(107, 109, 164, 0.41);
}

.project-flex-container {
    display: flex;
    padding: 30px;
    gap: 48px;
    flex-direction: row;
}

.left-part {
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    text-align: left;
}
a {
    width: 100%;
    text-decoration: none;
}
.buttons-row {
    margin-top: auto;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}
.button-flex {
    display: flex;
    gap: 5px
}
.right-part {
    flex-basis: 60%;
    text-align: right;
}

.big-image {
    max-width: 750px;
    height: 100%;
    max-height: 750px;
    object-fit: contain;
}

@media screen and (max-width: 768px) {
    .project-container {
        padding-top: 20px;
    }

    .project-flex-container {
        flex-direction: column-reverse;

    }

    .left-part,
    .right-part {
        flex-basis: 100%;
        /* Занимаем всю ширину */
        text-align: justify;
        /* Центрируем текст */
    }

    .buttons-row {
        margin-top: 5%;
    }

    .big-image {
        max-width:100%;
        height: auto;
    }
}
@media screen and (max-width: 400){
     .button-flex {
        gap: 2px;
     }
    }
</style>