<script lang="ts" setup>
import { LinkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-2xl flex flex-col gap-4">
    <h2 class="text-3xl">About Page</h2>

    <p class="text-lg text-gray-700">
      This project is a Take Home Assignment for the interview process at
      <span class="font-semibold text-[#226FBA]"
        ><a href="https://www.epignosishq.com/" target="_blank">Epignosis</a> </span
      >.
    </p>

    <div class="flex flex-col text-md text-gray-600 italic gap-1">
      <div class="flex">
        Created with love by
        <span class="font-semibold text-black"> &nbsp; Evangelia Skouloudi</span>
      </div>
      <div class="flex">
        <LinkIcon class="w-6 h-6 text-[#FD7E14]/90" /> Github:
        <a href="https://github.com/evangeliaSk" target="_blank" class="color-[#226FBA]"
          >https://github.com/evangeliaSk</a
        >
      </div>
      <div class="flex">
        <LinkIcon class="w-6 h-6 text-[#FD7E14]/90" /> Linkedin:
        <a
          href="http://www.linkedin.com/in/evangelia-skouloudi-141258201"
          target="_blank "
          class="color-[#226FBA]"
          >www.linkedin.com/in/evangelia-skouloudi-141258201</a
        >
      </div>
    </div>

    <div>
      <h3>Project Description</h3>
      <p class="text-gray-700">
        This is a joke collection application built with the
        <a href="https://github.com/15Dkatz/official_joke_api" target="_blank">Official Joke API</a
        >. Users can discover, save, and interact with jokes skills.
      </p>
    </div>

    <div>
      <h3>Tech Stack</h3>
      <ul class="list-disc list-inside text-gray-700">
        <li>Vue.js 3 (Composition API)</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>
          <a href="https://github.com/15Dkatz/official_joke_api" target="_blank"
            >Official Joke API</a
          >
        </li>
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

    <div>
      <h3>Extra Features</h3>
      <ul class="list-disc list-inside ml-4">
        <li>Persist collection and jokes in localStorage</li>
        <li>Text search in joke collection</li>
        <li>Sort by: Alphabetically</li>
        <li>Display collection statistics: Total jokes saved</li>
      </ul>
    </div>
  </div>
</template>
