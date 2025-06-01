import type { Joke } from './jokesClient'

export function storeJokesToLocalStorage(jokes: Joke[], type: string): void {
  const key = type + '_jokes'

  try {
    localStorage.removeItem(key)
    localStorage.setItem(key, JSON.stringify(jokes))
  } catch (e) {
    console.error('Error setting jokes to localStorage:', e)
  }
}

export function getJokesFromLocaleStorage(type: string): Joke[] {
  const key = type + '_jokes'
  const raw = localStorage.getItem(key)

  if (!raw) {
    return []
  }

  try {
    return JSON.parse(raw)
  } catch (e) {
    console.error('Error parsing jokes from localStorage:', e)

    return []
  }
}
