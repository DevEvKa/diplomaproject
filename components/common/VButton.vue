<template>
  <Component
    :is="componentData.is"
    v-bind="componentData.bind"
    class="v-button"
    :class="classes"
    @click="onClick"
  >
    <VSvgIcon
      v-if="icon"
      :name="icon"
      :size="iconSize"
    />
    <span
      class="v-button__text"
    >
      {{ text }}
    </span>

  </Component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
// import type { NuxtLinkProps } from '#app';
// import { NuxtLinkLocale } from '#components';
// import type { DimensionProps } from '~/composables/dimensions';
import VSvgIcon from '~/components/common/VSvgIcon.vue';
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'basic'] as const;
const linesArr = ['two-lines'] as const;
const colors = ['transparent', 'white', 'black', 'gray'] as const;

export type VButtonProps = {
  text: string,
  size?: typeof sizes[number];
  to?: string | RouteLocationRaw | null;
  target?: string;
  rounded?: boolean;
  disabled?: boolean;
  active?: boolean;
  color?: typeof colors[number];
  lines?: typeof linesArr[number];
  icon?: string;
  iconSize?: typeof sizes[number];
  outlined?: boolean;
  exact?: boolean;
  textColor?: 'dark' | 'light';
  type?: 'filled' | 'outline' | 'link';
};
// } & DimensionProps;

const props = withDefaults(defineProps<VButtonProps>(), {
  text: '',
  to: null,
  target: '_self',
  rounded: false,
  disabled: false,
  active: false,
  color: 'gray',
  size: 'md',
  icon: '',
  iconSize: 'md',
  outlined: false,
  type: 'filled',
});
const emit = defineEmits(['disabled-click', 'click']);

const classes = computed(() => [
  `v-button--${props.size}`,
  {
    'is-rounded': props.rounded,
    'is-icon': props.icon,
    'is-disabled': props.disabled,
    'is-active': props.active,
    'is-outlined': props.outlined || props.type === 'outline',
    'is-link': props.type === 'link',
    [`v-button--${props.lines}`]: props.lines,
    [`text-${props.textColor}`]: !!props.textColor,
    [`v-button--${props.color}`]: true,
  },
]);

const componentData = computed(() => {
  if (props.to) {
    return {
      is: resolveComponent('NuxtLink'),
      bind: {
        to: props.to,
        target: props.target,
        exact: props.exact,
        noPrefetch: true,
      },
    };
  }
  return {
    is: 'button',
    bind: {},
  };
});

function onClick() {
  if (props.disabled) {
    emit('disabled-click');
    return;
  }
  emit('click');
}
</script>


<style lang="scss">
@import '@/assets/scss/common/mixins';
@import '@/assets/scss/common/variables';

.v-button {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &.is-rounded {
    border-radius: 12px;

    @include sm {
      border-radius: 8px;
    }
  }

  &.is-link {
    padding: 0;
    background-color: transparent;
  }

  &.is-disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  //размеры.начало
  &--md {
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }


  //размеры.конец

  //цвета.начало
  &--white {
    background-color: $color-white;
  }
  //цвета.конец

}
</style>
