import { getCafeBySlug } from '../../utils/mockCafes'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Slug manquant'
    })
  }
  
  const cafe = getCafeBySlug(slug)
  
  if (!cafe) {
    throw createError({
      statusCode: 404,
      message: 'Café introuvable'
    })
  }
  
  return {
    data: cafe
  }
})