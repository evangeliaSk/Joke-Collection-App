# Joke Collection App

# Project Description

This project is a **Take-Home Assignment** for the **Epignosis Interview**.
Create a joke collection application integrating with the Official Joke API. The app will allow
users to collect and interact with jokes

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

## Build & Run Project

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

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
  The user's saved jokes and collections are retained across sessions.

- **Search Functionality**  
  Text-based search across _setup_ and _punchline_ in the collection view.

- **Collection Statistics**  
  Displays:

  - Total number of saved jokes

- **Sort Alphabetically**  
  Sort jokes alphabetically with setup
