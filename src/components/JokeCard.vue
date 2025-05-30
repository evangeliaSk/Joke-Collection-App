<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue'
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/vue/24/solid'

import { jokesCollectionKey } from '@/keys'
import type { Joke } from '@/jokesClient'

const props = defineProps(['joke'])
const isJokeSaved = ref(false)
const isPunchlineInvisible = ref(true)

const showPuncline = () => {
  isPunchlineInvisible.value = false
}

const { isJokeIncludedToCollection, addJokeToCollection, removeJokeFromCollection } = inject(
  jokesCollectionKey,
) as {
  isJokeIncludedToCollection: (jokeId: string) => boolean
  addJokeToCollection: (joke: Joke) => void
  removeJokeFromCollection: (jokeId: string) => void
}

const onSave = () => {
  addJokeToCollection(props.joke)
  isJokeSaved.value = true
}

const onRemove = () => {
  removeJokeFromCollection(props.joke.id)
  isJokeSaved.value = false
}

onMounted(() => {
  // if there is again a joke in the list that is already saved
  if (isJokeIncludedToCollection(props.joke.id)) {
    isJokeSaved.value = true
  }
})
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
      <button v-if="!isJokeSaved" @click="onSave">
        <BookmarkIcon class="w-6 h-6 text-blue-600" />
      </button>

      <button v-else @click="onRemove">
        <BookmarkIconSolid class="w-6 h-6 text-blue-600" />
      </button>
    </div>
  </div>
</template>
