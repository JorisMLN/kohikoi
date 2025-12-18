<!-- pages/cafes/[slug].vue -->
<script setup>
import { useCafesStore } from '~/stores/cafes'

const route = useRoute()
const cafesStore = useCafesStore()

const cafe = computed(() => cafesStore.getCafeBySlug(route.params.slug))

// Si le café n'existe pas
if (!cafe.value) {
  throw createError({ statusCode: 404, message: 'Café introuvable' })
}
</script>

<template>
  <div class="cafe-detail">
    <h1>{{ cafe.name }}</h1>
    <p class="name-ja">{{ cafe.name_ja }}</p>
    
    <img :src="cafe.photo_url" :alt="cafe.name" />
    
    <p>{{ cafe.description }}</p>
    
    <div class="info">
      <p>📍 {{ cafe.city }}, {{ cafe.address }}</p>
      <a :href="cafe.google_maps_url" target="_blank">
        Voir sur Google Maps
      </a>
    </div>
  </div>
</template>