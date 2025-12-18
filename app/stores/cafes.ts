// app/stores/cafes.ts

import { defineStore } from 'pinia'

export const useCafesStore = defineStore('cafes', {
  // 📊 STATE = Les données
  state: () => ({
    cafes: [
      {
        id: 1,
        slug: 'chatei-hatou',
        name: 'Chatei Hatou',
        name_ja: '茶亭羽當',
        category: 'kissaten',
        city: 'Tokyo',
        address: 'Shibuya',
        description: 'Kissaten traditionnel depuis 1989',
        photo_url: '/images/cafes/chatei-hatou.jpg',
        google_maps_url: 'https://maps.app.goo.gl/...'
      },
      {
        id: 2,
        slug: 'cafe-bach',
        name: 'Café Bach',
        name_ja: 'カフェ・バッハ',
        category: 'junseikissaten',
        city: 'Tokyo',
        address: 'Minami-Senju',
        description: 'Pure café avec torréfaction artisanale',
        photo_url: '/images/cafes/cafe-bach.jpg',
        google_maps_url: 'https://maps.app.goo.gl/...'
      },
      {
        id: 3,
        slug: 'onibus-coffee',
        name: 'Onibus Coffee',
        name_ja: 'オニバスコーヒー',
        category: 'third-wave',
        city: 'Tokyo',
        address: 'Nakameguro',
        description: 'Third wave specialty coffee',
        photo_url: '/images/cafes/onibus.jpg',
        google_maps_url: 'https://maps.app.goo.gl/...'
      }
    ],
    
    selectedCategory: 'all',
    searchQuery: ''
  }),
  
  // 🧮 GETTERS = Données calculées
  getters: {
    // Tous les cafés
    allCafes: (state) => state.cafes,
    
    // Cafés filtrés par catégorie
    filteredCafes: (state) => {
      let filtered = state.cafes
      
      // Filtre par catégorie
      if (state.selectedCategory !== 'all') {
        filtered = filtered.filter(c => c.category === state.selectedCategory)
      }
      
      // Filtre par recherche
      if (state.searchQuery) {
        filtered = filtered.filter(c => 
          c.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          c.city.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
      }
      
      return filtered
    },
    
    // Trouver un café par slug
    getCafeBySlug: (state) => {
      return (slug: string) => state.cafes.find(c => c.slug === slug)
    },
    
    // Cafés par catégorie
    getCafesByCategory: (state) => {
      return (category: string) => state.cafes.filter(c => c.category === category)
    }
  },
  
  // 🔧 ACTIONS = Modifier le state
  actions: {
    setCategory(category: string) {
      this.selectedCategory = category
    },
    
    setSearchQuery(query: string) {
      this.searchQuery = query
    },
    
    clearFilters() {
      this.selectedCategory = 'all'
      this.searchQuery = ''
    },
    
    // Plus tard : fetch depuis API
    async fetchCafes() {
      // const { data } = await useFetch('/api/cafes')
      // this.cafes = data.value
    }
  }
})