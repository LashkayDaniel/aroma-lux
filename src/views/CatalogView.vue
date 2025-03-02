<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import ProductList from "@/components/ProductList.vue";


</script>

<template>
  <main-layout>
    <section class="p-10 flex flex-row items-start space-x-2">
      <div class="sticky top-2 basis-64 bg-gray-300">
        filters
      </div>

      <product-list></product-list>
    </section>
  </main-layout>
</template>
