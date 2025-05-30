<script lang="ts" setup>
import { ref } from 'vue'
import { BookmarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps(['joke'])
const isPunchlineInvisible = ref(true)

const showPuncline = () => {
  isPunchlineInvisible.value = false
}
</script>

<template>
  <div
    :key="joke.id"
    class="flex flex-col bg-orange-200 text-black p-4 gap-1.5 rounded-xl min-h-fit"
  >
    <p class="font-bold">{{ joke.setup }}</p>
    <button @click="showPuncline">Show puncline</button>
    <p
      :class="[
        'transition-opacity duration-700 ease-in-out',
        isPunchlineInvisible ? 'opacity-0' : 'opacity-100',
      ]"
      class="mt-2"
    >
      {{ joke.punchline }}
    </p>
    <div class="flex gap-1.5">
      <BookmarkIcon class="w-6 h-6 text-blue-600" />
    </div>
  </div>
</template>
