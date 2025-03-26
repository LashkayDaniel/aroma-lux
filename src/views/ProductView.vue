<script setup>

import {useRoute, useRouter} from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import productList from "@/mocks/index.js";
import {computed, onBeforeMount, reactive} from "vue";
import BtnAddToCart from "@/components/product/BtnAddToCart.vue";
import {useFavouriteStore} from "../stores/favourite.js";

const route = useRoute()
const router = useRouter()
const productId = route.params.id

let product = reactive(null)
const favouriteStore = useFavouriteStore()

const isFavourite = computed(() => favouriteStore.isFavourite(product.id))

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
            class="group bg-amber-300/40 ml-4 sm:ml-10 px-3 py-1 text-sm sm:text-base flex items-center justify-center text-center rounded-full border border-yellow-600 hover:bg-amber-300/70">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="size-4 md:size-5 stroke-yellow-600/80 group-hover:stroke-amber-400 -translate-y-[.1em] mr-2">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"/>
      </svg>
      <span class="font-semibold text-amber-500 group-hover:text-amber-200">Back</span>
    </button>


    <p v-if="product == null" class="text-white text-2xl text-center">Oops... Can`t find the product</p>

    <section v-else
             class="bg-gray-300/20 p-6 my-2 md:p-8 max-w-[90%] md:max-w-[70%] rounded-xl mx-auto relative grid grid-cols-1 sm:grid-cols-2 sm:gap-2">
      <button @click="favouriteStore.toggle(product.id)"
              class="absolute group right-6 top-6"
              :title="isFavourite ? 'unlike' : 'like'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor"
             :class="{'fill-red-400 stroke-red-400/40': isFavourite}"
             class="size-7 group-hover:fill-red-400 group-hover:stroke-red-400/40 stroke-gray-400 stroke-2 transition-all duration-300">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
        </svg>
      </button>


      <ul class="absolute top-6 left-4 flex flex-col gap-1">
        <li v-for="tag in product?.tags"
            class="bg-amber-300/90 w-fit px-2 text-xs sm:text-sm rounded-full">
          {{ tag }}
        </li>
      </ul>

      <img :src="product?.image" alt="product" class="object-cover bg-red-400 w-full h-full">

      <div class="ml-0 sm:ml-4 md:ml-6 flex flex-col mt-2 sm:mt-0">
        <div class="flex-grow">
          <div class="mb-2">
            <span class="text-gray-200 bg-gray-300/20 text-xs sm:text-sm px-2 py-1 rounded-full">#{{
                product?.category
              }}</span>
            <span class="text-gray-200 bg-gray-300/20 text-xs sm:text-sm px-2 py-1 rounded-full ml-2">#{{
                product?.gender
              }}</span>
          </div>
          <h1 class="text-white text-lg sm:text-2xl lg:text-3xl font-bold mt-2 sm:mt-6">{{ product?.brand }} "{{
              product?.title
            }}"</h1>
          <p class="text-gray-300 text-sm sm:text-base my-2 sm:my-4">{{ product?.description }}</p>

          <p class="text-gray-100 text-base sm:text-lg underline mt-2">Notes:</p>
          <ul class="text-gray-300/80">
            <li v-for="(note,level) in product?.notes"
                class="ml-4 text-sm sm:text-base">
              <span class="font-bold">{{ level }}:</span> {{ note.join(", ") }}
            </li>
          </ul>

          <p class="text-gray-100 text-base sm:text-lg mt-2">
            Volume:
            <span class="font-semibold">
              {{ product?.volume }}
            </span>ml
          </p>
        </div>

        <h2 class="text-lg md:text-xl text-amber-400 mt-3 sm:mt-6">${{ product?.price }}</h2>
        <btn-add-to-cart :product="product" class="mt-4"/>
      </div>
    </section>
  </main-layout>
</template>