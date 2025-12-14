<template>
  <Header />
  <div class="coffeeFilter">
    <h1>Liste des cafés</h1>
    <NuxtLink to="/" class="cta-button">Accueil</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
  .coffeeFilter{
    @include flex-center;
    flex-direction: column;
    background-color: $color-text-light;
    height: 93vh;
  
    .cta-button {
      padding: 1rem 2rem;
      background: $color-navy;
      color: $color-background;
      text-decoration: none;
      border-radius: 8px;
      
      &:hover {
        background: $color-text;
      }
    }
  }
</style>