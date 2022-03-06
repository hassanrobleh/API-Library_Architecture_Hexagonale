import { getRepository } from 'typeorm'
import { IBookRepository } from '../../../domain/Repository/BookRepository'
import { Book } from '../models/Book'
import { validate } from 'class-validator'
import { BookDTO } from '../../../domain/Entities/Book'

export class BookProvider implements IBookRepository {
    
    async addBook(book: BookDTO) {
        try {
            const newBook = getRepository(Book).create(book)
            const err = await validate(newBook)
            if (err.length > 0) {
                return err
            } else {
                await getRepository(Book).save(newBook)
                return 'new book'
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}
