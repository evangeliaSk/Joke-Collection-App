<script lang="ts" setup>
import NavbarLink from './NavbarLink.vue'
</script>

<template>
  <nav class="bg-[#226FBA]">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center h-20">
        <div class="text-white text-2xl font-bold">Epignosis App</div>

        <ul class="flex list-none m-0 p-0">
          <NavbarLink title="Home" route="" />
          <NavbarLink title="Collections" route="collections" />
          <NavbarLink title="About" route="about" />
        </ul>
      </div>
    </div>
  </nav>
</template>
