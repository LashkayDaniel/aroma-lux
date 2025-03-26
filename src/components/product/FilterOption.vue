<script setup>
const sortOrder = defineModel("sortBy", {default: "default"})
</script>

<template>
  <label class="block mb-1" for="filter-list">Sort by:</label>
  <select v-model="sortOrder"
          id="filter-list"
          class="w-full p-2 border border-gray-400 rounded text-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400">
    <option value="default" class="bg-zinc-500 text-white" disabled>Choose option</option>
    <option value="price_asc" class="bg-zinc-500 text-white">Low to High (price)</option>
    <option value="price_desc" class="bg-zinc-500 text-white">High to Low (price)</option>
    <option value="title_asc" class="bg-zinc-500 text-white">A - Z (title)</option>
    <option value="title_desc" class="bg-zinc-500 text-white">Z - A (title)</option>
  </select>
</template>