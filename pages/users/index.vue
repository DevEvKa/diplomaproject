<template>
  <section>
    <h1>Users page</h1>
    <ul>
      <!-- <li v-for="user of 5" :key="user">
        <NuxtLink :to="`/users/${user}`"> User {{ user }} </NuxtLink>
      </li> -->
      <li v-for="user of usersStore.users" :key="user.id">
        <NuxtLink :to="`/users/${user.id}`"> {{ user.name }} </NuxtLink>
      </li>
    </ul>
    <p>{{ plusOne(5) }}</p>
  </section>
</template>

<script setup lang="ts">
import { useUsersStore } from "~/store/users";

const usersStore = useUsersStore();
await callOnce(usersStore.getAllUsers);


</script>


