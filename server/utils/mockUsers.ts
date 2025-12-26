// Interface User
export interface User {
  id: number
  email: string
  password: string
  name: string
  role: 'user' | 'admin'
  createdAt: Date
}

// Tableau de users mockés
export const users: User[] = [
  {
    id: 1,
    email: 'kohikoi.cafe@gmail.com',
    password: 'admin123',
    name: 'Lavender',
    role: 'admin',
    createdAt: new Date('2024-01-01')
  },
  {
    id: 2,
    email: 'tester1@kohikoi.com',
    password: 'test123',
    name: 'Tester One',
    role: 'user',
    createdAt: new Date('2024-01-15')
  },
  {
    id: 3,
    email: 'tester2@kohikoi.com',
    password: 'test123',
    name: 'Tester Two',
    role: 'user',
    createdAt: new Date('2024-02-01')
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