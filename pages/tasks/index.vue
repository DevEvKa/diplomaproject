<template>
	<section class="tasks">
    <h1>Темы</h1>
    <VButton
      v-for="item in tasksStore.tasksItems"
      :key="item.id"
      :to="`/tasks/${item.id}`"
      :text="item.rule.title"
      type="link"
      class="tasks__link"
    />
  </section>
</template>

<script setup lang="ts">
import VButton from '~/components/common/VButton.vue';

import { useTasksStore } from "~/store/tasks";

const tasksStore = useTasksStore();


</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/mixins';
@import '@/assets/scss/common/variables';

.tasks {
	display: flex;
	flex-direction: column;
}

</style>
  
  
  