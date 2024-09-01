<template>
  <section
    class="section block-text-image-50"
    :class="{'is-left-image': isLeftImage}"
    >
    <div class="block-text-image-50__text">
      <h3 class="block-text-image-50__subject">{{ item.subject }}</h3>
      <h3 class="block-text-image-50__title">{{ item.title }}</h3>
      <p class="block-text-image-50__title">{{ item.text }}</p>
    </div>
    <div class="block-text-image-50__image">
      <img
        :src="item.image.src"
        :alt="item.image.alt"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
interface TextImage50Item {
  subject: string,
  title: string,
  text: string,
  image: {
    src: string,
    alt: string,
  },
};
const props = defineProps<{
  item: TextImage50Item;
  isLeftImage: boolean;
}>();

console.log(props)
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


  &__text {
    width: 50%;
    padding: 8px;

    @include md {
      padding: 4px;
    }
  }

  &__image {
    width: 50%;
    height: 350px;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    
  }
}
</style>
