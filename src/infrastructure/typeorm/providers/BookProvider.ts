import { getRepository } from 'typeorm'
import { IBookRepository } from '../../../domain/Repository/BookRepository'
import { Book } from '../models/Book'
import { validate } from 'class-validator'
import { BookDTO, IBook } from '../../../domain/Entities/Book'

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
            throw new Error(error)
        }
    }

    async getBook(id: number): Promise<BookDTO> {
        try {
            const book = await getRepository(Book).findOne(id)
            if (book) {
                return book
            }
            return book
        } catch (error) {
            throw new Error(error)
        }
    }

    async getBooks(): Promise<BookDTO[]> {
        try {
            const allBook = await getRepository(Book).find()
            return allBook
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateBook(id: number, book: any) {
        try {
            const bookId = await getRepository(Book).findOne(id)
            const bookUpdate = await getRepository(Book).merge(bookId, book)
            await getRepository(Book).save(bookUpdate)
            return 'update book'
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteBook(id: number) {
        try {
            const bookId = await getRepository(Book).findOne(id)
            if (bookId) {
                await getRepository(Book).delete(bookId)
                return 'book deleted'
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}
