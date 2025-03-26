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
    <section class="w-full h-[80vh] sm:h-[78vh] relative">
      <img src="../assets/img/home_img.png" alt="home"
           class="h-[80%] sm:h-[90%] object-cover absolute bottom-0 md:left-1/2 md:-translate-x-1/2">

      <TransitionGroup name="fly-in" tag="div">
        <h2 v-if="show"
            key="text1"
            class="text-white tracking-wider text-base sm:text-lg md:text-xl text-center sm:text-start font-bold py-2 sm:py-4 px-3 sm:px-6 bg-zinc-600/30 rounded-xl absolute left-10 top-20 sm:left-1/3 md:left-1/2 sm:top-1/4 w-70 sm:w-100 lg:w-120"
        >
          Step into a world of premium fragrances designed to elevate your presence
        </h2>

        <h2 v-if="showSecond"
            key="text2"
            class="text-white tracking-wider text-base sm:text-lg md:text-xl text-center sm:text-start font-bold py-2 sm:py-4 px-3 sm:px-6 bg-zinc-600/30 rounded-xl absolute right-4 sm:right-10 md:right-1/5 top-1/3 sm:top-1/2 w-60 sm:w-90"
        >
          Your scent is your signature—make it unforgettable
        </h2>

        <router-link v-if="showLink"
                     key="btn"
                     class="bg-amber-400 hover:bg-amber-500 transition-all duration-400 font-semibold px-4 py-1 sm:py-2 rounded text-sm sm:text-base flex items-center w-fit absolute bottom-6 sm:bottom-24 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:right-20 sm:left-3/5"
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
