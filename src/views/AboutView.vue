<template>
  <div class="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-2xl">
    <h2 class="text-3xl">About Page</h2>

    <p class="text-lg text-gray-700">
      This project is a Take Home Assignment for the interview process at
      <span class="font-semibold text-[#226FBA]">Epignosis</span>.
    </p>

    <p class="text-md text-gray-600 italic">
      Created with love by <span class="font-semibold text-black">Evangelia Skouloudi</span>
    </p>

    <div>
      <h3>Project Description</h3>
      <p class="text-gray-700">
        This is a joke collection application built with the
        <a href="https://github.com/15Dkatz/official_joke_api" target="_blank">Official Joke API</a
        >. Users can discover, save, and interact with jokes while showcasing frontend development
        skills.
      </p>
    </div>

    <div>
      <h3>Tech Stack</h3>
      <ul class="list-disc list-inside text-gray-700">
        <li>Vue.js 3 (Composition API)</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Official Joke API</li>
      </ul>
    </div>

    <div>
      <h3>Core Features</h3>
      <ul>
        <li>
          <strong>Joke Discovery</strong>
          <ul class="list-disc list-inside ml-4">
            <li>Fetch and display random or programming jokes</li>
            <li>Reveal punchlines with animation</li>
            <li>Handle loading and error states gracefully</li>
          </ul>
        </li>
        <li>
          <strong>Joke Collection Management</strong>
          <ul class="list-disc list-inside ml-4">
            <li>Save favorite jokes</li>
            <li>Remove jokes from collection</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
