<script setup>
const { locale, t } = useLanguage()
const route = useRoute()

// Utiliser les composables au lieu des stores
const { cafe, loading, error, fetchCafeBySlug } = useCafes()
const { categories, fetchCategories, getCategoryBySlug } = useCategories()

// Charger les catégories si pas encore fait
if (categories.value.length === 0) {
  await fetchCategories()
}

// Charger le café
await fetchCafeBySlug(route.params.slug)

// Si le café n'existe pas
if (!cafe.value) {
  throw createError({ statusCode: 404, message: 'Café introuvable' })
}

// Récupérer la catégorie du café
const category = computed(() => getCategoryBySlug(cafe.value?.category))
</script>

<template>
  <div class="cafe-detail">
    <!-- Loading state -->
    <div v-if="loading" class="loading-state">
      Chargement...
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="error-state">
      {{ error }}
    </div>

    <!-- Content -->
    <template v-else-if="cafe">
      <div class="hero-banner">
        <div class="hero-banner__bg"></div>
        
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
            <span class="stat-value">{{ cafe.koi_number }}</span>
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
    </template>
  </div>
</template>

<style scoped lang="scss">
.cafe-detail {
  min-height: 100vh;
  background: $color-background;
}

.loading-state,
.error-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  font-size: 1.2rem;
}

.error-state {
  color: red;
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
  
  @include mobile {
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