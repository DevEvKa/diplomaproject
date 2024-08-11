<template>
  <div>
    <div class="title">
      <h1>Login page</h1>
      <br>
    </div>
    <div class="container form">
      <label for="uname"><b>Username</b></label>
      <input
        v-model="user.username"
        type="text"
        class="input"
        placeholder="Enter Username"
        name="uname"
        required
      >
      <label for="psw"><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="input"
        placeholder="Enter Password"
        name="psw"
        required
      >
      <button class="button" @click.prevent="login">Login</button>
    </div>
    <br>
    <NuxtLink to="/">Back to Home page</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

  definePageMeta({
    layout: 'empty'
  })

  const user = ref({
    username: '',
    password: '',
  });
  const login = async () => {
    // TODO send user Data to the login endpoint and redirect if  successful
  };
</script>
