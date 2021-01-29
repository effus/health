<template>
    <img class="blood" src="@/assets/blood.svg" />
</template>

<script>
export default {
    name: 'blood'
}
</script>


<style lang="scss">
.blood {
    position: absolute;
    left: 1px;
    top: 2px;
    z-index: 10;
    width: 250px;
}
</style>