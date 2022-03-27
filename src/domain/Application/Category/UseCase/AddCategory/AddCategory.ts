import { ICategoryRepository } from '../../../../Repository/CategoryRepository';
import { CategoryDTO } from '../../../../ValueObjects/Category';
import { AddCategoryResponse } from './AddCategoryResponse';

export class AddCategory {
    
    constructor(private repository: ICategoryRepository) {}

    async execute(request: CategoryDTO) {
        try {
            const response = new AddCategoryResponse()
            const book = new CategoryDTO(
                request.name,
                request.description,
            )
            await this.repository.addCategory(book)
            response.message = 'Le category a bien été ajouté'
            return response
            
        } catch (error: any) {
            throw new Error(error)
        }
    }
}
