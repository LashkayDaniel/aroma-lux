<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import {useAuthStore} from "@/stores/auth.js";
import {useRouter} from "vue-router";

const authStore = useAuthStore()
const router = useRouter()

function logout() {
  authStore.logout()
  router.push('/')
}
</script>


<template>
  <main-layout>

    <section class="w-[90%] md:w-1/2 mx-auto bg-gray-500/30 p-4 rounded">
      <h1 class="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4">Profile</h1>
      <p class="text-amber-400/80 text-sm sm:text-base">Hi,
        {{ authStore?.user?.displayName ?? authStore?.user?.email }}
      </p>
      <button @click="logout" class="mt-4 bg-amber-500 text-sm sm:text-base px-4 py-1 rounded-lg">Logout</button>
    </section>

  </main-layout>
</template>