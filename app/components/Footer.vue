<template>
  <footer>
    <text>Et ca c'est un footer, reseaux et toussa toussa</text>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @include flex-center;
  flex-direction: row;
  background: white;
  height: 20vh;

  text{
    color: $color-navy-dark;
  }
  
  @include mobile {    
    padding: 1rem;
  }
}
</style>