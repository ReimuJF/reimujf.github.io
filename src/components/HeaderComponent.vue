<script setup>
import { ref } from "vue"
const props = defineProps(["locale"]);
const emit = defineEmits(["lang"]);
const language = ref("ru");
const emitLanguage = (event) => {
    language.value = event.target.getAttribute("data");
    emit("lang", language.value);
}

</script>

<template>
    <header>
        <div class="header-container">
            <div class="links-container smaller-font-size">
                <router-link to="/" class="link">{{ props.locale.main }}</router-link>
                <router-link :to="{path: '/', hash: '#projects'}" class="link">{{ props.locale.projects }}</router-link>
                <router-link to="/contacts" class="link" :locale="props.locale">{{ props.locale.contacts }}</router-link>
            </div>
            <span class="lang-label regular-font-size">{{ props.locale.language }}</span>
            <div class="dropdown">
                <button class="dropbtn">{{ language }}</button>
                <div class="dropdown-content">
                    <span class="lang" data="ru" @click="emitLanguage">Русский</span>
                    <span class="lang" data="en" @click="emitLanguage">English</span>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>

.links-container {
    display: inline-flex;
    gap: 16px;
    text-align: left;
    flex-basis: 73%;
}
.link {
    color: white;
    
    text-decoration: none;
}

.header-container {
    position: relative;
    display: flex;
    background-color: #1a1a2e;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
    gap: 15px;

}
.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
}

.dropdown-content {
    display: none;
    position: absolute;
    text-align: end;
    background-color: #f9f9f9;
    min-width: 160px;
    right: 0;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    cursor: pointer;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.lang {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.lang:hover {
    background-color: #f1f1f1;
}
@media screen and (max-width: 768px) {
    .lang-label{
        display: none;
    }
    .links-container {
        gap: 8px
    }
    .header-container {
        gap: 5px;
        padding-right: 0;
    }
}
</style>