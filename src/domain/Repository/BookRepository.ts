import { ValidationError } from 'class-validator';
import { BookDTO, IBook } from '../Entities/Book';

export interface IBookRepository {

    addBook(book: IBook): Promise<string | ValidationError[]>
    getBook(id: number): Promise<IBook>
    getBooks(): Promise<any>
    updateBook(id: number, body: IBook): Promise<IBook>
    // deletebook()
}   