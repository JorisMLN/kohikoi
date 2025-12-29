export interface User {
  id: number
  email: string
  password: string
  name: string
  role: 'admin' | 'user'
  koi_ids: number[]
  super_koi_ids: number[]
  created_at: Date
}

export const users: User[] = [
  {
    id: 1,
    email: 'kohikoi.cafe@gmail.com',
    password: 'admin123',
    name: 'Lavender',
    role: 'admin',
    koi_ids: [31, 61, 76, 91, 12, 27, 52],
    super_koi_ids: [1, 16, 46],
    created_at: new Date('2024-01-01')
  },
  {
    id: 2,
    email: 'tester1@kohikoi.com',
    password: 'test123',
    name: 'Tester1',
    role: 'user',
    koi_ids: [32, 47, 77],
    super_koi_ids: [2, 17, 62],
    created_at: new Date('2024-01-10')
  },
  {
    id: 3,
    email: 'tester2@kohikoi.com',
    password: 'test123',
    name: 'Tester2',
    role: 'user',
    koi_ids: [33, 48, 63],
    super_koi_ids: [3, 18],
    created_at: new Date('2024-01-15')
  }
]

// Trouve un user par email
export function findUserByEmail(email: string): User | undefined {
  return users.find(user => user.email === email)
}

// Trouve un user par ID
export function findUserById(id: number): User | undefined {
  return users.find(user => user.id === id)
}

export function canAddSuperKoi(userId: number): boolean {
  const user = findUserById(userId)
  return user ? user.super_koi_ids.length < 3 : false
}

export function getSuperKoiRemaining(userId: number): number {
  const user = findUserById(userId)
  return user ? 3 - user.super_koi_ids.length : 0
}