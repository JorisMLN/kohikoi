<template>
  <header class="header">
    <div class="logo">コーヒー / 珈琲恋 Kohikoi</div>
    <nav>...</nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  @include flex-between;
  background: $color-background;   
  padding: 5px;
  height: 7vh;
  
  .logo {
    color: black;
    margin-left: 50px; 
  }
  
  @include mobile {    
    padding: 1rem;
  }
}
</style>