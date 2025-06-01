<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router'

defineProps<{ path: string; title: string }>()
const route = useRoute()
</script>

<template>
  <li
    class="pl-10"
    :class="{
      active: route.path === `/${path}`,
    }"
  >
    <RouterLink
      :to="`/${path}`"
      class="text-white font-medium text-lg"
      :title="`This link goes to the ${title} page`"
    >
      {{ title }}
    </RouterLink>
  </li>
</template>
