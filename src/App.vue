<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { provide, ref, type Ref } from 'vue'
import { type Joke } from './jokesClient'
import { jokesCollectionKey } from './keys'
import NavbarMenu from './components/NavbarMenu.vue'
import { getJokesFromLocaleStorage, storeJokesToLocalStorage } from './localStorage'

const jokesCollection: Ref<Joke[]> = ref(getJokesFromLocaleStorage('collection') || [])

const isJokeIncludedToCollection = (jokeId: number): boolean => {
  return jokesCollection.value.find((j) => j.id === jokeId) !== undefined
}

const addJokeToCollection = (joke: Joke) => {
  if (isJokeIncludedToCollection(joke.id)) {
    return
  }
  jokesCollection.value.push(joke)
  storeJokesToLocalStorage(jokesCollection.value, 'collection')
}

const removeJokeFromCollection = (jokeId: number): void => {
  if (!isJokeIncludedToCollection(jokeId)) {
    return
  }
  jokesCollection.value = jokesCollection.value.filter((j) => j.id !== jokeId)
  storeJokesToLocalStorage(jokesCollection.value, 'collection')
}

provide(jokesCollectionKey, {
  jokesCollection,
  isJokeIncludedToCollection,
  addJokeToCollection,
  removeJokeFromCollection,
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="shadow-md bg-white sticky top-0 z-50">
      <NavbarMenu />
    </header>

    <main class="flex flex-col items-center px-4 py-8">
      <div class="w-full max-w-5xl">
        <RouterView />
      </div>
    </main>
  </div>
</template>
