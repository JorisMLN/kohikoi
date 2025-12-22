<script setup>
defineProps({
  cafe: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <NuxtLink :to="`/cafes/${cafe.slug}`" class="cafe-card">
    <div class="cafe-card__image-wrapper">
      <img 
        :src="cafe.photo_url || '/images/placeholder-cafe.jpg'" 
        :alt="cafe.name"
        class="cafe-card__image"
      />
      <div class="cafe-card__category-badge">
        {{ cafe.category }}
      </div>
    </div>
    
    <div class="cafe-card__content">
      <div class="cafe-card__header">
        <h3 class="cafe-card__name">{{ cafe.name_ja }}</h3>
        <p class="cafe-card__name-ja">{{ cafe.name }}</p>
      </div>
      
      <p class="cafe-card__description">
        {{ cafe.description }}
      </p>
      
      <div class="cafe-card__footer">
        <span class="cafe-card__location">
          📍 {{ cafe.city }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.cafe-card {
  display: block;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 80%;
  
  @include flex-column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    
    .cafe-card__image {
      transform: scale(1.05);
    }
  }
  
  // === IMAGE SECTION ===
  &__image-wrapper {
    position: relative;
    width: 100%;
    height: 150px;
    overflow: hidden;
    background: $color-navy-dark;
  }
  
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  &__category-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 0.5rem 1rem;
    background: rgba(212, 175, 55, 0.95);
    color: $color-navy;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    backdrop-filter: blur(4px);
  }
  
  // === CONTENT SECTION ===
  &__content {
    padding: 1.5rem;
    @include flex-column;
    gap: 1rem;
    flex: 1;
  }
  
  &__header {
    margin-bottom: 0.5rem;
  }
  
  &__name {
    font-size: 1.25rem;
    font-weight: 700;
    color: $color-navy;
    margin: 0 0 0.25rem 0;
    line-height: 1.3;
  }
  
  &__name-ja {
    font-size: 0.9rem;
    color: $color-text-light;
    margin: 0;
    font-weight: 400;
  }
  
  &__description {
    font-size: 0.9rem;
    color: $color-text;
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  &__footer {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  &__location {
    font-size: 0.85rem;
    color: $color-text-light;
    font-weight: 500;
  }
  
  // === RESPONSIVE ===
  @include mobile {
    &__image-wrapper {
      height: 180px;
    }
    
    &__content {
      padding: 1.25rem;
    }
    
    &__name {
      font-size: 1.1rem;
    }
  }
}
</style>
```
Props :
- cafe (object)

Affichage :
- Photo du café
- Nom (romaji + japonais)
- Badge catégorie
- Ville
- Cliquable → /cafes/{slug}