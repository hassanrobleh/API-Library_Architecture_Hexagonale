import { Connection, getRepository } from 'typeorm'
import { AddBookRequest } from '../../../domain/Application/UseCase/AddBook/AddBookRequest'
import { IBookRepository } from '../../../domain/Repository/BookRepository'
import { Book } from '../../../domain/Entities/Book'
import { validate } from 'class-validator'

export class BookProvider implements IBookRepository {
    
    async addBook(book: Book) {
        const newBook = getRepository(Book).create(book)

        const err = await validate(newBook)

        if (err.length > 0) {
            return err
        } else {
            await getRepository(Book).save(newBook)
            return 'new Book'
        }
    }
}
