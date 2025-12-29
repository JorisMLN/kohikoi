import type { Cafe } from '../../server/utils/mockCafes'

interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export const useCafes = () => {
  const cafes = useState<Cafe[]>('cafes', () => [])
  const cafe = useState<Cafe | null>('cafe', () => null)
  const loading = useState<boolean>('cafes-loading', () => false)
  const error = useState<string | null>('cafes-error', () => null)
  const pagination = useState<Pagination | null>('cafes-pagination', () => null)

  // Récupérer tous les cafés (pour la carte)
  async function fetchAllCafes() {
    loading.value = true
    error.value = null
    
    try {
      const response = await $fetch<{ data: Cafe[] }>('/api/cafes')
      cafes.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Erreur lors du chargement des cafés'
      console.error('[useCafes] fetchAllCafes error:', err)
    } finally {
      loading.value = false
    }
  }

  // Récupérer un café par slug
  async function fetchCafeBySlug(slug: string) {
    loading.value = true
    error.value = null
    cafe.value = null
    
    try {
      const response = await $fetch<{ data: Cafe }>(`/api/cafes/${slug}`)
      cafe.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Café introuvable'
      console.error('[useCafes] fetchCafeBySlug error:', err)
    } finally {
      loading.value = false
    }
  }

  // Récupérer les cafés par catégorie (avec pagination et tri)
  async function fetchCafesByCategory(
    categorySlug: string,
    params?: {
      page?: number
      limit?: number
      sort?: 'name' | 'rating' | 'price_range'
      order?: 'asc' | 'desc'
    }
  ) {
    loading.value = true
    error.value = null
    
    try {
      const queryParams = new URLSearchParams()
      if (params?.page) queryParams.append('page', params.page.toString())
      if (params?.limit) queryParams.append('limit', params.limit.toString())
      if (params?.sort) queryParams.append('sort', params.sort)
      if (params?.order) queryParams.append('order', params.order)
      
      const url = `/api/cafes/category/${categorySlug}${queryParams.toString() ? '?' + queryParams.toString() : ''}`
      
      const response = await $fetch<{ data: Cafe[], pagination: Pagination }>(url)
      cafes.value = response.data
      pagination.value = response.pagination
    } catch (err: any) {
      error.value = err.message || 'Erreur lors du chargement des cafés'
      console.error('[useCafes] fetchCafesByCategory error:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    cafes,
    cafe,
    loading,
    error,
    pagination,
    fetchAllCafes,
    fetchCafeBySlug,
    fetchCafesByCategory
  }
}