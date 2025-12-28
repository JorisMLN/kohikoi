import { getAllCategories } from '../../utils/mockCategories'

export default defineEventHandler(() => {
  const categories = getAllCategories()
  
  return {
    data: categories
  }
})