<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import ProductList from "@/components/product/ProductList.vue";
import FilterOption from "@/components/product/FilterOption.vue";
import {ref} from "vue";

const sortBy = ref('default')
</script>

<template>
  <main-layout>
    <section class="p-10 flex flex-row space-x-6">
      <div class="sticky top-2 basis-64 text-gray-300">
        <filter-option v-model:sort-by="sortBy"/>
      </div>

      <product-list :filters="sortBy"/>
    </section>
  </main-layout>
</template>
