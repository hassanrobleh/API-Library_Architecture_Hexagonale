import { ValidationError } from 'class-validator';
import { User } from '../Entities/User';

export interface IUserRepository {

    addUser(user: User): Promise<string | ValidationError[]>
    // getBook(id: number): Promise<Book>
    // getBooks()
    // updateBooks()
    // deletebook()

}