<script setup>
const props = defineProps(["Locale"]);
import Download from '@/components/logos/DownloadComponent.vue';
import Telegram from '@/components/logos/TelegramComponent.vue';
</script>
<template>
    <div class="empty-container">
        <div class="project-container max-width">
            <button class="button regular-font-size" @click="$router.go(-1)" style="margin: 5px 0 40px 0;">
                {{ props.Locale.back }}</button>
            <div class="options-container">
                <h2 class="big-font-size">{{ props.Locale.resume_title }}</h2>
                <a href="/resume.pdf"><button class="button big-font-size" download="newfilename">
                        <div class="button-flex">
                            <Download /> {{ props.Locale.resume_button }}
                        </div>
                    </button></a>
                <h2 class="big-font-size">{{ props.Locale.tele_title }}</h2>
                <a href="https://t.me/lisichkoslav"><button class="button big-font-size" download="newfilename">
                        <div class="button-flex">
                            <Telegram /> <span>{{ props.Locale.tele_button }}</span>
                        </div>
                    </button></a>
            </div>
        </div>

    </div>

</template>

<style scoped>
.empty-container {
    height: 80vh;
}
.project-container {
    height: auto;
    padding: 30px;
    width: 80%;
    margin: 40px auto 40px auto;
    background: rgba(107, 109, 164, 0.36);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(11px);
    border: 1px solid rgba(107, 109, 164, 0.41);
}
a {
    display: inline-block;
    max-width: 400px;
    white-space: nowrap;
    text-decoration: none;
}
.options-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.button-flex {
    display: flex;
    gap: 15px;
    text-align: center;
    justify-content: center;
}
@media screen and (max-height: 662px) {
    .empty-container {
    height: auto;
}
}
</style>