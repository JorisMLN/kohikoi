<script setup>
import { useCafesStore } from '~/stores/cafes'
import { useCategoriesStore } from '~/stores/categories'

const route = useRoute()
const cafesStore = useCafesStore()
const categoriesStore = useCategoriesStore()

// Récupérer la catégorie selon le slug dans l'URL
const category = computed(() => 
  categoriesStore.getCategoryBySlug(route.params.slug)
)

// Récupérer tous les cafés de cette catégorie
const cafes = computed(() => 
  cafesStore.getCafesByCategory(route.params.slug)
)

// Si la catégorie n'existe pas, erreur 404
if (!category.value) {
  throw createError({ 
    statusCode: 404, 
    message: 'Catégorie introuvable' 
  })
}

// Fonction de recherche locale (optionnelle)
const searchQuery = ref('')
const filteredCafes = computed(() => {
  if (!searchQuery.value) return cafes.value
  
  return cafes.value.filter(cafe => 
    cafe.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    cafe.city.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div class="category-page">

    <!-- Hero de la catégorie -->
    <header class="category-hero">
      <div class="category-hero__content">
        <span class="category-hero__icon">{{ category.icon }}</span>
        <h1 class="category-hero__title">{{ category.name_ja }}</h1>
        <p class="category-hero__subtitle">{{ category.name }}</p>
        <p class="category-hero__description">{{ category.description }}</p>
      </div>
    </header>

    <!-- Container principal -->
    <div class="category-container">
      
      <!-- Header avec stats et recherche -->
      <div class="category-header">
        <p class="category-count">
          <strong>{{ filteredCafes.length }}</strong> 
          {{ category.name.toLowerCase() }}{{ filteredCafes.length > 1 ? 's' : '' }} 
          {{ filteredCafes.length > 1 ? 'trouvés' : 'trouvé' }}
        </p>
        
        <!-- Recherche locale (optionnelle) -->
        <input 
          v-model="searchQuery"
          type="search" 
          placeholder="Rechercher dans cette catégorie..."
          class="category-search"
        />
      </div>

      <!-- Grid des cafés -->
      <div v-if="filteredCafes.length > 0" class="cafe-grid">
        <CafeCard 
          v-for="cafe in filteredCafes" 
          :key="cafe.id"
          :cafe="cafe" 
        />
      </div>

      <!-- Message si aucun café -->
      <div v-else class="empty-state">
        <span class="empty-state__icon">{{ category.icon }}</span>
        <h3 class="empty-state__title">
          {{ searchQuery ? 'Aucun résultat' : 'Aucun café dans cette catégorie' }}
        </h3>
        <p class="empty-state__text">
          {{ searchQuery 
            ? 'Essayez de modifier votre recherche' 
            : `Il n'y a pas encore de ${category.name.toLowerCase()} dans notre base.` 
          }}
        </p>
        <NuxtLink to="/" class="btn-primary">
          Retour à l'accueil
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.category-page {
  min-height: 100vh;
  background: $color-background;
  display: flex;
  flex-direction: column;
}

// === HERO CATÉGORIE ===
.category-hero {
  background: linear-gradient(135deg, $color-navy 0%, $color-navy-dark 100%);
  color: white;
  padding: 2rem 1rem;
  
  @include tablet {
    padding: 2.5rem 2rem;
  }
  
  &__content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  &__icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 0.75rem;
    
    @include tablet {
      font-size: 3rem;
    }
  }
  
  &__title {
    font-size: 1.75rem;
    margin: 0 0 0.5rem 0;
    font-weight: 700;
    
    @include tablet {
      font-size: 2rem;
    }
  }
  
  &__subtitle {
    font-size: 1.1rem;
    margin: 0 0 0.75rem 0;
    opacity: 0.85;
    font-weight: 300;
    
    @include tablet {
      font-size: 1.25rem;
    }
  }
  
  &__description {
    font-size: 0.95rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    opacity: 0.9;
    
    @include tablet {
      font-size: 1.05rem;
    }
  }
}

// === CONTAINER ===
.category-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
  flex: 1;
  
  @include tablet {
    padding: 2.5rem 2rem;
  }
}

// === HEADER (stats + recherche) ===
.category-header {
  margin-bottom: 2rem;
  @include flex-between;
  gap: 1rem;
  flex-wrap: wrap;
  
  @include mobile {
    flex-direction: column;
    align-items: flex-start;
  }
}

.category-count {
  font-size: 1.1rem;
  color: $color-text-light;
  margin: 0;
  
  strong {
    color: $color-navy;
    font-size: 1.5rem;
    font-weight: 700;
  }
}

.category-search {
  padding: 0.75rem 1.25rem;
  border: 2px solid $color-gold;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  color: $color-text;
  min-width: 300px;
  transition: all 0.3s ease;
  
  @include mobile {
    width: 100%;
    min-width: auto;
  }
  
  &::placeholder {
    color: $color-text-light;
  }
  
  &:focus {
    outline: none;
    border-color: $color-gold-dark;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
}

// === GRID DES CAFÉS ===
.cafe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  
  @include tablet {
    gap: 2.5rem;
  }
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

// === EMPTY STATE ===
.empty-state {
  @include flex-center;
  @include flex-column;
  padding: 2rem 1rem;
  text-align: center;
  flex: 1;
  
  @include tablet {
    padding: 3rem 2rem;
  }
  
  &__icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.4;
    
    @include tablet {
      font-size: 4.5rem;
      margin-bottom: 1.5rem;
    }
  }
  
  &__title {
    font-size: 1.5rem;
    color: $color-navy;
    margin: 0 0 0.75rem 0;
    font-weight: 700;
    
    @include tablet {
      font-size: 1.75rem;
    }
  }
  
  &__text {
    font-size: 1rem;
    color: $color-text-light;
    margin: 0 0 2rem 0;
    max-width: 500px;
    line-height: 1.6;
    
    @include tablet {
      font-size: 1.1rem;
    }
  }
}

.btn-primary {
  display: inline-block;
  padding: 1rem 2rem;
  background: $color-gold;
  color: $color-navy;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: $color-gold-dark;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
}
</style>