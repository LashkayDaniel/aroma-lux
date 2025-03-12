<script setup>
import productList from "@/mocks/index.js";
import ProductItem from "@/components/product/ProductItem.vue";
</script>

<template>
  <ul class="flex-1 grid  grid-cols-2 md:grid-cols-3 gap-2" aria-label="Catalog of products">
    <li v-for="product in productList"
        :key="product.id"
        class="p-4 bg-gray-300/20 rounded-lg shadow-md hover:bg-gray-300/10 transition-all duration-300">
      <product-item :product="product"></product-item>
    </li>
  </ul>
</template>