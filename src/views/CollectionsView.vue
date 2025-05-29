<template>
  <div class="flex flex-col gap-1.25">
    Hello collections
    <div
      v-for="(joke, index) in jokes"
      :key="index"
      class="flex flex-col bg-orange-600 text-black p-4 gap-1.5"
    >
      <p>{{ joke.setup }}</p>
      <p>{{ joke.punchline }}</p>

      <div>icon</div>
      <div>icon</div>
    </div>
  </div>
</template>

<script lang="ts">
import jokes from '../data/data.js'

export default {
  data() {
    return {
      jokes: [],
    }
  },
  mounted() {
    this.jokes = jokes
  },
}
</script>
