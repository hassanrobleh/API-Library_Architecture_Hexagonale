import { Book } from '../Entities/Book';

export interface IBookRepository {

    add(book: Book): Promise<void>

}