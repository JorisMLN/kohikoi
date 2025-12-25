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
      <div class="info__header">
        <div class="names">
          <h3 class="cafe-card__name">{{ cafe.name_ja }}</h3>
          <p class="cafe-card__name-ja">{{ cafe.name }}</p>
        </div>
        <div class="starsBloc">
          <div class="superStars">
            <div class="superStars__count">4</div>
            <Icon class="superStars__icons" size="30" name="solar:star-fall-2-bold" />
          </div>
          <div class="stars">
            <div class="stars__count">45</div>
            <Icon class="stars__icons" size="20" name="solar:star-fall-bold" />
          </div>
        </div>
      </div>
      
      <p class="info__description">
        {{ cafe.description }}
      </p>
      
      <div class="info__footer">
        <span class="location">
          📍 {{ cafe.city }}
        </span>
        <span v-if="cafe.price_range" class="price">
          {{ '¥'.repeat(cafe.price_range) }}
        </span>
        <span class="events">
          <OpeningDays v-if="cafe.opening_days" :days="cafe.opening_days" />
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
  width: 100%;
  margin: 5px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  .info{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    width: 40%;
    background-color: $color-background;

    &__header{
      @include flex-center;
      flex-direction: row;
      justify-content: space-between;
      border: 1px solid red;

      .starsBloc{
        @include flex-center;
        flex-direction: column;

        .superStars{
          @include flex-center;
          flex-direction: row;

          &__count{
            font-size: $font-size-large;
          }

          &__icons{
            color: $color-gold-light;
          }
        }

        .stars{
          @include flex-center;
          flex-direction: row;

          &__count{
            font-size: $font-size-small;
          }

          &__icons{
            color: $color-gold;
          }
        }
      }
    }

    &__description{
      border: 1px solid green;
    }

    &__footer{
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      border: 1px solid blue;

      .price {
        color: $color-gold;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 0.05em;
        
        // Style alternatif avec fond
        background: rgba(212, 175, 55, 0.1);
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
      }

      .events{
        &__icons{
          margin-bottom: -2px;
        }
      }
    }


  }

  .photo{
    height: 100%;
    width: 60%;
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
    transform: translateY(-3px);
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