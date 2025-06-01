import axios, { type AxiosInstance } from 'axios'
import { useToast } from 'vue-toast-notification'

export type Joke = {
  id: number
  type: string
  setup: string
  punchline: string
}
const $toast = useToast({
  position: 'top-right',
})

const client: AxiosInstance = axios.create({
  baseURL: 'https://official-joke-api.appspot.com/',
})

export async function getRandomJokeById(id: number): Promise<Joke> {
  return (await client.get(`/jokes/${id}`)).data
}

export async function getRandomJoke(): Promise<Joke> {
  return (await client.get('/random_joke')).data
}

export async function getNRandomJokes(n: number): Promise<Joke[]> {
  return (await client.get(`/jokes/random/${n}`)).data
}

export async function get10RandomJokesByType(type: string): Promise<Joke[]> {
  return (await client.get(`/jokes/${type}/ten`)).data
}

export function setLocalStorageJokes(jokes: Joke[], type: string) {
  const key = type === 'programming' ? type + '_jokes' : type + '_jokes'
  try {
    localStorage.setItem(key, JSON.stringify(jokes))
  } catch (e) {
    console.error('Error setting jokes to localStorage:', e)
    $toast.error('Error setting jokes to localStorage. Please try again later.')
  }
}
export function getLocalStorageJokes(type: string): Joke[] {
  const key = type === 'programming' ? type + '_jokes' : type + '_jokes'
  const raw = localStorage.getItem(key)

  if (!raw) return []
  try {
    return JSON.parse(raw)
  } catch (e) {
    console.error('Error parsing jokes from localStorage:', e)
    $toast.error('Error parsing jokes from localStorage. Please try again later.')

    return []
  }
}

export default client
