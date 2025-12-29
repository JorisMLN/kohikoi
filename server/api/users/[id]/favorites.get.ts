import { findUserById } from '../../../utils/mockUsers'
import { getCafeById } from '../../../utils/mockCafes'

export default defineEventHandler((event) => {
  const userId = getRouterParam(event, 'id')
  const query = getQuery(event)
  
  if (!userId) {
    throw createError({
      statusCode: 400,
      message: 'User ID manquant'
    })
  }
  
  // Trouver l'user
  const user = findUserById(Number(userId))
  
  if (!user) {
    throw createError({
      statusCode: 404,
      message: 'Utilisateur introuvable'
    })
  }
  
  // Paramètres
  const type = (query.type as 'koi' | 'super-koi' | 'all') || 'all'
  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 20
  
  // Récupérer les IDs selon le type
  let cafeIds: number[] = []
  
  if (type === 'koi') {
    cafeIds = user.koi_ids
  } else if (type === 'super-koi') {
    cafeIds = user.super_koi_ids
  } else {
    cafeIds = [...user.koi_ids, ...user.super_koi_ids]
  }
  
  // Récupérer les cafés
  const cafes = cafeIds
    .map(id => getCafeById(id))
    .filter(cafe => cafe !== undefined)
  
  // Pagination
  const total = cafes.length
  const totalPages = Math.ceil(total / limit)
  const offset = (page - 1) * limit
  const paginatedCafes = cafes.slice(offset, offset + limit)
  
  return {
    data: paginatedCafes,
    pagination: {
      page,
      limit,
      total,
      totalPages
    },
    meta: {
      koi_count: user.koi_ids.length,
      super_koi_count: user.super_koi_ids.length,
      super_koi_remaining: 3 - user.super_koi_ids.length
    }
  }
})