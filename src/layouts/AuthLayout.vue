<script setup>
import TheLogo from "@/components/TheLogo.vue";
</script>

<template>
  <main class="w-full h-full">
    <section class="flex flex-col justify-center items-center bg-gray-100/10 w-1/2 mx-auto mt-[10vh] rounded-lg">
      <the-logo/>
      <div class="w-full mt-4 rounded-b-lg border-t border-gray-200/10">
        <slot></slot>
      </div>
    </section>
  </main>
</template>