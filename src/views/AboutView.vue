<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import {reactive} from "vue";

const reviews = reactive([
  {name: 'John D.', comment: 'Aroma Lux fragrances are simply unmatched. I get compliments every time I wear CEO Man!'},
  {name: 'Sarah M.', comment: 'The elegance and longevity of these perfumes are incredible. My new favorite brand!'},
  {
    name: 'Michael R.',
    comment: 'Aroma Lux has transformed my daily routine. I feel more confident with their fragrances!'
  },
  {name: 'Emily T.', comment: 'I love how Aroma Lux captures sophistication in every scent. Truly luxurious!'},
])
</script>


<template>
  <main-layout>
    <div class="container mx-auto text-gray-200">
      <section class="text-center py-12">
        <h1 class="text-4xl font-bold">About Aroma Lux</h1>
        <p class="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Founded in 2015, Aroma Lux is dedicated to crafting timeless fragrances that embody elegance and
          sophistication. Our mission is to create scents that inspire confidence and leave a lasting impression. Each
          perfume is meticulously designed with the finest ingredients, blending tradition with modern innovation to
          elevate your presence.
        </p>
      </section>

      <section class="py-12">
        <h2 class="text-3xl font-bold text-center">Our Story</h2>
        <p class="text-gray-300 mt-4 max-w-2xl mx-auto">
          Aroma Lux was born from a passion for creating fragrances that tell a story. Our founder, Elena Moretti,
          started experimenting with scents in her small studio in Florence, inspired by the rich heritage of Italian
          perfumery. Over the years, Aroma Lux has grown into a globally recognized brand, celebrated for its dedication
          to quality, elegance, and innovation. Today, we continue to craft scents that capture the essence of luxury
          and individuality.
        </p>
        <div class="flex justify-center mt-8">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
               alt="Perfume Creation Process" class="rounded-lg shadow-lg max-w-md">
        </div>
      </section>

      <section class="py-12">
        <h2 class="text-3xl font-bold text-center">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div class="text-center">
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                   stroke="currentColor" class="size-12 stroke-amber-400">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mt-4">Quality</h3>
            <p class="text-gray-300 mt-2">
              We use only the finest ingredients to ensure every fragrance is a masterpiece.
            </p>
          </div>
          <div class="text-center">
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="size-12 stroke-amber-400">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mt-4">Elegance</h3>
            <p class="text-gray-300 mt-2">
              Our scents are designed to embody sophistication and timeless beauty.
            </p>
          </div>
          <div class="text-center">
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="size-12 stroke-amber-400">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mt-4">Sustainability</h3>
            <p class="text-gray-300 mt-2">
              We are committed to eco-friendly practices in our production process.
            </p>
          </div>
        </div>
      </section>


      <section class="py-12">
        <h2 class="text-3xl font-bold text-center">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div v-for="review in reviews" class="bg-zinc-500/20 p-6 rounded-lg">
            <p class="text-gray-300">"{{ review.comment }}"</p>
            <p class="text-yellow-500 mt-2">- {{ review.name }}</p>
          </div>
        </div>
      </section>

      <section class="py-10">
        <router-link
            class="bg-amber-500 text-gray-900 hover:bg-amber-600 mx-auto transition-all duration-400 font-semibold px-4 py-2 rounded flex items-center w-fit"
            to="/catalog">
          <span>Discover Our Collection</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 ml-2 stroke-amber-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
          </svg>
        </router-link>
      </section>
    </div>

    <template #footer>
      <p class="text-center test-sm  text-gray-300/50">© {{ new Date().getFullYear() }} <b>Aroma Lux</b>. All rights
        reserved.</p>
    </template>
  </main-layout>
</template>

