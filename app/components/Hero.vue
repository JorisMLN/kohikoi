<script setup>
  const { locale, t } = useLanguage()
</script>

<template>
  <div class="container">
    <h1>{{ t('title') }}</h1>
    <h2>{{ t('tagline') }}</h2>
    <div class="buttonStack">
      <NuxtLink to="/" class="cta-button">Cafés</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  @include flex-center;
  flex-direction: column;
  background: $color-background;
  height: 100vh;

  h1{
    color: $color-navy-dark
  }

  h2{
    color: $color-text-light
  }

  .buttonStack{
    @include flex-center;
    flex-direction: row;

    button{
      height: 6vh;
      width: 10vw;
      margin: 10px;
    }
  }

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