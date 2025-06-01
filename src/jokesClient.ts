import axios, { type AxiosInstance } from 'axios'

export type Joke = {
  id: number
  type: string
  setup: string
  punchline: string
}

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
  localStorage.setItem(key, JSON.stringify(jokes))
}
export function getLocalStorageJokes(type: string): Joke[] {
  const key = type === 'programming' ? type + '_jokes' : type + '_jokes'
  const raw = localStorage.getItem(key)

  if (!raw) return []
  try {
    return JSON.parse(raw)
  } catch (e) {
    console.error('Error parsing jokes from localStorage:', e)
    return []
  }
}

export default client
