<script setup>
import Koi from './Koi.vue';

  const { locale, t } = useLanguage()
</script>

<template>
  <div class="container">
    <h1>{{ t('title') }}</h1>
    <h2>{{ t('tagline') }}</h2>

    <img class="superKoiIcon" src="./../assets/images/icons/super-koi.png" alt="super Koi" />

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