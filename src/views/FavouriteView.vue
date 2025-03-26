<script setup>
import {useFavouriteStore} from "@/stores/favourite.js";
import MainLayout from "@/layouts/MainLayout.vue";
import {computed} from "vue";
import productList from "@/mocks/index.js";

const favouriteStore = useFavouriteStore()

const favourites = computed(() => {
  const favouritesId = favouriteStore.getAll
  return productList.filter(item => favouritesId.includes(item.id))
})

function removeFromFavourite(item) {
  favouriteStore.remove(item.id)
}

</script>

<template>
  <main-layout>
    <section class="px-4 sm:px-10 my-2 sm:mt-6 w-full">
      <h1 class="text-amber-400 text-lg md:text-xl">Favourite List</h1>
      <ul class="mt-2 flex gap-2 sm:gap-4 flex-wrap items-center">
        <li v-if="favourites.length===0" class="text-gray-300/40">List is empty...</li>
        <li v-else
            class="py-2 px-3 sm:px-4 flex flex-col items-center bg-amber-400/10 border border-amber-400/20 rounded-lg"
            v-for="item in favourites"
            :key="item.id">
          <h2 class="text-base sm:text-lg font-bold text-gray-300 mb-1 sm:mb-2 sm:text-nowrap">{{ item.brand }} {{
              item.title
            }}</h2>
          <img class="size-30 md:size-40"
               :src="item.image"
               :alt="item.title">
          <button @click="removeFromFavourite(item)"
                  class="mt-2 sm:mt-4 text-amber-300 py-1 px-4 text-sm sm:text-base hover:border border-amber-300 rounded-full hover:bg-amber-400/20 hover:transition-all duration-500">
            Unlike
          </button>
        </li>
      </ul>
    </section>
  </main-layout>
</template>
