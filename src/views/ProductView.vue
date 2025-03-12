<script setup>

import {useRoute, useRouter} from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import productList from "@/mocks/index.js";
import {onBeforeMount, reactive} from "vue";
import BtnAddToCart from "@/components/product/BtnAddToCart.vue";

const route = useRoute()
const router = useRouter()
const productId = route.params.id

let product = reactive(null)


function getProduct() {
  const foundProduct = productList.find(product => product.id === Number.parseInt(productId.toString()))
  if (foundProduct) {
    product = foundProduct
  }
}

onBeforeMount(() => {
  getProduct()
})

</script>

<template>
  <main-layout>
    <button @click="router.back()"
            class="group bg-amber-300/40 ml-10 px-3 py-1 flex items-center justify-center text-center rounded-full border border-yellow-600 hover:bg-amber-300/70">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="size-5 stroke-yellow-600/80 group-hover:stroke-amber-400 -translate-y-[.1em] mr-2">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"/>
      </svg>
      <span class="font-semibold text-amber-500 group-hover:text-amber-200">Back</span>
    </button>


    <h1 v-if="product == null" class="text-white text-2xl text-center">Oops... Can`t find the product</h1>

    <section v-else class="bg-gray-300/20 p-8 max-w-[70%] rounded-xl mx-auto relative grid grid-cols-2 gap-2">
      <ul class="absolute top-6 left-4 flex flex-col gap-1">
        <li v-for="tag in product?.tags"
            class="bg-amber-300/90 w-fit px-2 text-sm rounded-full">
          {{ tag }}
        </li>
      </ul>

      <img :src="product?.image" alt="product">

      <div class="ml-6 flex flex-col">
        <div class="flex-grow">
          <div class="mb-2">
            <span class="text-gray-200 bg-gray-300/20 text-sm px-2 py-1 rounded-full">#{{ product?.category }}</span>
            <span class="text-gray-200 bg-gray-300/20 text-sm px-2 py-1 rounded-full ml-2">#{{ product?.gender }}</span>
          </div>
          <h1 class="text-white text-3xl font-bold mt-6">{{ product?.brand }} "{{ product?.title }}"</h1>
          <p class="text-gray-300 my-4">{{ product?.description }}</p>

          <p class="text-gray-100 text-lg underline mt-2">Notes:</p>
          <ul class="text-gray-300/80">
            <li v-for="(note,level) in product?.notes"
                class="ml-4">
              <span class="font-bold">{{ level }}:</span> {{ note.join(", ") }}
            </li>
          </ul>

          <p class="text-gray-100 text-lg mt-2">
            Volume:
            <span class="font-semibold">
              {{ product?.volume }}
            </span>ml
          </p>
        </div>

        <h2 class="text-2xl text-amber-400 mt-6">${{ product?.price }}</h2>
        <btn-add-to-cart :product="product" class="mt-4"/>
      </div>
    </section>
  </main-layout>
</template>