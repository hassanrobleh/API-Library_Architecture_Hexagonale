import { IBookRepository } from '../../../../Repository/BookRepository';
import { UpdateBookResponse } from './UpdateBookResponse';


export class UpdateBook {

    constructor(private repository: IBookRepository){}

    async execute(request: any) {

        const response = new UpdateBookResponse()

        response.book = await this.repository.

    }
}