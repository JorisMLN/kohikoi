import { getHomeContent } from '../utils/mockHomeContent'
import { getAllCategories } from '../utils/mockCategories'
import { getCategoryDescription } from '../utils/categoriesDescription'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const locale = (query.locale as 'ja' | 'fr' | 'en') || 'ja'
  
  // Récupérer le contenu home
  const homeContent = getHomeContent(locale)
  
  // Récupérer les catégories
  const categories = getAllCategories()
  
  // Récupérer les descriptions des catégories
  const categoryDescriptions: Record<string, string[]> = {}
  categories.forEach(cat => {
    const description = getCategoryDescription(cat.slug, locale)
    if (description) {
      categoryDescriptions[cat.slug] = description
    }
  })
  
  return {
    data: {
      hero: homeContent.hero,
      aboutUs: homeContent.aboutUs,
      howToUse: homeContent.howToUse,
      categories,
      categoryDescriptions
    }
  }
})