<template>
  <div
    :key="joke.id"
    class="flex flex-col bg-orange-200 text-black p-4 gap-1.5 rounded-xl min-h-fit"
  >
    <p class="font-bold">{{ joke.setup }}</p>
    <p class="font-thin">{{ joke.punchline }}</p>

    <div class="flex gap-1.5">
      <div>icon</div>
      <div>icon</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['joke'],
}
</script>
