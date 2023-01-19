<script>
export default{
    name: 'AppLoader'
}
</script>

<template>
    <div class="loader">
        <div class="line"></div>
    </div>
</template>

<style lang="scss" scoped>
.loader{
    width: 300px;
    height: 300px;
    border: 10px solid red;
    border-radius: 50%;
    animation: rotate 1s infinite;
    margin: 5rem auto;
    .line{
        width: 100px;
        height: 100px;
        background-color: white;
    }
}

@keyframes rotate{
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
}
</style>