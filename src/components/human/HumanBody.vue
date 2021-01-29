<template>
    
    <img class="human-body" src="@/assets/body.svg" alt=""/>
    
</template>
<script>
export default {
    name: 'HumanBody',
    props: {
    }
}
</script>
<style lang="scss">
.human-body {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 250px;
}
</style>