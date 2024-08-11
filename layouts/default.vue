<template>
  <div class="container">
    <TheHeader />
    <main class="main">
      <div class="container">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "~/components/TheHeader.vue";
</script>
