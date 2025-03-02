<script setup>
import {computed} from "vue";
import {useBasketStore} from "@/stores/basket.js";

const props = defineProps({
  product: Object
})

const basketStore = useBasketStore()

const isInBasket = computed(() => {
  return basketStore.isExists(props.product.id)
})

const btnClassStyle = computed(() => {
  if (isInBasket.value) {
    return 'bg-green-400 hover:bg-green-600'
  }
  return 'bg-yellow-500 hover:bg-yellow-600'
})


function addToCart() {
  const successfully = basketStore.addProduct(props.product)
  if (successfully) alert('Product added to the basket!')
}
</script>

<template>
  <button @click="addToCart"
          type="button"
          class="mt-2 text-black font-bold px-4 py-1 rounded"
          :class="btnClassStyle">
    {{ isInBasket ? 'In Basket' : 'Add to Cart' }}
  </button>
</template>