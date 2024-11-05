<template>
    <div class="project">
        <slot></slot>
        <div class="tec-containter">
            <slot name="tecs-content"></slot>
        </div>
        <button class="regular-font-size">
            <slot name="button-label"></slot>
        </button>
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
    border: 1px solid rgba(255, 255, 255, 0.52);
    padding: 20px 0;
    /* height: 200px; */
    align-items: center;
    justify-content: space-around;
}

.project .tec-containter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: start;
    margin-bottom: 15px;
    gap: 5px;
}

.project button {
    background: rgba(76, 175, 80, 0.95);
    color: #f9f9f9;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.7px);
    -webkit-backdrop-filter: blur(9.7px);
    border: 3px solid rgba(76, 175, 80, 0.38);
    padding: 10px;
}
.project button:hover {
    background: rgba(72, 163, 75, 0.653);
}
</style>