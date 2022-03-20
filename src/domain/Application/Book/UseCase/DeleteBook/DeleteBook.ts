import { IBookRepository } from "../../../../Repository/BookRepository";
import { DeleteBookResponse } from "./DeleteBookResponse";
import { BookDTO } from '../../../../Entities/Book';


export class DeleteBook {
    
    constructor(private repository: IBookRepository) {}

   async execute (request:number) {
       
    try {
        const response = new DeleteBookResponse()

        await this.repository.deletebook(request)

        response.message = "Le book a bien été supprimé"

        return response

    } catch (error) {
        throw new Error(error)
    }
   }
}