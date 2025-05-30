<template>
  <li>
    <router-link
      :to="`/${route}`"
      class="nav-link"
      active-class="active"
      aria-current="page"
      :title="`This link goes to ${title} the page`"
    >
      {{ title }}</router-link
    >
  </li>
</template>

<script lang="ts">
export default {
  props: ['route', 'title'],
}
</script>
