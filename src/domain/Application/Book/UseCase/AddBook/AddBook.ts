import { IBook, BookDTO } from '../../../../Entities/Book'
import { IBookRepository } from '../../../../Repository/BookRepository'
import { AddBookResponse } from './AddBookResponse'

export class AddBook {
    constructor(private repository: IBookRepository) {}

    async execute(request: IBook) {
        try {
            const response = new AddBookResponse()

            const book = new BookDTO(
                request.name,
                request.description,
                request.author,
                request.releaseAt,
                request.imageUrl,
                request.fileUrl,
                request.approved,
                request.userId,
                request.categoryId
            )

            // console.log('execute', request)

            // await this.repository.addBook(book).then((err) => {
            //     console.log("err ", err)
            //     if (err.length > 0) {
            //         return err
            //     } else {
            //         response.message = 'Le book a bien été ajouté'
            //         return response
            //     }
            // })
            
            // console.log(book)

            const res = await this.repository.addBook(book)
            
            // console.log(res)

            response.message = 'Le book a bien été ajouté'
            return response

            // console.log(result)
        } catch (error: any) {
            // throw new Error(error)
            console.log(error)
        }
    }
}
