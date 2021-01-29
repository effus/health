<template>
    <div class="digestive">
        <stomach v-if="isVisibleStomach"></stomach>
        <liver v-if="isVisibleLiver"></liver>
        <pancreas v-if="isVisiblePancreas"></pancreas>
        <intestines v-if="isVisibleIntestines"></intestines>
    </div>
</template>

<script>
import Intestines from './Intestines.vue'
import Liver from './Liver.vue'
import Pancreas from './Pancreas.vue'
import Stomach from './Stomach.vue'
export default {
    components: { Stomach, Liver, Pancreas, Intestines },
    props: {
        isVisibleStomach: {
            type: Boolean,
            default: true
        },
        isVisibleLiver: {
            type: Boolean,
            default: true
        },
        isVisiblePancreas: {
            type: Boolean,
            default: true
        },
        isVisibleIntestines: {
            type: Boolean,
            default: true
        },
    }
}
</script>