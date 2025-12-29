<script setup>
const { homeContent, loading, error } = useHome()
</script>

<template>
  <article>
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">{{ error }}</div>
    <template v-else-if="homeContent">
      <h2>Comment utiliser ???</h2>
      <p v-for="(paragraph, index) in homeContent.howToUse" :key="index">
        {{ paragraph }}
      </p>
    </template>
    <template v-else>
      <h2>Comment utiliser ???</h2>
      <p>Je sais mais c'est pas dev</p>
    </template>
  </article>
</template>

<style scoped lang="scss">
article {
  @include flex-center;
  flex-direction: column;
  background: $color-background;
  min-height: 40vh;
  padding: 2rem;
  
  h2 {
    color: black;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: $color-text;
    max-width: 800px;
    line-height: 1.8;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  @include mobile {    
    padding: 1rem;
  }
}
</style>