<template>
  <div>
    <navbar-menu />
    <main class="flex-grow bg-gray-100">
      <div class="max-w-4xl mx-auto p-4">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import NavbarMenu from './components/Navbar.vue'

export default {
  components: {
    NavbarMenu,
  },
}
</script>
