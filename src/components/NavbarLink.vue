<script lang="ts" setup>
import { RouterLink } from 'vue-router'

defineProps(['route', 'title'])
</script>

<template>
  <li class="pl-10">
    <RouterLink
      :to="`/${route}`"
      class="text-white font-medium text-lg"
      :title="`This link goes to the ${title} page`"
    >
      {{ title }}
    </RouterLink>
  </li>
</template>
