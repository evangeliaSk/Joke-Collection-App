<script lang="ts" setup>
import { type Joke } from '@/jokesClient'
import { inject } from 'vue'
import { jokesCollectionKey } from '@/keys'
import Search from '@/components/Search.vue'

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
    <Search :jokes="jokesCollection" />
  </div>
</template>
