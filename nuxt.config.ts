// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", '@pinia/nuxt'],
  pinia: {
    storesDirs: ['~/stores/**'],
  },
  imports: {
    dirs: ["stores"],
  },
  css: ['~/assets/scss/common.scss'],
  typescript: {
    typeCheck: true
  },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/_variables.scss" as *;'
  //       }
  //     }
  //   }
  // }
});
