import { IBookRepository } from '../../../../src/domain/Repository/BookRepository';
import { books, book } from '../bookData';

export class MockBookProvider implements IBookRepository {

    async addBook() {
       return Promise.resolve('new Book')
    }

    async getBooks() {
        return Promise.resolve(books)
    }

    async getBook() {
       return Promise.resolve(book)
    }

    async updateBook() {
       return Promise.resolve('update book')
    }

    async deletebook() {
        return Promise.resolve('book deleted')
    }
}