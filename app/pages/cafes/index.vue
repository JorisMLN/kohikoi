<!-- pages/cafes/index.vue -->
<script setup>
import { useCafesStore } from '~/stores/cafes'
import { useCategoriesStore } from '~/stores/categories'

const cafesStore = useCafesStore()
const categoriesStore = useCategoriesStore()

// Accès direct aux données
const cafes = computed(() => cafesStore.filteredCafes)
const categories = computed(() => categoriesStore.allCategories)

// Fonctions
function filterByCategory(categorySlug) {
  cafesStore.setCategory(categorySlug)
}

function search(query) {
  cafesStore.setSearchQuery(query)
}
</script>

<template>
  <Filter />
  <div class="coffeeFilter">
    <h1>Tous les cafés</h1>
    <NuxtLink to="/" class="cta-button">Accueil</NuxtLink>

    <!-- Filtres -->
    <div class="filters">
      <select @change="filterByCategory($event.target.value)">
        <option value="all">Toutes catégories</option>
        <option 
          v-for="cat in categories" 
          :key="cat.slug"
          :value="cat.slug"
        >
          {{ cat.icon }} {{ cat.name }}
        </option>
      </select>
      
      <input 
        type="search" 
        placeholder="Rechercher..."
        @input="search($event.target.value)"
      />
    </div>
    
    <!-- Liste -->
    <div class="grid">
      <CafeCard 
        v-for="cafe in cafes" 
        :key="cafe.id"
        :cafe="cafe" 
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.coffeeFilter {
  min-height: 93vh;
  background: $color-background;
  padding: 2rem 1rem;
  
  &__container {
    max-width: 1400px;
    margin: 0 auto;
    
    @include tablet {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 3rem;
    }
  }
  
  &__header {
    grid-column: 1 / -1;
    @include flex-between;
    margin-bottom: 2rem;
    
    h1 {
      font-size: 2.5rem;
      color: $color-navy;
      margin: 0;
    }
  }
}

// Filtres en sidebar
.filters {
  @include flex-column;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: fit-content;
  position: sticky;
  top: 2rem;
  margin-bottom: 30px;
  
  @include mobile {
    position: static;
    margin-bottom: 2rem;
  }
  
  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: $color-navy;
    margin: 0 0 1rem 0;
  }
  
  &__select,
  &__search {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 2px solid $color-gold;
    border-radius: 8px;
    font-size: 1rem;
    background: white;
    
    &:focus {
      outline: none;
      border-color: $color-gold-dark;
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    }
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @include mobile {
    grid-template-columns: 1fr;
  }
}
</style>