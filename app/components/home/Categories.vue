<script setup>
  import { useCategoriesStore } from '~/stores/categories'

  const categoriesStore = useCategoriesStore()
  const categories = computed(() => categoriesStore.allCategories)
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
        <span class="icon">{{ cat.icon }}</span>
        <!-- <h3>{{ cat.name }}</h3>
        <p class="name-ja">{{ cat.name_ja }}</p>
        <p class="description">{{ cat.description }}</p> -->
      </NuxtLink>
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
    .category-card{
      background-color: burlywood;
      margin: 2px;
      height: 90%;
      width: 10%;
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