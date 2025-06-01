<script lang="ts" setup>
import { type Joke } from '../jokesClient'
import { inject } from 'vue'
import { jokesCollectionKey } from '../keys'
import TextSearch from '../components/TextSearch.vue'

const { jokesCollection } = inject(jokesCollectionKey) as {
  jokesCollection: Joke[]
}
</script>

<template>
  <div class="flex flex-col gap-1.25">
    <h2>My Collection of jokes</h2>
    <p class="text-xl">
      Your collection includes: <strong>{{ jokesCollection.length }}</strong> jokes
    </p>
    <TextSearch :jokes="jokesCollection" />
  </div>
</template>
