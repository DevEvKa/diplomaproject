<template>
  <nuxt-icon
    :name="name"
    class="icon"
    :class="classes"
    filled
  />
</template>

<script setup lang="ts">
  import type { PropType } from 'vue';
  type colors = 'white' | 'black';
  
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    viewBox: {
      type: String,
      default: undefined,
      validator(value: string) {
        return value.split(' ').every((v) => {
          return !isNaN(parseInt(v, 10));
        });
      },
    },
    size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'basic'>,
      default: '',
    },
    color: {
      type: String as PropType<colors>,
      default: '',
    },
  });

  const classes = computed(() => {
    return {
      [`icon--${props.size}`]: Boolean(props.size),
      [`icon--${props.color}`]: Boolean(props.color),
    };
  });
  </script>
  
  <style lang="scss">
  @import '@/assets/scss/common/mixins';
  @import '@/assets/scss/common/variables';

  .nuxt-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all $default-transition;

    svg {
      fill: $color-black;
      transition: fill $default-transition;
    }

    //размеры.начало
  
    &.icon--xs {
      svg {
        width: 16px;
        height: 16px;
      }
    }
  
    &.icon--sm {
      svg {
        width: 24px;
        height: 24px;
      }
    }
  
    &.icon--md {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  
    &.icon--lg {
      svg {
        width: 78px;
        height: 78px;
      }
    }
    //размеры.конец

    //цвета.начало
    &.icon--black {
      svg {
        fill: $color-black;
      }
    }
  }

  </style>
  