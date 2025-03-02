<script setup lang="ts">

import BtnAddToCart from "@/components/BtnAddToCart.vue";

interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
  category: string,
  volume: number,
  brand: string,
  gender: string,
  notes: object,
  tags: object
}

const props = defineProps<{ product: Product }>()
</script>

<template>
  <router-link :to="{name: 'product', params: {id: product.id}}" class="group relative">
    <div class="mx-auto h-64 w-fit overflow-hidden rounded-lg">
      <img :src="product.image" alt="product"
           loading="lazy"
           class="h-full object-contain  group-hover:scale-104 transition-all duration-200"/>
    </div>
    <h2 class="text-white text-xl font-bold mt-2">{{ product.brand }} "{{ product.title }}"</h2>
    <p class="text-gray-300 text-sm my-1 line-clamp-2">{{ product.description }}</p>
    <span class="text-gray-100 bg-gray-300/20 text-sm px-2 py-1 rounded-full">#{{ product.category }}</span>
    <span class="text-gray-100 bg-gray-300/20 text-sm px-2 py-1 rounded-full ml-2">#{{ product.gender }}</span>
    <ul class="absolute top-0 left-0 flex flex-col gap-1">
      <li v-for="tag in product.tags"
          class="bg-amber-300/90 w-fit px-2 text-sm rounded-full">
        {{ tag }}
      </li>
    </ul>
    <p class="text-yellow-500 text-lg mt-2">${{ product.price }}</p>
  </router-link>
  <btn-add-to-cart :product="product"/>
</template>