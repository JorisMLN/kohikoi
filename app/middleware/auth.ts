export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth()
  
  // Si pas authentifié, redirect vers login
  if (!isAuthenticated.value) {
    console.log('🚫 [MIDDLEWARE] Accès refusé, redirection vers /login')
    return navigateTo('/login')
  }
  
  console.log('✅ [MIDDLEWARE] Accès autorisé')
})