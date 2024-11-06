<script setup>

</script>
<template>
    <div class="project">
        <div class="screenshot-container">
            <slot name="image-slot"></slot>
        </div>
        <slot></slot>
        <div class="tec-containter">
            <slot name="tecs-content"></slot>
        </div>
        <slot name="button-slot"></slot>
    </div>
</template>

<style scoped>
.project {
    display: flex;
    flex-direction: column;
    color: black;
    background: rgba(255, 255, 255, 0.79);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.6px);
    -webkit-backdrop-filter: blur(11.6px);
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
}

.tec-containter {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 15px;
    gap: 5px;
}

.screenshot-container {
    height: 450px;
    width: 550px;
}

.project button:hover {
    background: rgba(72, 163, 75, 0.653);
}
</style>