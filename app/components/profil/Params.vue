<script setup>
  const { locale } = useLanguage()
  const locales = [
    { code: 'ja', name: 'JA' },
    { code: 'fr', name: 'FR' },
    { code: 'en', name: 'EN' }
  ]
</script>

<template>
  <div class="language-switcher">
    <button 
      v-for="loc in locales" 
      :key="loc.code"
      @click="locale = loc.code"
      :class="{ active: locale === loc.code }"
    >
      {{ loc.name }}
    </button>
  </div>
</template>

<style scoped lang="scss">

  .language-switcher {
    display: flex;
    gap: 0.5rem;
    background: $color-background;
    
    button {
      padding: 0.5rem 1rem;
      background: white;
      border: 2px solid $color-gold;
      border-radius: 4px;
      cursor: pointer;
      color: $color-navy;
      font-weight: 500;
      transition: all 0.3s ease;
      
      &.active {
        background: $color-gold;
        color: white;
      }
      
      &:hover {
        background: $color-gold-light;
      }
    }
  }

</style>


twemoji:flag-japan
twemoji:flag-france
twemoji:flag-england