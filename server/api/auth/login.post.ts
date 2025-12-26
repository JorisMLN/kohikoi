import { SignJWT } from 'jose'
import { findUserByEmail } from '../../utils/mockUsers'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  // 1. Récupérer email et password du body
  const body = await readBody(event)
  const { email, password } = body
  
  // 2. Valider les données
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email et mot de passe requis'
    })
  }
  
  // 3. Chercher l'utilisateur
  const user = findUserByEmail(email)
  
  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Identifiants invalides'
    })
  }
  
  // 4. Vérifier le password (comparaison simple pour le mock)
  if (user.password !== password) {
    throw createError({
      statusCode: 401,
      message: 'Identifiants invalides'
    })
  }
  
  // 5. Générer le JWT token
  const secret = new TextEncoder().encode(config.jwtSecret)
  
  const token = await new SignJWT({
    userId: user.id,
    email: user.email,
    role: user.role
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')  // Expire dans 7 jours
    .sign(secret)
  
  // 6. Renvoyer le token et les infos user (SANS le password)
  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    }
  }
})