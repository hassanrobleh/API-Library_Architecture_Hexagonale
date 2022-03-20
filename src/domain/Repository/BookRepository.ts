import { ValidationError } from 'class-validator';
import { BookDTO, IBook } from '../Entities/Book';

export interface IBookRepository {

    addBook(book: BookDTO): Promise<string | ValidationError[]>
    getBook(id: number): Promise<BookDTO>
    getBooks(): Promise<BookDTO[]>
    updateBook(id: number, body: BookDTO): Promise<string>
    deletebook(id: number)
}   