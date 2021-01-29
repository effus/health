<template>
    <div class="digestive">
        <stomach v-bind:status="stomach.status"></stomach>
        <liver></liver>
        <pancreas></pancreas>
        <intestines></intestines>
    </div>
</template>

<script>
import Intestines from './digestive/Intestines.vue'
import Liver from './digestive/Liver.vue'
import Pancreas from './digestive/Pancreas.vue'
import Stomach from './digestive/Stomach.vue'
export default {
    components: { Stomach, Liver, Pancreas, Intestines },
    data() {
        return {
            stomach: {
                status: 'sleep'
            }
        }
    }
}
</script>