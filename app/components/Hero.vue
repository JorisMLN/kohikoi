<script setup>
  import Koi from './Koi.vue';

  const { locale, t } = useLanguage()

  function scrollToAbout() {
  const aboutSection = document.querySelector('#about-section')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ t('title') }}</h1>
    <h2>{{ t('tagline') }}</h2>

    <img class="superKoiIcon" src="./../assets/images/icons/super-koi.png" alt="super Koi" />

     <button @click="scrollToAbout" class="btn-scroll">
      <span>Découvrir</span>
      <Icon name="ph:arrow-down" size="24" />
    </button>

  </div>
</template>

<style scoped lang="scss">
.container {
  @include flex-center;
  flex-direction: column;
  background: $color-background;
  height: 100vh;

  .superKoiIcon{
    height: 150px;
    width: 150px;
  }

  h1{
    color: $color-navy-dark
  }

  h2{
    color: $color-text-light
  }

  .btn-scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    border: 2px solid $color-gold;
    border-radius: 16px;
    color: $color-navy;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 2rem;
    
  &:hover {
    background: $color-gold;
    color: white;
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
  }
  
  &:active {
    transform: translateY(-2px);
  }
}
  
  @include mobile {    
    padding: 1rem;
  }
}
</style>

```
Contenu :
- Titre : 珈琲恋 Kohikoi
- Sous-titre : "Découvrez les meilleurs cafés du Japon"
- Bouton CTA : "Explorer les cafés" → /cafes
- Background : Dégradé navy
```