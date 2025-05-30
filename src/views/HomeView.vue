<script lang="ts" setup>
import { getNRandomJokes, get10RandomJokesByType } from '@/jokesClient'
import JokeCard from '@/components/JokeCard.vue'
import { CFormSwitch } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import { onMounted, ref, watch } from 'vue'
import { useToast } from 'vue-toast-notification'

const $toast = useToast({
  position: 'top-right',
})

const jokes = ref([])
const loading = ref(false)
const onlyProgrammingJokes = ref(false)

const loadJokes = async () => {
  if (!onlyProgrammingJokes.value) {
    try {
      loading.value = true
      jokes.value = await getNRandomJokes(10)
    } catch (error) {
      $toast.error('Failed to fetch jokes. Please try again later.')
      console.error('Failed to fetch jokes:', error)
    }
  } else {
    try {
      loading.value = true
      jokes.value = await get10RandomJokesByType('programming')
    } catch (error) {
      $toast.error('Failed to fetch programming jokes. Please try again later.')
      console.error('Failed to fetch programming jokes:', error)
    }
  }
  loading.value = false
}
onMounted(() => {
  loadJokes()
})

watch(onlyProgrammingJokes, () => {
  loadJokes()
})

const onChange = () => {
  onlyProgrammingJokes.value = !onlyProgrammingJokes.value
}
</script>

<template>
  <div class="flex flex-col gap-1.25">
    <h1>Random Jokes</h1>
    <CFormSwitch label="Programming Jokes only" id="formSwitchCheckDisabled" @change="onChange" />
    <JokeCard v-for="joke in jokes" :key="joke.id" :joke="joke" />
  </div>
  <!-- <jokes-carousel></jokes-carousel> -->
</template>
