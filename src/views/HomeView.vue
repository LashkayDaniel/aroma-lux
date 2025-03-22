<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import {onMounted, ref} from "vue";

const show = ref(false);
const showSecond = ref(false);
const showLink = ref(false);

onMounted(() => {
  show.value = true;
  setTimeout(() => {
    showSecond.value = true;
  }, 300);

  setTimeout(() => {
    showLink.value = true;
  }, 500);
});
</script>

<template>
  <main-layout>
    <section class="w-full h-[78vh] relative">
      <img src="../assets/img/home_img.png" alt="home"
           class="h-[90%] absolute bottom-0 left-1/2 -translate-x-1/2">

      <TransitionGroup name="fly-in" tag="div">
        <h2 v-if="show"
            key="text1"
            class="text-white tracking-wider text-xl font-bold py-4 px-6 bg-zinc-600/30 rounded-xl absolute left-1/2 top-1/4 w-120"
        >
          Step into a world of premium fragrances designed to elevate your presence
        </h2>

        <h2 v-if="showSecond"
            key="text2"
            class="text-white tracking-wider text-xl font-bold py-4 px-6 bg-zinc-600/30 rounded-xl absolute right-1/5 top-1/2 w-90"
        >
          Your scent is your signature—make it unforgettable
        </h2>

        <router-link v-if="showLink"
                     key="btn"
                     class="bg-amber-400 hover:bg-amber-500 transition-all duration-400 font-semibold px-4 py-2 rounded flex items-center w-fit absolute bottom-24 left-3/5"
                     to="/catalog">
          <span>Go to catalog</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 ml-2 stroke-amber-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
          </svg>
        </router-link>
      </TransitionGroup>
    </section>
  </main-layout>
</template>

<style scoped>
.fly-in-enter-from,
.fly-in-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.fly-in-enter-to,
.fly-in-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fly-in-enter-active,
.fly-in-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
</style>
