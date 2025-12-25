<script setup>
const { locale } = useLanguage()

const locales = [
  { code: 'fr', name: 'FR' },
  { code: 'en', name: 'EN' },
  { code: 'ja', name: 'JA' }
]
</script>

<template>
  <footer>
    <div>
      <Icon class="iconFooter" size="50" name="healthicons:ui-user-profile" />
      <div class="language-switcher">
      <button 
        v-for="loc in locales" 
        :key="loc.code"
        @click="locale = loc.code"
      >
        {{ loc.name }}
      </button>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  height: 20vh;
  background: url("../assets/images/footer2short.jpg");
  background-size: cover;
  background-position: center;
  
  div {
    @include flex-center;
    height: 30%;
    width: 100%;
    color: white;
    
    .iconFooter {
      margin-bottom: 20px;
    }
    
    .language-switcher {
      display: flex;
      gap: 0.5rem;
      
      button {
        padding: 0.5rem 1rem;
        background: white;
        border: 2px solid $color-gold;
        border-radius: 4px;
        cursor: pointer;
        color: $color-navy;
        font-weight: 500;
        
        &.active {
          background: $color-gold;
          color: white;
        }
        
        &:hover {
          background: $color-gold-light;
        }
      }
    }
  }
}
</style>