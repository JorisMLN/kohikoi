<script setup lang="ts">
import About from '~/components/home/About.vue'
import HowToUse from '~/components/home/HowToUse.vue'

const { fetchHomeContent } = useHome()

// Charger le contenu home
await fetchHomeContent()
</script>

<template>
  <Hero />
  <About />
  <HowToUse />
</template>