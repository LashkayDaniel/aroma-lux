<script setup>
import BasketListItem from "@/components/basket/BasketListItem.vue";
import {computed} from "vue";

const props = defineProps({items: Array})

const hasItems = computed(() => {
  return props.items.length > 0;
})
</script>

<template>
  <ul class="flex flex-col space-y-2 py-4 h-full overflow-auto">
    <li v-if="!hasItems" class="text-center">List is empty</li>

    <li v-else v-for="(item,idx) in items"
        :key="idx"
        class="bg-gradient-to-r from-gray-200 to-white p-1 flex rounded">
      <BasketListItem :item="item"/>
    </li>

  </ul>
</template>