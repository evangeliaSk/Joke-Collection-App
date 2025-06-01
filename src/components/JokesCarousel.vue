<script lang="ts" setup>
import '@splidejs/vue-splide/css'
import JokeCard from './JokeCard.vue'
import type { Joke } from '../jokesClient'

defineProps<{ jokes: Joke[] }>()
</script>

<template>
  <Splide
    :options="{
      rewind: true,
      perPage: 2,
      gap: '1rem',
      arrows: true,
      pagination: true,
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    }"
    aria-label="Joke Carousel"
  >
    <SplideSlide v-for="joke in jokes" :key="joke.id">
      <JokeCard :joke="joke" />
    </SplideSlide>
  </Splide>
</template>
