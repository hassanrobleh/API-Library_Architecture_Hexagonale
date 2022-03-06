import { Book } from '../../../Entities/Book'
import { IBookRepository } from '../../../Repository/BookRepository'
import { AddBookRequest } from './AddBookRequest'
import { AddBookResponse } from './AddBookResponse'

export class AddBook {
    
    constructor(private repository: IBookRepository) {}

    async execute(request: AddBookRequest) {
        try {
            const response = new AddBookResponse()

            const book = new Book(
                request.name,
                request.description,
                request.author,
                request.releaseAt,
                request.imageUrl,
                request.fileUrl,
                request.approved,
                request.user,
                request.category
            )

            await this.repository.addBook(book)
            response.message = 'Le book a bien été ajouté'
            return response

            
        } catch (error: any) {
            throw new Error(error)
        }
    }
}
