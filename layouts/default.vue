<template>
  <div class="container" style="border: 5px solid green">
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
