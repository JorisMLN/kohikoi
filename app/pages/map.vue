<script setup lang="ts">
const { cafes, loading, error, fetchAllCafes } = useCafes()

// Charger uniquement les Coffee Stand pour tester
await fetchAllCafes()

const Map = defineAsyncComponent(() => import('~/components/map/Map.vue'))
// Centre sur Tokyo
const mapCenter: [number, number] = [35.6762, 139.6503]
</script>

<template>
  <div class="map-page">
    <!-- Loading state -->
    <div v-if="loading" class="map-page__loading">
      Chargement de la carte...
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="map-page__error">
      {{ error }}
    </div>

    <!-- Map -->
     <div v-else class="mapContainer">
        <Map 
          :cafes="cafes" 
          :center="mapCenter"
          :zoom="12"
        />
     </div>

    <!-- Légende -->
    <div class="map-page__legend">
      <h3>Légende</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.map-page {
  min-height: 100vh;
  background: $color-background;
  
  @include mobile {
    padding: 1rem;
  }

  .mapContainer{
    height: 80%;
  }
  
  &__loading,
  &__error {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    padding: 3rem;
    font-size: 1.2rem;
  }
  
  &__error {
    color: red;
  }
  
  &__legend {
    padding: 1.5rem;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    h3 {
      font-size: 1.25rem;
      color: $color-navy;
    }
  }
}
</style>