<template>
  <section class="article">
    <h1 class="article__title">{{ article?.title }}</h1>
    <nuxt-img
      v-if="article?.preview"
      :src="article?.preview.src"
      :alt="article?.preview.alt"
      class="article__image"
    />
    <p class="article__text">{{ article?.text }}</p>
    <div class="article__details">
      <p class="article__date">{{ article?.date }}</p>
      <p class="article__author">{{ article?.authorFull }}</p>
    </div>


  </section>
</template>

<script setup lang="ts">
//import { type IUser } from '~/types/users';
import { useArticlesStore } from "~/store/articles";

const route = useRoute();
const usersStore = useArticlesStore();

const article = usersStore.articlesItems.find(item => +item.id === +route.params.id);

//const url = computed(() => require(`../../public/${article?.preview.src}`));

</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/mixins';
@import '@/assets/scss/common/variables';

.article {
  min-height: 100vh;

  &__title {
    margin-bottom: 30px;
  }

  &__image {
    float:left;
    margin: 4px 10px 2px 0px;
    border: 1px solid $color-grey-dark-extra;
    padding: 6px;
  }

  &__text {
    margin-bottom: 30px;
  }

  &__details {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }

  &__author,
  &__date {
    font-size: 20px;
    font-weight: 600;
  }
}

</style>
