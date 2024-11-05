<script setup>
import GitHub from "./logos/GitHubComponent.vue"
</script>

<template>
    <footer>
        <a href="https://github.com/ReimuJF" class="regular-font-size flex-link" target="_blank">
            <GitHub class="small-logo" />GitHub
        </a>
    </footer>
</template>

<style scoped>


a,
a:visited {
    color: white;
    text-decoration: none;
}

.flex-link {
    position: relative;
    display: flex;
    width: 120px;
    gap: 12px;
    align-items: center;
    text-align: center;
    height: 100%;
    justify-content: center;
    margin: 50px auto 0 auto;
}

.flex-link::after {
    content: "";
    position: absolute;
    border-radius: 6px;
    z-index: -1;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: #6a11cb;
    transition: all ease .3s
}

.flex-link:hover {
    color: #fff
}
.flex-link:hover::after{
    height: 102%;
}
</style>