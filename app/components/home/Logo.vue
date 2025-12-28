<template>
  <div class="container">
    <NuxtLink to="/" class="logoNameBloc">珈琲恋</NuxtLink>
    <div class="logoNameKata">コーヒーこい</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  @include flex-center;
  flex-direction: column;
  background: white;
  height: 40vh;
  width: 100%;

  .logoNameBloc{
    font-weight: 600;
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

    &.router-link-active {
      color: $color-gold;
      font-weight: 600;
    }
  }

  .logoNameKata{
    font-size: 10px;
    color: $color-blue-dark;
  }
}
</style>