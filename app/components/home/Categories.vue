<template>
  <article>
    <h2>Alors les catégories...</h2>
    <Text> En vrai, il y en a pleins</Text>
  </article>
</template>

<style scoped lang="scss">
article {
  @include flex-center;
  flex-direction: column;
  background: $color-blue-bright;
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
- Titre : "7 types de cafés japonais"
- Grid de 7 cartes catégories :
  → Kissaten
  → Junseikissaten
  → Third Wave
  → Coffee Stand
  → Ochaya
  → Book Cafe
  → Gallery Cafe
- Chaque carte cliquable → /categories/{slug}
```