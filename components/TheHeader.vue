<template>
  <header class="header">
    <div class="container">
      <NuxtLink
        to="/"
        class="header__logo"
      >
        <VSvgIcon
          name="IconLogo"
          size="lg"
          alt="Звёзды"
          class="header__logo-img"
        />
      </NuxtLink>
      <NavigationMenu
        :links="navigationLinks"
      />
    </div>
  </header>

</template>

<script setup lang="ts">
  import VSvgIcon from '~/components/common/VSvgIcon.vue';
  import NavigationMenu from "~/components/NavigationMenu.vue";

  const navigationLinks = [
    {
      name: "Журнал",
      src: "/articles",
    },
    // {
    //   name: "About",
    //   src: "/about",
    // },
    {
      name: "Задания",
      src: "/tasks",
    },
    // {
    //   name: "Login",
    //   src: "/login",
    // },

  ]

</script>

<style lang="scss">
.header {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;    
  }
}

</style>