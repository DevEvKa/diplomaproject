<template>
  <section
    class="section block-factoids"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="block-factoids__item"
    >
      <div class="block-factoids__top">
        <VSvgIcon
          :name="item.icon"
          size="md"
          color="black"
          class="block-factoids__icon"
        />
        <h4 class="block-factoids__title">{{ item.title }}</h4>
      </div>        
      <p class="h5 block-factoids__text">{{ item.text }}</p>
    </div>
    
  </section>
</template>
  
  <script setup lang="ts">
  import VSvgIcon from '~/components/common/VSvgIcon.vue';

  interface Factoids {
    title: string,
    text: string,
    icon: string,
  };
  const props = defineProps<{
    items: Factoids[];
  }>();

  </script>
  
  <style lang="scss">
  @import '@/assets/scss/common/mixins';
  
  .block-factoids {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    
    @include md {
      grid-gap: 4px;
    }

    &__item {
      display: flex;
      flex-direction: column;
      min-height: 200px;
      padding: 24px;
      gap: 24px;
      border-radius: 20px;
      background-color: $color-accent-2-light-extra;
    }

    &__top {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    &__icon {
      padding: 10px;
      border-radius: 50%;
      background-color: $color-accent-4-light-extra;
    }

    &__title {
      font-weight: 600;
    }
  }
  </style>
  