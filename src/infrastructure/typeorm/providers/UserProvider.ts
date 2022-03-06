// import { Connection, getRepository } from 'typeorm'
// import { IBookRepository } from '../../../domain/Repository/BookRepository'
// import { Book } from '../../../domain/Entities/Book'
// import { validate } from 'class-validator'
// import { AddUser } from '../../../domain/Application/User/UseCase/AddUser/AddUser';
// import { IUserRepository } from '../../../domain/Repository/UserRepository';

// export class UserProvider implements IUserRepository {
    
    
//     async AddUser(book: Book) {
//         const newUser = getRepository(Use).create(book)

//         const err = await validate(newBook)

//         if (err.length > 0) {
//             return err
//         } else {
//             await getRepository(Book).save(newBook)
//             return 'new Book'
//         }
//     }
// }
