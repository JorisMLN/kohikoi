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
        <!-- <span class="icon">{{ cat.icon }}</span> -->
        <!-- <h3>{{ cat.name }}</h3> -->
        <p class="name-ja">{{ cat.name_ja}}</p>
        <!-- <p class="description">{{ cat.description }}</p>  -->
      </NuxtLink>
    </ul>
  </nav>
</template>

<style scoped lang="scss">

nav{
  @include flex-center;
  flex-direction: column;
  background: white;
  height: 30vh;
  width: 100%;

  ul{
    @include flex-center;
    flex-direction: row;
    background-color: white;
    height: 100%;
    width: 70%;
    .category-card{
      background-color: white;
      writing-mode: vertical-rl;
      text-orientation: upright;
      margin: 2px;
      height: 90%;
      width: 8%;
      text-decoration: none;
      color: $color-blue-dark;
      transition: color 0.9s ease;

      &:hover {
        color: $color-gold-light;
      }

      .name-ja{
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