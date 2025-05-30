<template>
  <div>
    <navbar-menu />
    <router-view></router-view>
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
