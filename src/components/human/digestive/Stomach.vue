<template>
    <figure class="stomach">
        <img v-if="status==='work'" src="@/assets/stomach.svg" />
        <img v-else src="@/assets/stomach_grey.svg" />
    </figure>

</template>

<script>
export default {
    name: 'stomach',
    props: {
        status: {
            type: String,
            default: 'sleep'
        }
    }
}
</script>

<style lang="scss">
.stomach {
    position: absolute;
    left: 106px;
    top: 60px;
    z-index: 2;
    width: 54px;
    height: 150px;
    padding: 0;
    margin: 0;
    img {
        width: 100%;
        height: 100%;
        left: 0;
    }
}
</style>