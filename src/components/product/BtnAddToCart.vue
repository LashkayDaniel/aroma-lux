<script setup>
import {computed} from "vue";
import {useBasketStore} from "@/stores/basket.js";
import {useAuthStore} from "@/stores/auth.js";

const props = defineProps({
  product: Object
})

const basketStore = useBasketStore()
const {isAuthenticated} = useAuthStore()

const isInBasket = computed(() => {
  if (!isAuthenticated) return false
  return basketStore.isExists(props.product.id)
})

const btnClassStyle = computed(() => {
  if (isInBasket.value) {
    return 'bg-green-400 hover:bg-green-600 border-green-700'
  }
  return 'bg-yellow-500 hover:bg-yellow-600 border-orange-400'
})


function addToCart() {
  basketStore.addProduct(props.product)
}
</script>

<template>
  <button @click="addToCart"
          type="button"
          class="mt-2 text-black text-sm sm:text-base sm:w-fit font-bold px-4 py-1 rounded border-b-3"
          :class="btnClassStyle">
    {{ isInBasket ? 'In Basket' : 'Add to Cart' }}
  </button>
</template>