<template>
    <div class="tec-item">
        <slot></slot>
    </div>
    
</template>

<style scoped>
.tec-item{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: clamp(1.125rem, 2vw, 2rem);
    height: 64px;
    width: 64px;

}

</style>