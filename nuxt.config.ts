// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon'
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  css: ['@/assets/scss/main.scss'],
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/config" as *;'
        }
      }
    }
  },
  
  app: {
    head: {
      title: 'Kohikoi - 珈琲恋'
    }
  }
})