<script setup>
import productList from "@/mocks/index.js";
import ProductItem from "@/components/product/ProductItem.vue";
import {computed} from "vue";

const props = defineProps({
  filters: String
})

const filteredList = computed(() => {
  let products = [...productList]

  const filtersFunc = {
    price_asc: () => products.sort((a, b) => a.price - b.price),
    price_desc: () => products.sort((a, b) => b.price - a.price),
    title_asc: () => products.sort((a, b) => (`${a.brand} ${a.title}`).localeCompare(`${b.brand} ${b.title}`)),
    title_desc: () => products.sort((a, b) => (`${b.brand} ${b.title}`).localeCompare(`${a.brand} ${a.title}`)),
  }

  const result = filtersFunc[props.filters]
  if (props.filters && result) {
    return result()
  }

  return products
})

</script>

<template>
  <ul class="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2" aria-label="Catalog of products">
    <li v-for="product in filteredList"
        :key="product.id"
        class="p-4 bg-gray-300/20 rounded-lg shadow-md hover:bg-gray-300/10 transition-all duration-300">
      <product-item :product="product"></product-item>
    </li>
  </ul>
</template>