<template>
  <li>
    <router-link
      :to="`/${page}`"
      class="nav-link"
      active-class="active"
      aria-current="page"
      :title="`This link goes to ${page} the page`"
    >
      {{ page }}</router-link
    >
  </li>
</template>

<script lang="ts">
export default {
  props: ['page'],
}
</script>
