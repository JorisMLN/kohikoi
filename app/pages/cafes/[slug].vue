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

    <div class="hero-banner">
      <div class="hero-banner__bg"></div>
      <!-- <div class="hero-banner__overlay"></div> -->
      
      <NuxtLink :to="`/categories/${category?.slug}`" class="btn-back">
        <Icon name="ph:arrow-left" size="20" />
        {{ t('back') }}
      </NuxtLink>
      
      <div class="hero-banner__content">
        <h1 class="hero-banner__title">{{ cafe.name_ja }}</h1>
        <p class="hero-banner__subtitle">{{ cafe.name }}</p>
      </div>
    </div>
    
    <div class="cafe-detail__container">
      
      <div class="stats-bar">
        <div class="stat-item">
          <Icon name="solar:star-fall-2-bold" size="24" />
          <span class="stat-value">4.0</span>
        </div>
        
        <div class="stat-item" v-if="cafe.price_range">
          <span class="stat-value">{{ '¥'.repeat(cafe.price_range) }}</span>
        </div>
        
        <div class="stat-item">
          <Icon name="ph:map-pin-fill" size="20" />
          <span class="stat-value">{{ cafe.city }}</span>
        </div>
        
        <div class="stat-item">
          <span class="category-badge">
            {{ category?.icon }} {{ category?.name }}
          </span>
        </div>
      </div>
      
      <div class="content-grid">
        
        <div class="main-content">
          <section class="section">
            <h2 class="section-title">À propos</h2>
            <p class="description">{{ cafe.description }}</p>
          </section>
          
          <section class="section">
            <h2 class="section-title">Horaires d'ouverture</h2>
            <OpeningDays v-if="cafe.opening_days" :days="cafe.opening_days" />
          </section>
        </div>
        
        <aside class="sidebar">
          <div class="info-card">
            <h3 class="info-card__title">Informations</h3>
            
            <div class="info-item">
              <Icon name="ph:map-pin-fill" size="20" class="info-icon" />
              <div class="info-content">
                <span class="info-label">Adresse</span>
                <span class="info-value">{{ cafe.address }}</span>
                <span class="info-value">{{ cafe.city }}</span>
              </div>
            </div>
            
            <div class="info-item">
              <Icon name="mdi:tag" size="20" class="info-icon" />
              <div class="info-content">
                <span class="info-label">Catégorie</span>
                <NuxtLink 
                  :to="`/categories/${cafe.category}`"
                  class="info-link"
                >
                  {{ category?.name }}
                </NuxtLink>
              </div>
            </div>
            
            <a 
              :href="cafe.google_maps_url" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn-maps"
            >
              <Icon name="ph:map-trifold" size="20" />
              Google Maps
              <Icon name="ph:arrow-square-out" size="18" />
            </a>
          </div>
        </aside>
        
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cafe-detail {
  min-height: 100vh;
  background: $color-background;
}

.hero-banner {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  
  &__bg {
    position: absolute;
    inset: 0;
    background: url("./../../assets/images/cafe/little-nap-in-yoyogi.jpg");
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
  
  // &__overlay {
  //   position: absolute;
  //   inset: 0;
  //   // background: linear-gradient(
  //   //   to bottom,
  //   //   rgba(0, 0, 0, 0.005) 0%,
  //   //   rgba(0, 0, 0, 0.1) 50%,
  //   //   rgba(0, 0, 0, 0.3) 100%
  //   // );
  //   z-index: 2;
  // }
  
  .btn-back {
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(12px);
    color: white;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.3);
    z-index: 4;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.35);
      transform: translateX(-4px);
    }
  }
  
  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 3rem;
    z-index: 3;
  }
  
  &__title {
    font-family: $font-yujiboku;
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: white;
    line-height: 1.1;
    text-shadow: 
      0 2px 4px rgba(0, 0, 0, 1),
      0 4px 8px rgba(0, 0, 0, 2),
      0 1px 2px rgba(0, 0, 0, 3);
  }
  
  &__subtitle {
    font-size: 1.75rem;
    font-weight: 500;
    margin: 0;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 
      0 2px 4px rgba(0, 0, 0, 1),
      0 4px 8px rgba(0, 0, 0, 2),
      0 1px 2px rgba(0, 0, 0, 3);
  }
}

.cafe-detail__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.stats-bar {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  margin-bottom: 3rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  flex-wrap: wrap;
  
  .stat-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.5rem;
    background: $color-background;
    border-radius: 12px;
    
    .stat-value {
      font-size: 1.25rem;
      font-weight: 700;
      color: $color-navy;
    }
    
    .category-badge {
      font-size: 1.1rem;
      font-weight: 600;
      color: $color-gold-dark;
    }
  }
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  
  @include tablet-down {
    grid-template-columns: 1fr;
  }
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.section {
  &-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: $color-navy;
    margin: 0 0 1.5rem 0;
    padding-bottom: 0.75rem;
    border-bottom: 3px solid $color-gold;
    display: inline-block;
  }
}

.description {
  font-size: 1.15rem;
  line-height: 1.8;
  color: $color-text;
  margin: 0;
}

.sidebar {
  position: sticky;
  top: 2rem;
  align-self: flex-start;
}

.info-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    color: $color-navy;
    margin: 0 0 2rem 0;
  }
}

.info-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid $color-background;
  
  &:last-of-type {
    border-bottom: none;
    padding-bottom: 2rem;
  }
  
  .info-icon {
    flex-shrink: 0;
    color: $color-gold;
    margin-top: 0.25rem;
  }
  
  .info-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .info-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: $color-text-light;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .info-value {
    font-size: 1.05rem;
    color: $color-text;
    font-weight: 500;
  }
  
  .info-link {
    font-size: 1.05rem;
    color: $color-navy;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
    
    &:hover {
      color: $color-gold;
    }
  }
}

.btn-maps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1.25rem;
  background: $color-gold;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background: $color-gold-dark;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(212, 175, 55, 0.4);
  }
}

@include mobile {
  .hero-banner {
    height: 300px;
    
    &__content {
      padding: 2rem;
    }
    
    &__title {
      font-size: 2.5rem;
    }
    
    &__subtitle {
      font-size: 1.25rem;
    }
  }
  
  .stats-bar {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cafe-detail__container {
    padding: 2rem 1rem;
  }
}
</style>

<!-- <template>
  <div class="cafe-detail">
    <div class="cafe-detail__container">
      
  
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
          
       
          <div class="cafe-detail__category-badge">
            <span class="icon">{{ category?.icon }}</span>
            {{ category?.name }}
          </div>
        </div>
      </div>


      <div class="cafe-detail__content">
  
        <header class="cafe-detail__header">
          <h1 class="cafe-detail__title">{{ cafe.name_ja }}</h1>
          <p class="cafe-detail__title-ja">{{ cafe.name }}</p>
        </header>

        <div class="cafe-detail__description">
          <p>{{ cafe.description }}</p>
        </div>


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
</style>  -->