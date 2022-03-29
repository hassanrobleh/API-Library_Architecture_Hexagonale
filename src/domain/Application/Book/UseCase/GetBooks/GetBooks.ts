import { IBookRepository } from '../../../../Repository/BookRepository';
import { GetBooksResponse } from './GetBooksResponse';

export class GetBooks {

    constructor(private repository: IBookRepository) {}

    async execute() {
        const response = new GetBooksResponse()
        response.books = await this.repository.getBooks()
        return response
    }
}