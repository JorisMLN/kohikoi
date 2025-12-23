// app/stores/categories.ts

import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [
  {
    id: 5,
    slug: 'ochaya',
    name: 'Ochaya',
    name_ja: 'お茶屋',
    name_ja_short: '茶房',
    name_fr: 'Salon de Thé Japonais',
    description: 'Spécialistes du thé japonais',
    icon: '🍃'
  },
  {
    id: 1,
    slug: 'kissaten',
    name: 'Kissaten',
    name_ja: '喫茶店',
    name_ja_short: '喫茶',
    name_fr: 'Kissaten Traditionnel',
    description: 'Cafés rétro de l\'ère Showa (1926-1989)',
    icon: '🏮'
  },
  {
    id: 2,
    slug: 'junseikissaten',
    name: 'Junseikissaten',
    name_ja: '純喫茶',
    name_ja_short: '純喫',
    name_fr: 'Pure Café',
    description: 'Cafés puristes, méditation et silence',
    icon: '🍵'
  },
  {
    id: 6,
    slug: 'book-cafe',
    name: 'Book Cafe',
    name_ja: 'ブックカフェ',
    name_ja_short: 'ブック',
    name_fr: 'Café-Librairie',
    description: 'Librairie + café',
    icon: '📚'
  },
  {
    id: 7,
    slug: 'gallery-cafe',
    name: 'Gallery Cafe',
    name_ja: 'ギャラリーカフェ',
    name_ja_short: 'ギャラリー',
    name_fr: 'Café-Galerie',
    description: 'Espace d\'exposition + café',
    icon: '🎨'
  },
    {
    id: 3,
    slug: 'third-wave',
    name: 'Third Wave',
    name_ja: 'サードウェーブ',
    name_ja_short: 'サード',
    name_fr: 'Third Wave Coffee',
    description: 'Cafés spécialisés modernes',
    icon: '☕'
  },
  {
    id: 4,
    slug: 'coffee-stand',
    name: 'Coffee Stand',
    name_ja: 'コーヒースタンド',
    name_ja_short: 'スタンド',
    name_fr: 'Coffee Stand',
    description: 'Comptoirs compacts, service rapide',
    icon: '🥤'
  },
]
  }),
  
  getters: {
    allCategories: (state) => state.categories,
    
    getCategoryBySlug: (state) => {
      return (slug: string) => state.categories.find(c => c.slug === slug)
    }
  }
})