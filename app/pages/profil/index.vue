<script setup lang="ts">
import Params from '~/components/profil/Params.vue'

definePageMeta({
  middleware: 'auth'
})

const { user, logout } = useAuth()
</script>

<template>
  <div class="profile-page">
    <div class="profile-container">
      <h1 class="profile-title">Mon Profil</h1>
      
      <div v-if="user" class="profile-info">
        <div class="profile-info__item">
          <strong class="profile-info__label">Nom :</strong>
          <span class="profile-info__value">{{ user.name }}</span>
        </div>
        
        <div class="profile-info__item">
          <strong class="profile-info__label">Email :</strong>
          <span class="profile-info__value">{{ user.email }}</span>
        </div>
        
        <div class="profile-info__item">
          <strong class="profile-info__label">Rôle :</strong>
          <span class="profile-info__value">{{ user.role }}</span>
        </div>
        
        <button @click="logout" class="btn-logout">
          Déconnexion
        </button>
      </div>
    </div>
    
    <Params />
  </div>
</template>

<style scoped lang="scss">
.profile-page {
  background: $color-background;
  min-height: 100vh;
  padding: 2rem;
}

.profile-container {
  max-width: 800px;
  margin: 0 auto;
}

.profile-title {
  font-size: 2rem;
  font-weight: 700;
  color: $color-navy;
  margin-bottom: 2rem;
}

.profile-info {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  &__item {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  
  &__label {
    color: $color-navy;
    min-width: 80px;
  }
  
  &__value {
    color: $color-text;
  }
}

.btn-logout {
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: $color-gold;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
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
</style>
```

---

## **🎨 Structure des classes :**
```
.profile-page              → Container principal
  .profile-container       → Container centré avec max-width
    .profile-title         → Titre "Mon Profil"
    .profile-info          → Card blanche avec infos
      .profile-info__item  → Ligne d'info (Nom, Email, Rôle)
        .profile-info__label   → Label (strong)
        .profile-info__value   → Valeur
  .btn-logout              → Bouton déconnexion