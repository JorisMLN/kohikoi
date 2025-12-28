<script setup>
const { checkAuth } = useAuth()

// Vérifie l'auth au démarrage
onMounted(async () => {
  await checkAuth()
})
</script>

<template>
  <div class="mainContainer"> 
    <div class="leftContainer">
        <HomeLogo/>
        <HomeCategories />
        <Footer />
    </div>
    <div class="rightContainer">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .mainContainer{
    @include flex-between;
    flex-direction: row;
    height: 100vh;
  
    .leftContainer {
      height: 100vh;
      width: 25vw;
      overflow-y: auto;    
      overflow-x: hidden;
      border-right: 3px solid $color-gold;
    }

    .rightContainer{
      background: $color-background;
      height: 100vh;
      width: 75vw;
       overflow-y: auto;    
      overflow-x: hidden;
    }
  }
</style>