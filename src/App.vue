<script setup>
import {RouterView, useRoute} from 'vue-router'
import {computed} from "vue";

const route = useRoute()

const getAnimationName = computed(() => {
  return route.meta.animation ?? 'fade'
})

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition :name="getAnimationName" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style scoped>
.slide-zoom-enter-active,
.slide-zoom-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-zoom-enter-from {
  opacity: 0;
  transform: scale(0.8) rotate(-10deg) translateX(-30px);
  filter: blur(10px);
}

.slide-zoom-enter-to {
  opacity: 1;
  transform: scale(1) rotate(0) translateX(0);
  filter: blur(0);
}

.slide-zoom-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0) translateX(0);
  filter: blur(0);
}

.slide-zoom-leave-to {
  opacity: 0;
  transform: scale(0.8) rotate(10deg) translateX(30px);
  filter: blur(10px);
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
