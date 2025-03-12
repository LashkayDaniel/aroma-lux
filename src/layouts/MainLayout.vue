<script setup>
import TheHeader from "@/components/TheHeader.vue";
import BasketSidebar from "@/components/basket/BasketSidebar.vue";
import {ref} from "vue";

const showBasketSidebar = ref(false)

function showBasket(state) {
  showBasketSidebar.value = state
}

</script>

<template>
  <the-header @toggle-basket="showBasket(true)"/>
  <basket-sidebar v-if="showBasketSidebar" @close="showBasket(false)"/>

  <main>
    <slot/>
  </main>
</template>
