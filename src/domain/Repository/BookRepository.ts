import { Book } from '../Entities/Book';

export interface BookRepository {

    add(book: Book): Promise<void>
    
}