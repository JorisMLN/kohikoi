<template>
  <article>
    <h2>Comment utiliser ???</h2>
    <Text> Je sais mais c'est pas dev</Text>
  </article>
</template>

<style scoped lang="scss">
article {
  @include flex-center;
  flex-direction: column;
  background: $color-blue;
  height: 40vh;
  
  h2 {
    color: black;
  }
  
  text{
    color: aliceblue;
  }

  @include mobile {    
    padding: 1rem;
  }
}
</style>

```
Contenu :
- Titre : "Comment utiliser Kohikoi ?"
- 3 étapes :
  1. Parcourir les catégories
  2. Découvrir les cafés
  3. Visiter et partager
```