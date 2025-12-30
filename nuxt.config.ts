// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxtjs/google-fonts'
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET || 'fallback_secret_for_dev'
  },

  googleFonts: {
    families: {
      'Klee One': [400, 600],
      'Yuji Syuku': [400],   
      'Noto Sans JP': [400, 500, 700],
      'Zen Kurenaido': [400],
      'Yuji Boku': [400]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true
  },
  
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
      title: 'Kohikoi - 珈琲恋',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
          crossorigin: ''
        }
      ]
    }
  }
})