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
    <div class="info">
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
    <div class="photo">
      <div class="photo1 photoBase"></div>
      <div class="photo2 photoBase"></div>
      <div class="photo3 photoBase"></div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.cafe-card {
  @include flex-center;
  flex-direction: row;
  background: white;
  border-radius: 5px;
  text-decoration: none;
  color: inherit;
  height: 200px;
  width: 99%;
  margin: 5px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  .info{
    height: 100%;
    width: 30%;
  }

  .photo{
    height: 100%;
    width: 70%;
    @include flex-center;
    flex-direction: row;

    .photoBase{

      border: 1px solid white;
    }

    .photo1{
      height: 100%;
      width: 50%;
      background: url("../assets/images/cafe/little-nap-in-yoyogi.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .photo2{
      height: 100%;
      width: 25%;
      background: url("../assets/images/cafe/lncs1.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .photo3{
      height: 100%;
      width: 25%;
      background: url("../assets/images/cafe/caption.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  
  &:hover {
    transform: translateX(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    
    .cafe-card__image {
      transform: scale(1.05);
    }
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