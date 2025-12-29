<script setup lang="ts">
const { locale, t } = useLanguage()
const { login, logout, user, isAuthenticated } = useAuth()

const email = ref('kohikoi.cafe@gmail.com')
const password = ref('admin123')
const error = ref('')

async function handleLogin() {
  const result = await login(email.value, password.value)
  if (result.success) {
    navigateTo('/profil')
  }
  if (!result.success) {
    error.value = result.error || 'Erreur'
  }
}
</script>

<template>
  <div class="auth-page">
    <h1 class="auth-page__title">Login !</h1>
    
    <div v-if="!isAuthenticated" class="auth-form">
      <input 
        v-model="email" 
        placeholder="Email" 
        class="auth-form__input"
      >
      <input 
        v-model="password" 
        type="password" 
        placeholder="Password" 
        class="auth-form__input"
      >
      <button @click="handleLogin" class="auth-form__button">
        Login
      </button>
      <p v-if="error" class="auth-form__error">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-page {
  padding: 2rem;
  background: $color-background;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &__title {
    font-size: 2rem;
    color: $color-navy;
    margin-bottom: 2rem;
  }
}

.auth-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  
  &__input {
    display: block;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 2px solid $color-gold;
    border-radius: 8px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: $color-gold-dark;
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    }
  }
  
  &__button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: $color-gold;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 1rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: $color-gold-dark;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
  
  &__error {
    color: red;
    margin-top: 1rem;
    font-weight: 600;
  }
}
</style>