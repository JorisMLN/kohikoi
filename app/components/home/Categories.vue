<template>
  <nav>
    <ul>
      <li>cat1</li>
      <li>cat1</li>
      <li>cat1</li>
      <li>cat1</li>
      <li>cat1</li>
      <li>cat1</li>
      <li>cat1</li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">

nav{
  @include flex-center;
  flex-direction: column;
  background: $color-background;
  height: 40vh;
  width: 100%;

  ul{
    @include flex-center;
    flex-direction: row;
    background-color: beige;
    height: 100%;
    width: 70%;
    li{
      background-color: burlywood;
      margin: 2px;
      height: 90%;
      width: 10%;
    }
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