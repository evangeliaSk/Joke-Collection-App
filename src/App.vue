<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavbarMenu from './components/Navbar.vue'
import { provide, ref, watch, type Ref } from 'vue'
import type { Joke } from './jokesClient'
import { jokesCollectionKey } from './keys'

const jokesCollection: Ref<Joke[]> = ref([])

const isJokeIncludedToCollection = (jokeId: number): boolean => {
  return jokesCollection.value.find((j) => j.id === jokeId) !== undefined
}

const addJokeToCollection = (joke: Joke) => {
  if (isJokeIncludedToCollection(joke.id)) {
    return
  }
  jokesCollection.value.push(joke)
}

const removeJokeFromCollection = (jokeId: number) => {
  if (!isJokeIncludedToCollection(jokeId)) {
    return
  }
  jokesCollection.value = jokesCollection.value.filter((j) => j.id !== jokeId)
}

provide(jokesCollectionKey, {
  jokesCollection,
  isJokeIncludedToCollection,
  addJokeToCollection,
  removeJokeFromCollection,
})

watch(
  jokesCollection,
  () => {
    console.log(jokesCollection.value)
  },
  {
    deep: true,
  },
)
</script>
<template>
  <div>
    <NavbarMenu />
    <RouterView />
  </div>
</template>
