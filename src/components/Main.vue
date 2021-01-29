<template>
  <div>
    <h1>Human component demo</h1>
    <human
      v-bind:is-visible-digestive="humanSystemVisible.digestive"
      v-bind:is-visible-skeleton="humanSystemVisible.skeleton"
      v-bind:is-visible-muscules="humanSystemVisible.muscules"
      v-bind:is-visible-hair-and-nails="humanSystemVisible.hairs"
      v-bind:is-visible-nervous="humanSystemVisible.nervous"
      v-bind:is-visible-blood="humanSystemVisible.blood"
      v-bind:is-visible-lymphatic="humanSystemVisible.lymphatic"
      v-bind:is-visible-respiratory="humanSystemVisible.respiratory"
      v-bind:is-visible-endocrine="humanSystemVisible.endocrine"
      v-bind:is-visible-urine="humanSystemVisible.urine"
    ></human>
    <div class="controls">
      <button class="btn" v-bind:class="{active: humanSystemVisible.digestive}" v-on:click="humanSystemVisible.digestive = !humanSystemVisible.digestive">Digestive</button>
      <button class="btn" v-bind:class="{active: humanSystemVisible.skeleton}" v-on:click="humanSystemVisible.skeleton = !humanSystemVisible.skeleton">Skeleton</button>
      <button class="btn" v-bind:class="{active: humanSystemVisible.muscules}" v-on:click="humanSystemVisible.muscules = !humanSystemVisible.muscules">Muscules</button>
      <button class="btn" v-bind:class="{active: humanSystemVisible.hairs}" v-on:click="humanSystemVisible.hairs = !humanSystemVisible.hairs">Hairs and nails</button>
      <button class="btn" v-bind:class="{active: humanSystemVisible.nervous}" v-on:click="humanSystemVisible.nervous = !humanSystemVisible.nervous">Nervous</button>
      <button class="btn" v-bind:class="{active: humanSystemVisible.blood}" v-on:click="humanSystemVisible.blood = !humanSystemVisible.blood">Blood</button>
      <button class="btn" v-bind:class="{active: humanSystemVisible.lymphatic}" v-on:click="humanSystemVisible.lymphatic = !humanSystemVisible.lymphatic">Lymphatic</button>
      <button class="btn" v-bind:class="{active: humanSystemVisible.respiratory}" v-on:click="humanSystemVisible.respiratory = !humanSystemVisible.respiratory">Respiratory</button>
      <button class="btn" v-bind:class="{active: humanSystemVisible.endocrine}" v-on:click="humanSystemVisible.endocrine = !humanSystemVisible.endocrine">Endocrine</button>
      <button class="btn" v-bind:class="{active: humanSystemVisible.urine}" v-on:click="humanSystemVisible.urine = !humanSystemVisible.urine">Urine</button>
      <div>&nbsp;</div>
      <button class="btn event" v-on:click="triggerEvent('eat', {item: 'burger'})">Eat burger</button>
    </div>
  </div>
</template>

<script>
import Human from './Human.vue'
export default {
  components: { Human },
  name: 'Main',
  props: {
    msg: String
  },
  data: () => {
    return {
      humanSystemVisible: {
        digestive: false,
        skeleton: false,
        muscules: false,
        hairs: false,
        nervous: false,
        blood: false,
        lymphatic: false,
        respiratory: false,
        endocrine: false,
        urine: false
      }
    }
  },
  methods: {
    triggerEvent(event, params) {
      
    }
  }
}
</script>

<style lang="scss">
.controls {
  position: absolute;
  right: 0;
  width: 200px;
  background-color: #ececec;
  height: 80%;
  top: 10%;
  display: grid;
  grid-template-rows: repeat(16, 30px);
  .btn {
    margin: 1px;
    &.active {
      background: #fff;
      border: 1px solid #ccc;
    }
    &:focus {
      outline: none;
    }
    &.event {
      background: rgba(255, 255, 0, 0.562);
      border: 1px solid #ccc;
    }
  }
}
</style>
