<script setup>
import {computed} from "vue";
import {useBasketStore} from "@/stores/basket.js";

const props = defineProps({item: Object})
const basketStore = useBasketStore()

const fullTitleName = computed(() => {
  return `${props.item?.brand} ${props.item?.title}`;
})

const deleteItem = () => {
  if (confirm("Are you sure you want to delete")) {
    basketStore.removeProduct(props.item.id)
  }
}
</script>

<template>
  <button @click="deleteItem"
          class="group self-center mr-2 hover:bg-red-200 p-1 rounded" title="Delete">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="size-5 sm:size-6 stroke-gray-400 group-hover:stroke-red-400">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
    </svg>
  </button>

  <img :src="item?.image" alt="product" class="size-20 rounded object-cover h-full">
  <div class="flex-1 ml-2 flex justify-between">
    <div class="">
      <h2 class="text-semibold text-sm sm:text-base md:text-lg">{{ fullTitleName }}</h2>
      <p class="text-gray-400 text-sm">{{ item?.category }}</p>
    </div>
    <b class="ml-6 sm:ml-10 px-1 text-gray-700 text-base sm:text-lg">${{ item?.price }}</b>
  </div>
</template>