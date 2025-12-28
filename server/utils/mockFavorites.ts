export interface Favorite {
  user_id: number
  cafe_id: number
  type: 'koi' | 'super-koi'
  created_at: Date
}

export const favorites: Favorite[] = [
  // Favoris de Lavender (user_id: 1) - 3 super-koi max + koi illimités
  { user_id: 1, cafe_id: 1, type: 'super-koi', created_at: new Date('2024-01-15') },
  { user_id: 1, cafe_id: 16, type: 'super-koi', created_at: new Date('2024-01-20') },
  { user_id: 1, cafe_id: 46, type: 'super-koi', created_at: new Date('2024-02-10') },
  { user_id: 1, cafe_id: 31, type: 'koi', created_at: new Date('2024-02-01') },
  { user_id: 1, cafe_id: 61, type: 'koi', created_at: new Date('2024-02-15') },
  { user_id: 1, cafe_id: 76, type: 'koi', created_at: new Date('2024-03-01') },
  { user_id: 1, cafe_id: 91, type: 'koi', created_at: new Date('2024-03-05') },
  { user_id: 1, cafe_id: 12, type: 'koi', created_at: new Date('2024-03-08') },
  { user_id: 1, cafe_id: 27, type: 'koi', created_at: new Date('2024-03-12') },
  { user_id: 1, cafe_id: 52, type: 'koi', created_at: new Date('2024-03-15') },
  
  // Favoris de Tester1 (user_id: 2) - 3 super-koi max
  { user_id: 2, cafe_id: 2, type: 'super-koi', created_at: new Date('2024-01-18') },
  { user_id: 2, cafe_id: 17, type: 'super-koi', created_at: new Date('2024-01-25') },
  { user_id: 2, cafe_id: 62, type: 'super-koi', created_at: new Date('2024-02-28') },
  { user_id: 2, cafe_id: 32, type: 'koi', created_at: new Date('2024-02-05') },
  { user_id: 2, cafe_id: 47, type: 'koi', created_at: new Date('2024-02-12') },
  { user_id: 2, cafe_id: 77, type: 'koi', created_at: new Date('2024-03-10') },
  
  // Favoris de Tester2 (user_id: 3) - 2 super-koi (pas encore le max)
  { user_id: 3, cafe_id: 3, type: 'super-koi', created_at: new Date('2024-01-22') },
  { user_id: 3, cafe_id: 18, type: 'super-koi', created_at: new Date('2024-02-03') },
  { user_id: 3, cafe_id: 33, type: 'koi', created_at: new Date('2024-02-08') },
  { user_id: 3, cafe_id: 48, type: 'koi', created_at: new Date('2024-02-15') },
  { user_id: 3, cafe_id: 63, type: 'koi', created_at: new Date('2024-03-01') },
]

export function getFavoritesByUserId(userId: number, type?: 'koi' | 'super-koi' | 'all'): Favorite[] {
  let userFavorites = favorites.filter(fav => fav.user_id === userId)
  
  if (type && type !== 'all') {
    userFavorites = userFavorites.filter(fav => fav.type === type)
  }
  
  return userFavorites
}

export function getSuperKoiCount(userId: number): number {
  return favorites.filter(fav => fav.user_id === userId && fav.type === 'super-koi').length
}

export function canAddSuperKoi(userId: number): boolean {
  return getSuperKoiCount(userId) < 3
}