<script setup>
import TechItem from "./TechItemComponent.vue";
import { defineAsyncComponent } from "vue";
const props = defineProps(["locale"]);
const tecs = [
    "Javascript",
    "Html5",
    "Css3",
    "Angular",
    "Vuejs",
    "Python",
    "Mysql",
    "Git",
    "Vscode",
];

</script>

<template>
    <main class="main main-bottom30">
        <div class="main-container">
            <div class="title">
                <h2 class="main-title largest-font-size">{{ props.locale.main_title }}</h2>
                <p class="main-subtitle big-font-size">{{ props.locale.main_subtitle }}</p>
            </div>
            <div class="img-container">
                <img src="../assets/images/profile-photo.jpg" :alt="props.locale.photo_attribute" class="profile-photo">
            </div>
        </div>
        <div class="about-me">
            <div class="about-container margin-bottom30">
                <h2 class="about-title big-font-size">{{ props.locale.about_me_title }}</h2>
                <p class="about-text regular-font-size">{{ props.locale.about_me_text }}
                </p>
            </div>
            <h2 class="about-title big-font-size">{{ props.locale.tecs }}</h2>
            <div class="tecs-container">
                <TechItem v-for="item in tecs" :key="item">
                    <component class="logo" :is="defineAsyncComponent(() => import(`./logos/${item}Component.vue`))" />
                    <p>{{ item }}</p>
                </TechItem>
            </div>
        </div>
    </main>


</template>

<style scoped>
.title {
    flex-basis: 50%;
}

.main-title {
    font-weight: 700;
    margin-bottom: 15px;
}

.main-subtitle {
    font-weight: 500;
}

.main-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 0 16px;
    max-width: 1440px;
    margin: 0 auto 0;
    margin-bottom: 50px;
}

.img-container {
    text-align: right;
    flex-basis: 50%;
}

.profile-photo {
    width: auto;
    max-width: 100%;
    border: white 4px solid;
    border-radius: 10px;
    box-shadow: 10px 10px 20px #c35917ca;
}

.about-container {
    padding: 16px;
}

.about-title {
    text-align: center;
    margin-bottom: 16px;
    text-align: center;
}

.about-me {
    max-width: 1440px;
    margin: 0 auto 0;
}

.about-text {

    text-align: justify;
    line-height: 1.5;
}

.tecs-container {
    margin: 32px auto;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
}

@media screen and (max-width: 768px) {
    .main-container {
        flex-direction: column;
        align-items: stretch;
    }

    .profile-photo {
        width: 100%;
    }

    .tecs-container {
        gap: 42px;
        grid-template-columns: repeat(3, 1fr);
    }

}
</style>