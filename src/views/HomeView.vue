<script lang="ts" setup>
import { getNRandomJokes, get10RandomJokesByType } from '@/jokesClient'
import JokeCard from '@/components/JokeCard.vue'
import { CFormSwitch } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import { onMounted, ref, watch } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useLoading } from 'vue-loading-overlay'
import { ArrowPathIcon } from '@heroicons/vue/24/outline'

const $toast = useToast({
  position: 'top-right',
})

const $loading = useLoading({})
const jokes = ref([])
const onlyProgrammingJokes = ref(false)

const loadJokes = async () => {
  const loader = $loading.show({})
  if (!onlyProgrammingJokes.value) {
    try {
      jokes.value = await getNRandomJokes(10)
    } catch (error) {
      $toast.error('Failed to fetch jokes. Please try again later.')
      console.error('Failed to fetch jokes:', error)
    }
  } else {
    try {
      jokes.value = await get10RandomJokesByType('programming')
    } catch (error) {
      $toast.error('Failed to fetch programming jokes. Please try again later.')
      console.error('Failed to fetch programming jokes:', error)
    }
  }
  loader.hide()
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
    <div class="flex gap-2.5">
      <h1>Random Jokes</h1>
      <button @click="loadJokes">
        <ArrowPathIcon class="w-6 h-6 text-blue-600" />
      </button>
    </div>
    <CFormSwitch label="Programming Jokes only" id="formSwitchCheckDisabled" @change="onChange" />
    <JokeCard v-for="joke in jokes" :key="joke.id" :joke="joke" />
  </div>
  <!-- <jokes-carousel></jokes-carousel> -->
</template>
