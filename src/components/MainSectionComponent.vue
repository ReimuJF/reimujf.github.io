<script setup>
const props = defineProps(["locale"]);

</script>

<template>
    <main class="main">
        <div class="main-container">
            <div class="title">
                <h2 class="main-title">{{ props.locale.main_title }}</h2>
                <p class="main-subtitle">{{ props.locale.main_subtitle }}</p>
            </div>
            <div class="img-container">
                <img src="../assets/images/profile-photo.jpg" :alt="props.locale.photo_attribute" class="profile-photo">
            </div>
        </div>
        <div class="about-me">
            <div class="about-container">
                <h2 class="about-title">{{ props.locale.about_me_title }}</h2>
                <p class="about-text">{{ props.locale.about_me_text }}
                </p>
            </div>
        </div>
    </main>


</template>

<style scoped>
.main {
    margin-bottom: 30px;
}

.title {
    flex-basis: 50%;
}

.main-title {
    font-size: clamp(2rem, 4vw, 4.5rem);
    font-weight: 700;
    margin-bottom: 15px;
}

.main-subtitle {
    font-size: clamp(1.5rem, 4vw, 3rem);
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
    font-size: clamp(1.5rem, 4vw, 3rem);
    margin-bottom: 16px;
    text-align: center;
}

.about-me {
    max-width: 1440px;
    margin: 0 auto 0;
}

.about-text {
    font-size: clamp(1.125rem, 2vw, 1.25rem);
    text-align: justify;
    line-height: 1.5;
}

@media screen and (max-width: 768px) {
    .main-container {
        flex-direction: column;
        align-items: stretch;

    }

    .profile-photo {
        width: 100%;
    }
}
</style>