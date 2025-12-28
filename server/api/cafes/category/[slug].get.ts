import { getCafesByCategory } from '../../../utils/mockCafes'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const query = getQuery(event)
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Slug de catégorie manquant'
    })
  }
  
  // Récupérer tous les cafés de la catégorie
  let cafes = getCafesByCategory(slug)
  
  if (cafes.length === 0) {
    return {
      data: [],
      pagination: {
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 0
      }
    }
  }
  
  // Paramètres de pagination
  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 20
  
  // Tri
  const sort = (query.sort as string) || 'name'
  const order = (query.order as string) || 'asc'
  
  // Appliquer le tri
  cafes.sort((a, b) => {
    let comparison = 0
    
    switch (sort) {
      case 'name':
        comparison = a.name.localeCompare(b.name)
        break
      case 'rating':
        comparison = (a.koi_number + a.super_koi_number) - (b.koi_number + b.super_koi_number)
        break
      case 'price_range':
        comparison = a.price_range - b.price_range
        break
      default:
        comparison = a.name.localeCompare(b.name)
    }
    
    return order === 'desc' ? -comparison : comparison
  })
  
  // Calculer la pagination
  const total = cafes.length
  const totalPages = Math.ceil(total / limit)
  const offset = (page - 1) * limit
  
  // Paginer les résultats
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