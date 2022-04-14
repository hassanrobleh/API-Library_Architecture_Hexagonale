import { BookProvider } from '../../src/infrastructure/typeorm/providers/BookProvider'
import { book, books } from './data/bookData'

describe('book', () => {
    const bookProvider = new BookProvider()

    it('add book', async () => {
        bookProvider.addBook = jest.fn(() => {
            return Promise.resolve('new book')
        })
        const result = await bookProvider.addBook(book)
        expect(result).toBe('new book')
    })

    it('get book id', async () => {
        bookProvider.getBook = jest.fn(() => {
            return Promise.resolve(book)
        })
        const result = await bookProvider.getBook(1)
        expect(result).toEqual(book)
    })

    it('get all book', async () => {
        bookProvider.getBooks = jest.fn(() => {
            return Promise.resolve(books)
        })
        const result = await bookProvider.getBooks()
        expect(result).toEqual(books)
    })

    it('update book', async () => {
        bookProvider.updateBook = jest.fn(() => {
            return Promise.resolve('book updated')
        })
        const result = await bookProvider.updateBook(1, book)
        expect(result).toBe('book updated')
    })

    it('deleted book', async () => {
        bookProvider.deleteBook = jest.fn(() => {
            return Promise.resolve('book deleted')
        })
        const result = await bookProvider.deleteBook(1)
        expect(result).toBe('book deleted')
    })
})
