# joke-collection

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Project Description

This project is a **Take-Home Assignment** for the **Epignosis Interview**.

## Application Routes

- **`/` (Home)**  
  Displays random jokes in a carousel.  
  Includes a toggle switch to filter for _Programming_ jokes.
  Refresh button to load more jokes

- **`/collections`**  
  Displays the user's _saved jokes collection_.  
  Includes a search bar to filter jokes by _setup_ or _punchline_ text.

- **`/about`**  
  Describes the project, features, and purpose.

---

## Features

### Joke Discovery

- Fetch and display random jokes.
- Toggle between all jokes and _programming jokes_.
- Reveal punchline with a smooth animation.
- Show loading indicators during API requests.
- Handle API errors gracefully with user-friendly messages.

### oke Collection Management

- Save favorite jokes to a personal collection.
- Remove jokes from the collection.

---

## Extra Features

- **Persistence with `localStorage`**  
  The user's saved jokes are retained across sessions.

- **Search Functionality**  
  Text-based search across _setup_ and _punchline_ in the collection view.

- **Collection Statistics**  
  Displays:
  - Total number of saved jokes
