<script lang="ts" setup>
import NavbarLink from './NavbarLink.vue'
</script>

<template>
  <nav class="bg-[#226FBA]">
    <div class="max-w-7xl mx-auto md:mr-10 md:ml-10 sm:pl-10 sm:pr-10 flex-wrap">
      <div class="flex justify-between items-center h-20 flex-wrap">
        <router-link to="/" class="text-white text-2xl font-bold"> Epignosis App </router-link>
        <ul class="flex list-none m-0 p-0 flex-wrap">
          <NavbarLink title="Home" path="" />
          <NavbarLink title="Collections" path="collections" />
          <NavbarLink title="About" path="about" />
        </ul>
      </div>
    </div>
  </nav>
</template>
