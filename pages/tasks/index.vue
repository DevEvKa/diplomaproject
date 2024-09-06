<template>
	<section class="tasks">
    <VButton
      v-for="item in tasksStore.tasksItems"
      :key="item.id"
      :to="`/tasks/${item.id}`"
      type="link"
      class="tasks__link"
    >
      {{ item.rule.title }}
    </VButton>
  </section>
</template>

<script setup lang="ts">
import BlockTextImage50 from '~/components/blocks/BlockTextImage50.vue';
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
  
  
  