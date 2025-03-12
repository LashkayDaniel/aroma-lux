<script setup>
import {useBasketStore} from "@/stores/basket.js";
import {computed} from "vue";
import productList from "@/mocks/index.js";
import BasketList from "@/components/basket/BasketList.vue";

const emit = defineEmits(['close'])
const basketStore = useBasketStore()

const basketItems = computed(() => {
  const itemsId = basketStore.getItems
  return productList.filter(item => itemsId.includes(item.id))
})

const totalSum = computed(() => {
  const sum = basketItems.value.reduce((sum, item) => sum + item.price, 0)
  return sum.toFixed(2)
})

function closeHandler() {
  emit('close')
}
</script>

<template>
  <div @click.self="closeHandler" class="fixed top-0 left-0 w-full h-full bg-zinc-300/50 z-10">
    <aside
        class="bg-white absolute right-0 h-full p-4 min-w-1/4 z-20 border-l-2 border-gray-400 flex flex-col justify-between">
      <div class="flex justify-between items-center border-b border-gray-200 py-2">
        <h1 class="text-2xl font-bold">Basket</h1>
        <button @click="closeHandler"
                class="bg-gray-200 p-1 rounded hover:bg-gray-300 transition-colors duration-200"
                title="Close">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="size-6 stroke-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <BasketList class="flex-1" :items="basketItems"/>

      <div v-if="totalSum>0"
           class="mt-4 p-2 border-t border-gray-300 bg-linear-to-r from-white to-amber-300 rounded text-amber-700 text-end">
        <h2 class="text-xl font-semibold mr-2">Total: <span class="ml-2 font-bold">${{ totalSum }}</span></h2>
      </div>
    </aside>
  </div>
</template>