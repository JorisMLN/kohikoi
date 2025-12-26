import { jwtVerify } from 'jose'
import { findUserById } from '../../utils/mockUsers'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  // 1. Récupérer le token depuis le header Authorization
  const authHeader = getHeader(event, 'authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      message: 'Token manquant'
    })
  }
  
  const token = authHeader.replace('Bearer ', '')
  
  try {
    // 2. Vérifier et décoder le token
    const secret = new TextEncoder().encode(config.jwtSecret)
    const { payload } = await jwtVerify(token, secret)
    
    // 3. Récupérer l'utilisateur depuis le mock
    const user = findUserById(payload.userId as number)
    
    if (!user) {
      throw createError({
        statusCode: 404,
        message: 'Utilisateur introuvable'
      })
    }
    
    // 4. Renvoyer les infos user (sans password)
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    }
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: 'Token invalide ou expiré'
    })
  }
})