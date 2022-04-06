import { ICategoryRepository } from '../../../domain/Repository/CategoryRepository'
import { CategoryDTO } from '../../../domain/ValueObjects/Category'
import { getRepository } from 'typeorm'
import { Category } from '../models/Category'
import { validate } from 'class-validator'

export class CategoryProvider implements ICategoryRepository {

    async addCategory(category: CategoryDTO) {
        try {
            const newCat = getRepository(Category).create(category)
            const err = await validate(newCat)
            if (err.length > 0) {
                return err
            } else {
                await getRepository(Category).save(newCat)
                return 'new Category'
            }
        } catch (error) {}
    }

    async getCategory(id: number): Promise<CategoryDTO> {
        try {
            const category = await getRepository(Category).findOne(id)
            if (category) {
                return category
            }
            return category
        } catch (error) {
            throw new Error(error)
        }
    }

    async getCategories(): Promise<CategoryDTO[]> {
        try {
            const categories = await getRepository(Category).find()
            return categories
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateCategory(id: number, category: any) {
        try {
            const categoryId = await getRepository(Category).findOne(id)
            const categoryUpdate = await getRepository(Category).merge(categoryId, category)
            await getRepository(Category).save(categoryUpdate)
            return 'update category'
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteCategory(id: number) {
        try {
            const categoryId = await getRepository(Category).findOne(id)
            if (categoryId) {
                await getRepository(Category).delete(categoryId)
                return 'book category'
            }
        } catch (error) {
            throw new Error(error)
        }
    }


}
