import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
      '~': resolve(__dirname, './'),
    },
  },
})


// import { defineVitestConfig } from '@nuxt/test-utils/config'
// import { resolve } from 'path';

// export default defineVitestConfig({
//   // test: {
//   //   environment: 'nuxt',
//   //   globals: true,
//   //   // you can optionally set Nuxt-specific environment options
//   //   // environmentOptions: {
//   //   //   nuxt: {
//   //   //     rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
//   //   //     domEnvironment: 'happy-dom', // 'happy-dom' (default) or 'jsdom'
//   //   //     overrides: {
//   //   //       // other Nuxt config you want to pass
//   //   //     }
//   //   //   }
//   //   // }
//   // },
//   // // test: {
//   // //   environmentOptions: {
//   // //     nuxt: {
//   // //       mock: {
//   // //         intersectionObserver: true,
//   // //         indexedDb: true,
//   // //       }
//   // //     }
//   // //   },
//   // //   environment: "happy-dom",
//   // // },
//   //plugins: [vue()],
//   test: {
//     //environment: "happy-dom",
//     environment: 'nuxt',
//     globals: true,
//   },
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, './'),
//       '~': resolve(__dirname, './'),
//     },
//   },
//   // test: {
//   //   environment: 'nuxt',
//   //   globals: true,
    
//   // }
// })