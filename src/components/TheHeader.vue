<script setup>
import TheLogo from "@/components/TheLogo.vue";
import {computed, reactive} from "vue";
import {useBasketStore} from "@/stores/basket.js";

const basketStore = useBasketStore()

const basketLength = computed(() => {
  return basketStore.getItems.length
})

const navLinks = reactive([
  {label: "Home", route: "/",},
  {label: "About", route: "/about",},
  {label: "Catalog", route: "/catalog",},
])
</script>

<template>
  <header class="w-full flex flex-col items-center py-2 px-8">
    <div class="grid grid-cols-3 grid-rows-1 w-full">
      <div class="col-start-2 place-self-center">
        <the-logo/>
      </div>
      <div class="flex justify-end items-center space-x-4">
        <router-link to="/login"
                     class=" py-1 px-4 font-semibold text-lg text-amber-300 bg-amber-300/20 rounded-full border border-amber-200/30 hover:bg-amber-300/50"
                     aria-label="Sign In">
          Sign In
        </router-link>
        <button class="group p-1 rounded-lg hover:bg-gray-400/40" title="Liked">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="size-7 group-hover:fill-gray-300/50 group-hover:stroke-gray-100 stroke-gray-400 stroke-2 transition-all duration-300">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
          </svg>
        </button>
        <button class="group p-1 rounded-lg hover:bg-gray-400/40 relative" title="basket">
          <span v-text="basketLength"
                class="px-1 rounded-full bg-amber-500 text-amber-900 font-semibold text-sm absolute -top-1 right-0"/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="size-7 group-hover:fill-gray-300/50 group-hover:stroke-gray-100 stroke-gray-400 stroke-2 transition-all duration-300">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav class="text-gray-200 flex space-x-8 text-xl mt-2 border-t border-gray-500/20 w-full justify-center p-2">
      <template v-for="(link) in navLinks">
        <router-link :to="link.route"
                     class="hover:border-b border-amber-300 transition-all duration-300 hover:text-amber-500"
                     active-class="border-b border-amber-300/40 text-amber-300 transition-all">
          {{ link.label }}
        </router-link>
      </template>
    </nav>
  </header>
</template>