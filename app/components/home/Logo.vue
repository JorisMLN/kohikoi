<template>
  <container class="container">
    <NuxtLink to="/" class="logoNameBloc">珈琲恋</NuxtLink>
    <div class="logoNameKata">コーヒーこい</div>
  </container>
</template>

<style scoped lang="scss">
.container {
  @include flex-center;
  flex-direction: column;
  background: white;
  height: 40vh;
  width: 100%;

  .logoNameBloc{
    font-size: 68px;
    height: 210px;
    width: 70px;
    color: $color-blue-dark;
    text-decoration: none;
    transition: color 0.9s ease;
    font-family: $font-yujiboku;
    line-height: 1em;

    &:hover {
      color: $color-gold-light;
    }
  }

  .logoNameKata{
    font-size: 12px;
    color: $color-text-light;
  }

  .fake-button{
    margin-top: 20px;
  }
}
</style>