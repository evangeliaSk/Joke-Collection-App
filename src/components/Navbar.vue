<template>
  <nav class="bg-blue-600 text-white p-4">
    <ul class="flex space-x-4">
      <navbar-link title="Home" route="" :key="1"></navbar-link>
      <navbar-link title="Collections" route="collections" :key="2"></navbar-link>
      <navbar-link title="About" route="about" :key="3"></navbar-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import NavbarLink from './NavbarLink.vue'

export default {
  components: { NavbarLink },
  name: 'NavbarMenu',
}
</script>
