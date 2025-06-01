<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue'
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/vue/24/solid'

import { jokesCollectionKey } from '../keys'
import type { Joke } from '../jokesClient'

const props = defineProps<{
  joke: Joke
}>()
const isJokeSaved = ref(false)
const isPunchlineInvisible = ref(true)

const showPuncline = () => {
  isPunchlineInvisible.value = false
}

const { isJokeIncludedToCollection, addJokeToCollection, removeJokeFromCollection } = inject(
  jokesCollectionKey,
) as {
  isJokeIncludedToCollection: (jokeId: number) => boolean
  addJokeToCollection: (joke: Joke) => void
  removeJokeFromCollection: (jokeId: number) => void
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
    class="flex flex-col bg-white pt-10 p-20 gap-1.5 rounded-xl min-h-[150px] h-full justify-between"
  >
    <p class="text-black-700 text-xl">
      <strong>{{ joke.setup }}</strong>
    </p>
    <button
      v-if="isPunchlineInvisible"
      type="button"
      @click="showPuncline"
      class="bg-[#226FBA]/90 hover:bg-[#226FBA] text-white text-sm px-4 py-2 w-fit rounded-full shadow transition"
    >
      Show puncline
    </button>

    <p
      :class="[
        'transition-opacity duration-700 ease-in-out',
        isPunchlineInvisible ? 'opacity-0' : 'opacity-100',
      ]"
      class="flex"
    >
      {{ joke.punchline }}
    </p>
    <div class="flex gap-2 mt-4 self-end">
      <button v-if="!isJokeSaved" @click="onSave">
        <BookmarkIcon class="w-6 h-6 text-bg-[#226FBA]" />
      </button>
      <button v-else @click="onRemove">
        <BookmarkIconSolid class="w-6 h-6 text-blue-600" />
      </button>
    </div>
  </div>
</template>
