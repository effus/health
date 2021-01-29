<template>
    
    <img class="skeleton" src="@/assets/skeleton.svg" alt=""/>
    
</template>
<script>
export default {
    name: 'skeleton',
    props: {
    }
}
</script>
<style lang="scss">
.skeleton {
    position: absolute;
    left: 3px;
    top: 5px;
    z-index: 1;
    width: 243px;
}
</style>