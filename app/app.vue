<template>
  <div class="mainContainer"> 
    <div class="leftContainer">
        <HomeLogo/>
        <HomeCategories />
        <HomeAbout />
        <HomeHowToUse />
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
    }

    .rightContainer{
      background-color: beige;
      height: 100vh;
      width: 75vw;
       overflow-y: auto;    
      overflow-x: hidden;
    }
  }
</style>