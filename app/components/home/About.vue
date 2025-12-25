<template>
  <article>
    <h2>On est qui ?</h2>
    <p> Je suis solo pour l'instant</p>
  </article>
</template>

<style scoped lang="scss">
article {
  @include flex-center;
  flex-direction: column;
  background: $color-background;
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
- Titre : "Qu'est-ce que Kohikoi ?"
- Texte : Présentation de la plateforme
- Pourquoi ce nom (koi = amour + koi = carpe)
```