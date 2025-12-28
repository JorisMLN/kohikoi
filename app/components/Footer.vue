<script setup>
</script>

<template>
  <footer>
      <NuxtLink class="profil" :to="`/profil`">
        <Icon class="profil__icon" size="50" name="healthicons:ui-user-profile" />
      </NuxtLink>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 20vh;
  background: url("../assets/images/footer2short.jpg");
  background-size: cover;
  background-position: center;
    
    .profil{
      color: white;

      &__icon {
        margin-bottom: 5px;
        transition: color 0.9s ease;
      }

      &:hover {
        color: $color-gold-light;
      }

      &.router-link-active {
        color: $color-gold;
        font-weight: 600;
      }
    }

}
</style>