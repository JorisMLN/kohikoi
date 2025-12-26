// app/composables/useAuth.ts

interface User {
  id: number
  email: string
  name: string
  role: 'user' | 'admin'
}

export const useAuth = () => {
  const user = useState<User | null>('user', () => null)
  const token = useState<string | null>('token', () => null)
  
  const isAuthenticated = computed(() => !!user.value)
  
    // 1. Appel API login
    // 2. Stocke token dans localStorage
    // 3. Stocke user dans state
    // 4. Return success/error
  async function login(email: string, password: string) {
    try {
      const data = await $fetch<{ token: string; user: User }>('/api/auth/login', {
        method: 'POST',
        body: { email, password }
      })
      console.log('✅ [AUTH] Connexion réussie', { user: data.user })

      // Stocke le token
      token.value = data.token
      if (import.meta.client) {
        localStorage.setItem('kohikoi_token', data.token)
      }
      
      // Stocke le user
      user.value = data.user
      
      return { success: true }
    } catch (error: any) {
      console.error('❌ [AUTH] Échec de connexion', error.data?.message)
      return { 
        success: false, 
        error: error.data?.message || 'Erreur de connexion' 
      }
    }
  }
  
    // 1. Supprime token de localStorage
    // 2. Reset user à null
    // 3. Reset token à null
    // 4. Redirect vers /
  function logout() {
    // Supprime le token
    token.value = null
    if (import.meta.client) {
      localStorage.removeItem('kohikoi_token')
    }
    
    // Reset le user
    user.value = null
    console.log('✅ [AUTH] Déconnexion terminée')
    
    // Redirect vers login
    navigateTo('/login')
  }
  
    // 1. Lit le token depuis localStorage
    // 2. Si existe → appelle getUser()
    // 3. Si pas de token → return
  async function getUser() {
    if (!token.value) {
      console.log('⚠️ [AUTH] Pas de token disponible')
      return null
    }
    
    try {
      const data = await $fetch<{ user: User }>('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      })
      
      user.value = data.user
      console.log('✅ [AUTH] User récupéré', { user: data.user })
      return data.user
    } catch (error) {
      console.error('❌ [AUTH] Token invalide ou expiré')
      logout()
      return null
    }
  }
  
    // 1. Appelle /api/auth/me avec le token
    // 2. Stocke user dans state
    // 3. Return user ou null
  async function checkAuth() {
    if (import.meta.client) {
      const savedToken = localStorage.getItem('kohikoi_token')
      if (savedToken) {
        console.log('💾 [AUTH] Token trouvé dans localStorage')
        token.value = savedToken
        await getUser()
      }
    }
  }
  
  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    checkAuth,
    getUser
  }
}