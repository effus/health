<template>
    <div class="human-body-area">
        <human-body></human-body>
        <digestive v-if="isVisibleDigestive"></digestive>
        <skeleton v-if="isVisibleSkeleton"></skeleton>
        <muscules v-if="isVisibleMuscules"></muscules>
        <nervous v-if="isVisibleNervous"></nervous>
        <blood v-if="isVisibleBlood"></blood>
        <lymphatic v-if="isVisibleLymphatic"></lymphatic>
        <respiratory v-if="isVisibleRespiratory"></respiratory>
        <endocrine v-if="isVisibleEndocrine"></endocrine>
        <urine v-if="isVisibleUrine"></urine>
        <hairs-and-nails v-if="isVisibleHairAndNails"></hairs-and-nails>
    </div>
</template>

<script>
import Blood from './human/Blood.vue'
import Digestive from './human/Digestive.vue'
import Endocrine from './human/Endocrine.vue'
import HairsAndNails from './human/HairsAndNails.vue'
import HumanBody from './human/HumanBody.vue'
import Lymphatic from './human/Lymphatic.vue'
import Muscules from './human/Muscules.vue'
import Nervous from './human/Nervous.vue'
import Respiratory from './human/Respiratory.vue'
import Skeleton from './human/Skeleton.vue'
import Urine from './human/Urine.vue'
export default {
    components: { HumanBody, HairsAndNails, Skeleton, Digestive, Muscules, Nervous, Blood, Lymphatic, Respiratory, Endocrine, Urine },
    name: 'Human',
    props: {
        isVisibleMuscules: {
            type: Boolean,
            default: false
        },
        isVisibleHairAndNails: {
            type: Boolean,
            default: false
        },
        isVisibleSkeleton: {
            type: Boolean,
            default: false
        },
        isVisibleDigestive: {
            type: Boolean,
            default: false
        },
        isVisibleNervous: {
            type: Boolean,
            default: false
        },
        isVisibleBlood: {
            type: Boolean,
            default: false
        },
        isVisibleLymphatic: {
            type: Boolean,
            default: false
        },
        isVisibleRespiratory: {
            type: Boolean,
            default: false
        },
        isVisibleEndocrine: {
            type: Boolean,
            default: false
        },
        isVisibleUrine: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.human-body-area {
    position: relative;
    width: 250px;
    margin: auto;
    height: 575px;
    z-index: 0;
}
</style>