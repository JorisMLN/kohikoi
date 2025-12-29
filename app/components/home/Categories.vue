<script setup>
const { categories, fetchCategories } = useCategories()

// Charger les catégories si pas encore fait
if (categories.value.length === 0) {
  await fetchCategories()
}
</script>

<template>
  <nav>
    <ul>
      <NuxtLink 
        v-for="cat in categories" 
        :key="cat.slug"
        :to="`/categories/${cat.slug}`"
        class="category-card"
      >
        <p class="name-ja">{{ cat.name_ja }}</p>
      </NuxtLink>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav{
  @include flex-center;
  flex-direction: column;
  background: white;
  height: 40vh;
  width: 100%;
  ul{
    display: flex;
    justify-content: center;
    background-color: white;
    height: 100%;
    width: 70%;
    .category-card{
      background-color: white;
      writing-mode: vertical-rl;
      text-orientation: upright;
      margin: 2px;
      height: 50%;
      width: 8%;
      text-decoration: none;
      color: $color-blue-dark;
      transition: color 0.9s ease;
      &:hover {
        color: $color-gold-light;
      }
      &.router-link-active {
        color: $color-gold;
        font-weight: 600;
      }
      .name-ja{
        font-family: $font-zen; 
        font-size: 20px;
        font-feature-settings: "vert";
        -webkit-text-orientation: upright;
        text-orientation: upright;
      }
    }
  }
}

.cta-button {
  padding: 1rem 2rem;
  background: $color-background;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  margin: 5px;
  
  &:hover {
    background: $color-text-light;
  }
}
</style>