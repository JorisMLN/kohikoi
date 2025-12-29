interface HomeContent {
  hero: {
    title: string
    subtitle: string
  }
  aboutUs: string[]
  howToUse: string[]
}

export const useHome = () => {
  const homeContent = useState<HomeContent | null>('home-content', () => null)
  const loading = useState<boolean>('home-loading', () => false)
  const error = useState<string | null>('home-error', () => null)

  const { locale } = useLanguage()

  async function fetchHomeContent() {
    loading.value = true
    error.value = null
    
    try {
      const response = await $fetch<{ data: any }>(`/api/home?locale=${locale.value}`)
      homeContent.value = {
        hero: response.data.hero,
        aboutUs: response.data.aboutUs,
        howToUse: response.data.howToUse
      }
    } catch (err: any) {
      error.value = err.message || 'Erreur lors du chargement du contenu'
      console.error('[useHome] fetchHomeContent error:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    homeContent,
    loading,
    error,
    fetchHomeContent
  }
}