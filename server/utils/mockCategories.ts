export interface Category {
  id: number
  slug: string
  name: string
  name_ja: string
  name_ja_short: string
  name_fr: string
  icon: string
}

export const categories: Category[] = [
  {
    id: 7,
    slug: 'ochaya',
    name: 'Ochaya',
    name_ja: 'お茶屋',
    name_ja_short: '茶房',
    name_fr: 'Salon de Thé Japonais',
    icon: '🍃'
  },
  {
    id: 6,
    slug: 'kissaten',
    name: 'Kissaten',
    name_ja: '喫茶店',
    name_ja_short: '喫茶',
    name_fr: 'Kissaten Traditionnel',
    icon: '🏮'
  },
  {
    id: 5,
    slug: 'junseikissaten',
    name: 'Junseikissaten',
    name_ja: '純喫茶',
    name_ja_short: '純喫',
    name_fr: 'Pure Café',
    icon: '🍵'
  },
  {
    id: 4,
    slug: 'onsen-cafe',
    name: 'Onsen Cafe',
    name_ja: '温泉カフェ',
    name_ja_short: '温泉',
    name_fr: 'Café Onsen',
    icon: '♨️'
  },
  {
    id: 3,
    slug: 'book-cafe',
    name: 'Book Cafe',
    name_ja: 'ブックカフェ',
    name_ja_short: 'ブック',
    name_fr: 'Café-Librairie',
    icon: '📚'
  },
  {
    id: 2,
    slug: 'third-wave',
    name: 'Third Wave',
    name_ja: 'サードウェーブ',
    name_ja_short: 'サード',
    name_fr: 'Third Wave Coffee',
    icon: '☕'
  },
  {
    id: 1,
    slug: 'coffee-stand',
    name: 'Coffee Stand',
    name_ja: 'コーヒースタンド',
    name_ja_short: 'スタンド',
    name_fr: 'Coffee Stand',
    icon: '🥤'
  }
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug)
}

export function getCategoryById(id: number): Category | undefined {
  return categories.find(cat => cat.id === id)
}

export function getAllCategories(): Category[] {
  return categories
}