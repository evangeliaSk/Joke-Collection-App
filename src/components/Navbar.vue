<template>
  <nav class="bg-blue-600 text-white p-4">
    <ul class="flex space-x-4">
      <navbar-link page="home" :key="1"></navbar-link>
      <navbar-link page="collections" :key="1"></navbar-link>
      <navbar-link page="about" :key="1"></navbar-link>
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
