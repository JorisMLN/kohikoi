<script setup lang="ts">
import Params from '~/components/profil/Params.vue';

definePageMeta({
  middleware: 'auth'  // ← Active la protection
})

const { user, logout } = useAuth()
</script>

<template>
  <div style="padding: 2rem;">
    <h1>Mon Profil</h1>
    
    <div v-if="user">
      <p><strong>Nom :</strong> {{ user.name }}</p>
      <p><strong>Email :</strong> {{ user.email }}</p>
      <p><strong>Rôle :</strong> {{ user.role }}</p>
      
      <button @click="logout" style="padding: 0.5rem 1rem; margin-top: 1rem; cursor: pointer;">
        Déconnexion
      </button>
    </div>
  </div>
  <Params/>
</template>