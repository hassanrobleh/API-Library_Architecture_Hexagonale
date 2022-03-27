import { ValidationError } from 'class-validator';
import { CategoryDTO } from '../ValueObjects/Category';


export interface ICategoryRepository {

    addCategory(category: CategoryDTO): Promise<string | ValidationError[]>
    // getBook(id: number): Promise<BookDTO>
    // getBooks(): Promise<BookDTO[]>
    // updateBook(id: number, body: BookDTO): Promise<string>
    // deletebook(id: number)
}