<script lang="ts" setup>
import {
  getNRandomJokes,
  get10RandomJokesByType,
  type Joke,
  setLocalStorageJokes,
  getLocalStorageJokes,
} from '@/jokesClient'
import { CFormSwitch } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import { onMounted, ref, watch, type Ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useLoading } from 'vue-loading-overlay'
import { ArrowPathIcon, ArrowLongUpIcon, ArrowLongDownIcon } from '@heroicons/vue/24/outline'
import JokesCarousel from '@/components/JokesCarousel.vue'

const $toast = useToast({
  position: 'top-right',
})

const $loading = useLoading({})
const jokes: Ref<Joke[]> = ref([])
const onlyProgrammingJokes = ref(false)
const isAscending = ref(true)

const getJokes = async () => {
  const loader = $loading.show({})
  const type = onlyProgrammingJokes.value ? 'programming' : 'all'

  if (!onlyProgrammingJokes.value) {
    try {
      jokes.value = await getNRandomJokes(10)
      setLocalStorageJokes(jokes.value, type)
    } catch (error) {
      $toast.error('Failed to fetch jokes. Please try again later.')
      console.error('Failed to fetch jokes:', error)
    }
  } else {
    try {
      jokes.value = await get10RandomJokesByType('programming')
      setLocalStorageJokes(jokes.value, type)
    } catch (error) {
      $toast.error('Failed to fetch programming jokes. Please try again later.')
      console.error('Failed to fetch programming jokes:', error)
    }
  }
  loader.hide()
}
const loadJokes = async () => {
  const type = onlyProgrammingJokes.value ? 'programming' : 'all'
  const storedJokes = getLocalStorageJokes(type)

  if (Array.isArray(storedJokes) && storedJokes.length > 0) {
    jokes.value = storedJokes
  } else {
    loadJokes()
  }
}

const sortJokesAlphabetically = () => {
  const loader = $loading.show({})
  isAscending.value = !isAscending.value
  if (isAscending.value) {
    jokes.value.sort((a, b) => a.setup.localeCompare(b.setup)) //A -Z
  } else {
    jokes.value.sort((a, b) => b.setup.localeCompare(a.setup)) //Z -A
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
    <div class="flex gap-2.5 justify-between flex-wrap">
      <h2>Random Jokes</h2>
      <button @click="getJokes" class="flex gap-1 bg-[#FD7E14]/90 m-2 p-2.5">
        <ArrowPathIcon class="w-6 h-6" />
        New Jokes
      </button>
    </div>
    <div class="flex justify-between align-bottom flex-wrap">
      <CFormSwitch
        label="Programming Jokes only"
        id="formSwitchCheckDisabled"
        @change="onChange"
        size="xl"
      />
      <button
        @click="sortJokesAlphabetically"
        class="flex gap-1 m-1 p-1.5 align-middle border-1 rounded-full w-fit"
      >
        <ArrowLongDownIcon class="w-6 h-6" v-if="isAscending" />
        <ArrowLongUpIcon class="w-6 h-6" v-else />
        Sort Alphabetically
      </button>
    </div>

    <JokesCarousel :jokes="jokes" />
  </div>
</template>
