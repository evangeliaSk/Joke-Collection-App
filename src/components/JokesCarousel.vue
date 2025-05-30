<script lang="ts" setup>
import '@splidejs/vue-splide/css'
import JokeCard from './JokeCard.vue'

defineProps(['jokes'])
</script>

<template>
  <Splide
    :options="{ rewind: true, perPage: 2, gap: '1rem', arrows: true, pagination: true }"
    aria-label="Joke Carousel"
  >
    <SplideSlide v-for="joke in jokes" :key="joke.id">
      <JokeCard :joke="joke" />
    </SplideSlide>
  </Splide>
</template>
