export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  return {
    hasSecret: !!config.jwtSecret,
    secret: config.jwtSecret?.substring(0, 10) + '...'  // Montre juste le début
  }
})