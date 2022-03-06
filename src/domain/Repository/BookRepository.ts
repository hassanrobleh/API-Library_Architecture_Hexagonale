import { ValidationError } from 'class-validator';
import { BookDTO, IBook } from '../Entities/Book';

export interface IBookRepository {

    addBook(book: IBook): Promise<string | ValidationError[]>
    // getBook(id: number): Promise<Book>
    // getBooks()
    // updateBooks()
    // deletebook()
}