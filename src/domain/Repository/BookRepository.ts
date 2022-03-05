import { ValidationError } from 'class-validator';
import { Book } from '../Entities/Book';

export interface IBookRepository {

    addBook(book: Book): Promise<string | ValidationError[]>
    // getBook(id: number): Promise<Book>
    // getBooks()
    // updateBooks()
    // deletebook()

}