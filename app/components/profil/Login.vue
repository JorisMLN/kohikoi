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
  <div style="padding: 2rem;">
    <h1>Test Auth Composable</h1>
    
    <div v-if="!isAuthenticated">
      <input v-model="email" placeholder="Email" style="display: block; margin: 0.5rem 0; padding: 0.5rem;">
      <input v-model="password" type="password" placeholder="Password" style="display: block; margin: 0.5rem 0; padding: 0.5rem;">
      <button @click="handleLogin" style="padding: 0.5rem 1rem; cursor: pointer;">Login</button>
      <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
    
    <div v-else>
      <h2>✅ Connecté !</h2>
      <pre>{{ user }}</pre>
      <button @click="logout" style="padding: 0.5rem 1rem; cursor: pointer;">Logout</button>
    </div>
  </div>

</template>

<style scoped lang="scss">
.container {
  background-color: beige;
}
</style>