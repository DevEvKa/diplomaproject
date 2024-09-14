<template>
  <section class="task">
    <div class="task__rule">
      <h3 class="task__rule-title">{{ task?.rule.title}}</h3>
      <div
        v-html="task?.rule.text"
        class="task__rule-text"
      />
      <VButton
        text="Перейти к заданию"
        color="gray"
        class="task__rule-button"
        @click="openTask"
      />
    </div>
    <div
      v-if="isTaskOpened"
      class="task__item"
    >
      <h3 class="task__item-title">{{ task?.task.title}}</h3>
      <div class="task__item-checkboxes">
        <VCheckbox
          v-for="answer in answers"
          :key="answer.id"
          :value="answer.text"
          v-model="checkedAnswers"
          class="task__item-checkbox"
          color="border"
          :class="{'is-wrong': answer.mark === 'wrong' && result}"
        />
      </div>
      
      <VButton
        text="Проверить ответы"
        color="gray"
        class="task__item-button"
        @click="checkAnswers"
      />
    </div>
  </section>
  </template>
  
  <script setup lang="ts">
  import { useTasksStore } from "~/store/tasks";

  import VCheckbox from "~/components/common/VCheckbox.vue";
  import VButton from "~/components/common/VButton.vue";
  
  const route = useRoute();
  const tasksStore = useTasksStore();

  interface ITask {
    id: number,
    mark: string,
    text: string
  }
  
  const task = tasksStore.tasksItems.find(item => +item.id === +route.params.id);

  const answers: ITask[] | undefined = task?.task.items;

  const checkedAnswers = ref([]);

  const isTaskOpened = ref(false);

  const openTask = () => {
    isTaskOpened.value = true;
  }

  const result = ref(false);
  
  const checkAnswers = () => {
    result.value = true;
  }
    
  
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/scss/common/mixins';
  @import '@/assets/scss/common/variables';
  
  .task {
    min-height: 100vh;

    &__item-checkbox {
      &.is-wrong {
        color: $color-error;

        :deep(label:before) {
          border-color: $color-error;
          background-color: $color-error-light;
        }
      }
    }

    &__rule {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 8px;
      padding: 24px;
      border-radius: 20px;
      background-color: $color-accent-1-light-extra;

      :deep(ul) {
        margin-left: 20px;
      }

      :deep(li) {
        list-style: auto;
        list-style-type: disc;
        padding: 5px 0;  
      }

      &-button {
        margin-left: auto;
      }
    }

    
    &__item {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 24px;
      border: 4px solid $color-accent-1-light-extra;
      border-radius: 20px;
      
      &-button {
        margin-left: auto;
      }
    }
  }
  
  </style>
  