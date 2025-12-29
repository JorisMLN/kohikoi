import type { Category } from '../../server/utils/mockCategories'

export const useCategories = () => {
  const categories = useState<Category[]>('categories', () => [])
  const loading = useState<boolean>('categories-loading', () => false)
  const error = useState<string | null>('categories-error', () => null)

  // Récupérer toutes les catégories
  async function fetchCategories() {
    loading.value = true
    error.value = null
    
    try {
      const response = await $fetch<{ data: Category[] }>('/api/categories')
      categories.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Erreur lors du chargement des catégories'
      console.error('[useCategories] fetchCategories error:', err)
    } finally {
      loading.value = false
    }
  }

  // Trouver une catégorie par slug (dans le state déjà chargé)
  function getCategoryBySlug(slug: string): Category | undefined {
    return categories.value.find(cat => cat.slug === slug)
  }

  return {
    categories,
    loading,
    error,
    fetchCategories,
    getCategoryBySlug
  }
}