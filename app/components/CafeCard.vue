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
    <!-- Main photo section (70%) -->
    <div class="cafe-card__main">
      <!-- Background photo -->
      <div class="cafe-card__bg"></div>
      
      <!-- Overlay gradient -->
      <div class="cafe-card__overlay"></div>
      
      <!-- Floating badges -->
      <div class="cafe-card__badges">
        <div class="badge badge--rating">
          <img class="koiIcon" src="./../assets/images/icons/normal-koi2.png" alt="super Koi" />
          <span>40</span>
        </div>

        <div class="badge badge--rating">
           <img class="superKoiIcon" src="./../assets/images/icons/super-koi.png" alt="super Koi" />
          <span>7</span>
        </div>
      </div>
      
      <!-- Content overlay (bottom) -->
      <div class="cafe-card__content">
        <div class="cafe-card__header">
          <h3 class="cafe-card__title">{{ cafe.name_ja }}</h3>
          <p class="cafe-card__subtitle">{{ cafe.name }}</p>
        </div>
        
        <p class="cafe-card__description">
          {{ cafe.description }}
        </p>
        
        <div class="cafe-card__footer">
          <div class="cafe-card__location">
            <Icon name="ph:map-pin-fill" size="14" />
            {{ cafe.city }}
          </div>
          
          <div class="prizeAndDays">
            <div v-if="cafe.price_range" class="price">
              {{ '¥'.repeat(cafe.price_range) }}
            </div>
            <OpeningDays v-if="cafe.opening_days" :days="cafe.opening_days" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.cafe-card {
  display: flex;
  height: 300px;
  width: 48%;
  margin: 10px;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  // === MAIN PHOTO SECTION (70%) ===
  &__main {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  &__bg {
    position: absolute;
    inset: 0;
    background: url("../assets/images/cafe/little-nap-in-yoyogi.jpg");
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
    z-index: 1;
  }
  
  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,        // ← Plus foncé en haut
      rgba(0, 0, 0, 0.5) 40%,       // ← Transition plus marquée
      rgba(0, 0, 0, 0.95) 100%      // ← Presque noir en bas
    );
    z-index: 2;
    transition: opacity 0.4s ease;
  }
  
  &__badges {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    display: flex;
    gap: 0.75rem;
    z-index: 3;
    
    .badge {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.5rem 0.85rem;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.9rem;
      backdrop-filter: blur(12px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
      }
      
      &--rating {
        background: rgba(255, 255, 255, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: white;

        .superKoiIcon{
          width: 28px;
          height: 28px;
        }

        .koiIcon{
          color: gold;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  
  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    z-index: 3;

    background: rgba(0, 0, 0, 0.01);
    backdrop-filter: blur(1px);

    transform: translateY(0);
    transition: transform 0.4s ease;
  }
  
  &__header {
    margin-bottom: 0.75rem;
  }
  
  &__title {
    font-family: $font-zen;
    //font-family: $font-yujiboku;
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: white;
    text-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.8),
      0 4px 8px rgba(0, 0, 0, 0.6),
      0 1px 2px rgba(0, 0, 0, 1);
  }
  
  &__subtitle {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
  
  &__description {
    font-size: 0.925rem;
    line-height: 1.5;
    margin: 0 0 1rem 0;
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.7rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    .prizeAndDays{
      display: flex;
      flex-direction: row;

      .price {
        margin-right: 20px;
        padding-right: 20px;
        border-right: 1px solid grey;
        margin-top: 0.5rem;
        color: $color-gold-light
      }
    }
  }
  
  &__location {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
  }
  
  // === PHOTO GRID (30%) ===
  &__grid {
    width: 30%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2px;
    background: #000;
  }
  
  .grid-photo {
    background-size: cover;
    background-position: center;
    transition: all 0.4s ease;
    cursor: pointer;
    
    &--1 {
      background-image: url("../assets/images/cafe/lncs1.jpg");
    }
    
    &--2 {
      background-image: url("../assets/images/cafe/caption.jpg");
    }
    
    &--3 {
      background-image: url("../assets/images/cafe/little-nap-in-yoyogi.jpg");
      filter: brightness(0.8);
    }
    
    &--4 {
      background-image: url("../assets/images/cafe/lncs1.jpg");
      filter: brightness(0.9);
    }
    
    &:hover {
      transform: scale(1.05);
      z-index: 1;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
  }
  
  // === HOVER EFFECT ===
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
    
    .cafe-card__bg {
      transform: scale(1.01);
    }
    
    .cafe-card__overlay {
      opacity: 0.5;
    }
    
    .cafe-card__content {
      transform: translateY(-2px);
    }
  }
  
  // === RESPONSIVE ===
  @include mobile {
    flex-direction: column;
    height: auto;
    
    &__main {
      width: 100%;
      height: 300px;
    }
    
    &__grid {
      width: 100%;
      height: 120px;
    }
    
    &__content {
      padding: 1.5rem;
    }
    
    &__title {
      font-size: 1.5rem;
    }
  }
}
</style>

<!-- <template>
  <NuxtLink :to="`/cafes/${cafe.slug}`" class="cafe-card">
    <div class="info">
      <div class="info__header">
        <div class="names">
          <h3 class="name-ja">{{ cafe.name_ja }}</h3>
          <p class="name-en">{{ cafe.name }}</p>
        </div>
        
        <div class="rating-badge">
          <Icon class="rating-badge__icon" size="24" name="solar:star-fall-2-bold" />
          <span class="rating-badge__count">4</span>
        </div>
      </div>
      
      <p class="info__description">
        {{ cafe.description }}
      </p>
      
      <div class="info__footer">
        <div class="meta-group">
          <span class="location">
            <Icon name="ph:map-pin-fill" size="16" />
            {{ cafe.city }}
          </span>
          
          <span v-if="cafe.price_range" class="price">
            {{ '¥'.repeat(cafe.price_range) }}
          </span>
        </div>
        
        <OpeningDays v-if="cafe.opening_days" :days="cafe.opening_days" />
      </div>
    </div>
    
    <div class="gallery">
      <div class="gallery__main"></div>
      <div class="gallery__side">
        <div class="gallery__thumb"></div>
        <div class="gallery__thumb"></div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.cafe-card {
  display: flex;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  height: 240px;
  width: 100%;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  // === INFO SECTION (LEFT) ===
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45%;
    padding: 1.75rem;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
      
      .names {
        flex: 1;
        
        .name-ja {
          font-family: $font-yujiboku;
          font-size: 1.5rem;
          font-weight: 700;
          color: $color-navy;
          margin: 0 0 0.25rem 0;
          line-height: 1.2;
        }
        
        .name-en {
          font-size: 0.95rem;
          color: $color-text-light;
          margin: 0;
          font-weight: 500;
        }
      }
      
      .rating-badge {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: linear-gradient(135deg, $color-gold-light, $color-gold);
        color: white;
        padding: 0.5rem 0.75rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);
        flex-shrink: 0;
        
        &__icon {
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
        }
        
        &__count {
          font-size: 1.1rem;
          font-weight: 700;
        }
      }
    }
    
    &__description {
      flex: 1;
      font-size: 0.925rem;
      line-height: 1.6;
      color: $color-text;
      margin: 0;
      
      // Truncate to 3 lines
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
      
      .meta-group {
        display: flex;
        align-items: center;
        gap: 1rem;
        
        .location {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: $color-text-light;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .price {
          color: $color-gold-dark;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.05em;
          background: rgba(212, 175, 55, 0.12);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
        }
      }
    }
  }

  // === GALLERY SECTION (RIGHT) ===
  .gallery {
    display: flex;
    width: 55%;
    gap: 4px;
    
    &__main {
      flex: 1;
      background: url("../assets/images/cafe/little-nap-in-yoyogi.jpg");
      background-size: cover;
      background-position: center;
      transition: transform 0.4s ease;
    }
    
    &__side {
      display: flex;
      flex-direction: column;
      width: 35%;
      gap: 4px;
    }
    
    &__thumb {
      flex: 1;
      background-size: cover;
      background-position: center;
      transition: transform 0.4s ease;
      
      &:first-child {
        background-image: url("../assets/images/cafe/lncs1.jpg");
      }
      
      &:last-child {
        background-image: url("../assets/images/cafe/caption.jpg");
      }
    }
  }
  
  // === HOVER EFFECT ===
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    
    .gallery__main,
    .gallery__thumb {
      transform: scale(1.05);
    }
  }
  
  // === RESPONSIVE ===
  @include mobile {
    flex-direction: column;
    height: auto;
    
    .info {
      width: 100%;
      padding: 1.5rem;
    }
    
    .gallery {
      width: 100%;
      height: 200px;
      
      &__side {
        width: 30%;
      }
    }
  }
}
</style> -->

<!-- <template>
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
      border: 1px solid black;
    }

    &__footer{
      display: flex;
      justify-content: space-between;
      flex-direction: row;

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
</style> -->
