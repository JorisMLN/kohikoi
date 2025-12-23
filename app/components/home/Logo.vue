<template>
  <container class="container">
    <NuxtLink to="/" class="logoName">珈</NuxtLink>
    <NuxtLink to="/" class="logoName">琲</NuxtLink>
    <NuxtLink to="/" class="logoName">恋</NuxtLink>
    <!-- <div class="logoNameKata">コーヒー恋</div> -->
  </container>
</template>

<style scoped lang="scss">
.container {
  @include flex-center;
  flex-direction: column;
  background: white;
  height: 40vh;
  // writing-mode: vertical-rl;
  // text-orientation: upright;
  width: 100%;

  .logoName{
    font-size: 60px;
    height: 65px;
    width: 60px;
    color: $color-blue-dark;
    text-decoration: none;
    transition: color 0.9s ease;

    &:hover {
      color: $color-gold-light;
    }
  }

  // .logoNameKata{
  //   font-size: 50px;
  //   height: 400px;
  //   width: 70px;
  //   margin-top: 140px;
  //   color: $color-blue-dark;
  //   font-feature-settings: "vert";
  //   -webkit-text-orientation: upright;
  //   text-orientation: upright;
  // }

  .fake-button{
    margin-top: 20px;
  }
}
</style>