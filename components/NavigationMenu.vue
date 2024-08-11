<template>
  <div class="navigation-menu">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.src"
      exact-active-class="is-active"
    >
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    links: {name: string, src: string}[]
  }
const props = defineProps<Props>()
</script>

<style lang="scss">
.navigation-menu {
  display: flex;
  gap: 24px;
}
</style>
