<template>
  <section
    class="section block-text-image-50"
    :class="{'is-left-image': isLeftImage}"
    >
    <div class="block-text-image-50__text">
      <slot name="block-text-image-50"></slot>
    </div>
    <div class="block-text-image-50__image">
      <img
        :src="image.src"
        :alt="image.alt"
      >
    </div>
  </section>
</template>

<script setup lang="ts">

export interface TextImage50Item {
  image: {
    src: string,
    alt: string,
  },
  isLeftImage?: boolean,
};

const props = withDefaults(defineProps<TextImage50Item>(), {
  isLeftImage: false,
})


</script>

<style lang="scss">
@import '@/assets/scss/common/mixins';

.block-text-image-50 {
  min-width: 350px;
  display: flex;
  gap: 24px;
  
  @include sm {
    flex-direction: column;
  }

  &.is-left-image {
    flex-direction: row-reverse;
  }


  &__text {
    width: 50%;
    padding: 8px;

    @include md {
      padding: 4px;
    }
  }

  &__image {
    width: 50%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    
  }
}
</style>
