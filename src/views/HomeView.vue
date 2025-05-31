<script lang="ts" setup>
import { getNRandomJokes, get10RandomJokesByType, type Joke } from '@/jokesClient'
import { CFormSwitch } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import { onMounted, ref, watch, type Ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useLoading } from 'vue-loading-overlay'
import { ArrowPathIcon } from '@heroicons/vue/24/outline'
import JokesCarousel from '@/components/JokesCarousel.vue'

const $toast = useToast({
  position: 'top-right',
})

const $loading = useLoading({})
const jokes: Ref<Joke[]> = ref([])
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
  <div class="flex flex-col gap-3">
    <div class="flex gap-2.5">
      <h2>Random Jokes</h2>
      <button @click="loadJokes">
        <ArrowPathIcon class="w-6 h-6 text-[#FD7E14]/90" />
      </button>
    </div>
    <CFormSwitch
      label="Programming Jokes only"
      id="formSwitchCheckDisabled"
      @change="onChange"
      size="xl"
    />

    <JokesCarousel :jokes="jokes" />
  </div>
</template>
