<script setup>
import { useCafesStore } from '~/stores/cafes'
import { useCategoriesStore } from '~/stores/categories'

const { locale, t } = useLanguage()

const route = useRoute()
const cafesStore = useCafesStore()
const categoriesStore = useCategoriesStore()

const cafe = computed(() => cafesStore.getCafeBySlug(route.params.slug))
const category = computed(() => categoriesStore.getCategoryBySlug(cafe.value?.category))

// Si le café n'existe pas
if (!cafe.value) {
  throw createError({ statusCode: 404, message: 'Café introuvable' })
}
</script>

<template>
  <div class="cafe-detail">
    <!-- Container principal -->
    <div class="cafe-detail__container">
      
      <!-- Section Image -->
      <div class="cafe-detail__image-section">
        <div class="cafe-detail__image-wrapper">
          <NuxtLink :to="`/categories/${category?.slug}`" class="btn-secondary">
            {{ t('backToList') }}
          </NuxtLink>
          <img 
            :src="cafe.photo_url" 
            :alt="cafe.name"
            class="cafe-detail__image"
          />
          
          <!-- Badge catégorie -->
          <div class="cafe-detail__category-badge">
            <span class="icon">{{ category?.icon }}</span>
            {{ category?.name }}
          </div>
        </div>
      </div>

      <!-- Section Contenu -->
      <div class="cafe-detail__content">
        
        <!-- Header -->
        <header class="cafe-detail__header">
          <h1 class="cafe-detail__title">{{ cafe.name_ja }}</h1>
          <p class="cafe-detail__title-ja">{{ cafe.name }}</p>
        </header>

        <!-- Description -->
        <div class="cafe-detail__description">
          <p>{{ cafe.description }}</p>
        </div>

        <!-- Informations -->
        <div class="cafe-detail__info-card">
          <h2 class="info-card__title">Informations</h2>
          
          <div class="info-card__item">
            <span class="info-card__label">📍 Localisation</span>
            <span class="info-card__value">{{ cafe.city }}, {{ cafe.address }}</span>
          </div>
          
          <div class="info-card__item">
            <span class="info-card__label">🏷️ Catégorie</span>
            <NuxtLink 
              :to="`/categories/${cafe.category}`"
              class="info-card__value info-card__link"
            >
              {{ category?.name_fr }}
            </NuxtLink>
          </div>

          <!-- Bouton Google Maps -->
          <a 
            :href="cafe.google_maps_url" 
            target="_blank"
            rel="noopener noreferrer"
            class="info-card__maps-button"
          >
            <span>📍</span>
            Voir sur Google Maps
            <span class="external-icon">↗</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cafe-detail {
  min-height: 100vh;
  background: $color-background;
  padding: 2rem 1rem;
  
  @include tablet {
    padding: 3rem 2rem;
  }
  
  // === BREADCRUMB ===
  &__breadcrumb {
    max-width: 1200px;
    margin: 0 auto 2rem;
    font-size: 0.9rem;
    color: $color-text-light;
    
    .cta-button {
      padding: 1rem 2rem;
      background: $color-background;
      color: black;
      text-decoration: none;
      border-radius: 8px;
      margin: 5px;
  
      &:hover {
        background: $color-text-light;
      }
    }
  }
  
  // === CONTAINER ===
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    
    @include tablet {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    
    @include desktop {
      grid-template-columns: 1.2fr 1fr;
    }
  }
  
  // === SECTION IMAGE ===
  &__image-section {
    position: relative;
    background: $color-navy-dark;
    
    @include mobile {
      height: 300px;
    }
    
    @include tablet {
      min-height: 600px;
    }
  }
  
  &__image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &__category-badge {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    color: $color-navy;
    font-weight: 600;
    border-radius: 24px;
    font-size: 0.9rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    
    .icon {
      margin-right: 0.5rem;
      font-size: 1.1rem;
    }
  }
  
  // === SECTION CONTENU ===
  &__content {
    padding: 2rem;
    @include flex-column;
    gap: 2rem;
    
    @include tablet {
      padding: 3rem;
    }
  }
  
  // === HEADER ===
  &__header {
    margin-bottom: 1rem;
  }
  
  &__title {
    font-size: 2rem;
    font-weight: 700;
    color: $color-navy;
    margin: 0 0 0.5rem 0;
    line-height: 1.2;
    
    @include tablet {
      font-size: 2.5rem;
    }
  }
  
  &__title-ja {
    font-size: 1.25rem;
    color: $color-text-light;
    margin: 0;
    font-weight: 400;
  }
  
  // === DESCRIPTION ===
  &__description {
    p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: $color-text;
      margin: 0;
    }
  }
  
  // === CARTE INFO ===
  &__info-card {
    background: $color-background;
    padding: 2rem;
    border-radius: 12px;
    border: 2px solid $color-gold;
    
    .info-card__title {
      font-size: 1.25rem;
      font-weight: 700;
      color: $color-navy;
      margin: 0 0 1.5rem 0;
    }
    
    .info-card__item {
      @include flex-column;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
      
      &:last-of-type {
        margin-bottom: 2rem;
      }
    }
    
    .info-card__label {
      font-size: 0.875rem;
      font-weight: 600;
      color: $color-text-light;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .info-card__value {
      font-size: 1.05rem;
      color: $color-text;
      font-weight: 500;
    }
    
    .info-card__link {
      color: $color-navy;
      text-decoration: none;
      transition: color 0.3s;
      
      &:hover {
        color: $color-gold;
      }
    }
    
    .info-card__maps-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      width: 100%;
      padding: 1rem 1.5rem;
      background: $color-gold;
      color: $color-navy;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      
      .external-icon {
        margin-left: auto;
        font-size: 1.2rem;
      }
      
      &:hover {
        background: $color-gold-dark;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
      }
      
      &:active {
        transform: translateY(0);
      }
    }
  }
  
  // === ACTIONS ===
  &__actions {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
}

// === BOUTONS ===
.btn-secondary {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 150px;
  height: 50px;
  align-items: center;
  background: white;
  color: $color-navy;
  text-decoration: none;
  border: 2px solid $color-navy;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: $color-navy;
    color: white;
  }
}
</style>