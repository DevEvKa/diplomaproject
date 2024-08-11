<template>
  <header class="header">
    <div class="container">
      <NuxtLink
        to="/"
        class="header__logo"
      >
        <img
          src="../assets/images/logo.svg"
          alt="Звёзды"
          class="header__logo-img"
        >
      </NuxtLink>
      <NavigationMenu
        :links="navigationLinks"
      />
    </div>
  </header>

</template>

<script setup lang="ts">
  import NavigationMenu from "~/components/NavigationMenu.vue";

  const navigationLinks = [
    {
      name: "Главная",
      src: "/",
    },
    {
      name: "About",
      src: "/about",
    },
    {
      name: "Users",
      src: "/users",
    },
    {
      name: "Login",
      src: "/login",
    },

  ]

</script>

<style lang="scss">
.header {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;    
  }
  

  &__logo-img {
    width: 50px;
  }
}

</style>