import { ICategoryRepository } from '../../../../src/domain/Repository/CategoryRepository';
import { categories, category } from '../categoryData';

export class MockCategoryProvider implements ICategoryRepository {

    async addCategory() {
       return Promise.resolve('new category')
    }

    async getCategories() {
        return Promise.resolve(categories)
    }

    async getCategory() {
       return Promise.resolve(category)
    }

    async updateCategory() {
       return Promise.resolve('category updated')
    }

    async deleteCategory() {
        return Promise.resolve('category deleted')
    }
}