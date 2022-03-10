import { IBookRepository } from '../../../../Repository/BookRepository';
import { GetBooksResponse } from './GetBooksResponse';
import { IBook } from '../../../../Entities/Book';

export class GetBooks {

    constructor(private repository: IBookRepository) {}

    async execute(request?: IBook) {
        const response = new GetBooksResponse()
        response.books = await this.repository.getBooks()
        return response
    }
}