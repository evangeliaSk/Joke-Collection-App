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

export default client
