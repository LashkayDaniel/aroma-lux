<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import ProductList from "@/components/product/ProductList.vue";
import FilterOption from "@/components/product/FilterOption.vue";
import {ref} from "vue";

const sortBy = ref('default')
</script>

<template>
  <main-layout>
    <section class="px-6 pb-6 lg:p-10 flex flex-col lg:flex-row gap-4 lg:space-x-6 container mx-auto">
      <div class="sticky top-2 lg:basis-64 text-gray-300 w-fit">
        <filter-option v-model:sort-by="sortBy"/>
      </div>

      <product-list :filters="sortBy"/>
    </section>
  </main-layout>
</template>
