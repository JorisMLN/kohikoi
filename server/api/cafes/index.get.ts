import { getAllCafes } from '../../utils/mockCafes'

export default defineEventHandler(() => {
  const cafes = getAllCafes()
  
  return {
    data: cafes
  }
})