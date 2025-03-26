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
  <section class="max-w-[1500px] mx-auto">
    <the-header @toggle-basket="showBasket(true)"/>
    <basket-sidebar v-if="showBasketSidebar" @close="showBasket(false)"/>

    <main>
      <slot/>
    </main>

    <footer v-if="$slots.footer" class="bg-zinc-900/50 py-8">
      <slot name="footer"/>
    </footer>
  </section>
</template>
