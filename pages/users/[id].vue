<template>
  <section>
    <h1>This is the page of user {{ user?.name }}</h1>
  </section>
</template>

<script setup lang="ts">
import { type IUser } from '~/types/users';

const route = useRoute();

definePageMeta({
  validate: async (route) => {
    //const nuxtApp = useNuxtApp()
    console.log("validate");
    return /^\d+$/.test(route.params.id as string);
  },
});

const { data: user } = await useLazyFetch<IUser>('https://jsonplaceholder.typicode.com/users/' + route.params.id);
</script>
