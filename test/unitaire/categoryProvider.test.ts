import { CategoryProvider } from '../../src/infrastructure/typeorm/providers/CategoryProvider';
import { categories, category } from './data/categoryData';

describe('category', () => {

    const categoryProvider = new CategoryProvider()
    
    it('add category', async () => {
        categoryProvider.addCategory = jest.fn(() => {
            return Promise.resolve('new category')
        })
        const result = await categoryProvider.addCategory(category)
        expect(result).toBe('new category')
    })

    it('get all category', async () => {
        categoryProvider.getCategories = jest.fn(() => {
            return Promise.resolve(categories)
        })
        const result = await categoryProvider.getCategories()
        expect(result).toEqual(categories)       
    })

    it('get category id', async () => {
        categoryProvider.getCategory = jest.fn(() => {
            return Promise.resolve(category)
        })
        const result = await categoryProvider.getCategory(1)
        expect(result).toEqual(category)       
    })

    it('update category', async () => {
        categoryProvider.updateCategory = jest.fn(() => {
            return Promise.resolve('category updated')
        })
        const result = await categoryProvider.updateCategory(1, category)
        expect(result).toBe('category updated')       
    })

    it('deleted category', async () => {
        categoryProvider.deleteCategory = jest.fn(() => {
            return Promise.resolve('category deleted')
        })
        const result = await categoryProvider.deleteCategory(1)
        expect(result).toBe('category deleted')       
    })
})