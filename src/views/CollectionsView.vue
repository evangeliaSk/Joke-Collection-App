<script lang="ts" setup>
import { type Joke } from '@/jokesClient'
import JokeCard from '@/components/JokeCard.vue'
import { inject } from 'vue'
import { jokesCollectionKey } from '@/keys'

const { jokesCollection } = inject(jokesCollectionKey) as {
  jokesCollection: Joke[]
}
</script>

<template>
  <div class="flex flex-col gap-1.25">
    <h2>My Collection of jokes</h2>
    <p class="text-xl">
      Your collection includes: <strong>{{ jokesCollection.length }}</strong> items
    </p>
    <JokeCard v-for="joke in jokesCollection" :key="joke.id" :joke="joke" />
  </div>
</template>
