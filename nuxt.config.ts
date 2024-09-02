// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-icons", "nuxt-swiper", "@nuxt/eslint", '@pinia/nuxt', "@nuxt/image"],
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
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
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