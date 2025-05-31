<script lang="ts" setup>
import { ref, computed } from 'vue'
import JokeCard from './JokeCard.vue'

const props = defineProps(['jokes'])
const searchText = ref('')

const filteredJokes = computed(() => {
  if (!searchText.value.trim()) return props.jokes

  return props.jokes.filter((j) => {
    const term = searchText.value.toLowerCase()
    return j.setup?.toLowerCase().includes(term) || j.punchline?.toLowerCase().includes(term)
  })
})
</script>

<template>
  <div class="flex flex-col gap-7">
    <input
      v-model="searchText"
      placeholder="Search your joke in collection ..."
      class="border-1 border-b-cyan-900 px-4 py-2 rounded w-full"
    />

    <JokeCard v-for="j in filteredJokes" :key="j.id" :joke="j" />
  </div>
</template>
