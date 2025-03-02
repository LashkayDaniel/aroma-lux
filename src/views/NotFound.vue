<script setup>
import TheLogo from "@/components/TheLogo.vue";
</script>

<template>
  <section class="w-full h-full text-white flex flex-col items-center justify-center mt-10">
    <TheLogo class="mb-4"/>
    <h1 class="text-4xl font-bold ">404</h1>
    <h2 class="text-2xl">Page not found</h2>
    <router-link to="/"
                 class="px-6 py-2 bg-amber-400 rounded-lg text-xl text-amber-900 font-bold hover:bg-amber-500 transition-all duration-200 mt-6">
      Home
    </router-link>
  </section>
</template>