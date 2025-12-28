import { getFavoritesByUserId } from '../../../utils/mockFavorites'
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
  
  // Paramètres
  const type = (query.type as 'koi' | 'super-koi' | 'all') || 'all'
  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 20
  
  // Récupérer les favoris
  const userFavorites = getFavoritesByUserId(Number(userId), type)
  
  // Récupérer les cafés correspondants
  const cafes = userFavorites
    .map(fav => getCafeById(fav.cafe_id))
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
    }
  }
})