import {Op} from 'sequelize'
import { AddBookResponse } from '../../domain/applications/useCases/addBook/addBookResponse'
import { IBookRepository } from '../../domain/repositories/BookRepository'
import {Book} from "../models"
// import { BookInput, BookOutput } from '../models/Book'
import { AddBookRequest } from '../../domain/applications/useCases/addBook/addBookRequest';

 export class bookService implements IBookRepository {

    async bookCreate(book: AddBookRequest) {
        
        const newBook = await Book.create(book)
        return "new Book"
    }
    
    async getBookById (id: number) {
        const book = await Book.findByPk(id)
        if (!book) {
            throw new Error(`Le Book demande n'existe pas. Réessayez avec un autre identifiant.`)
        }
        return book
    }
    
    async getAllBook (name?: string | object) {
        // const name = query.name
        if(name) {
            const allBook = await Book.findAll({where: {name: name}})
            return allBook
        } else {
            const allBook = await Book.findAll()
            return allBook
        }
        
    }
    
    async bookUpdate (id: number, book: any) {
        const bookId = await Book.findByPk(id)
        if(!bookId) {
            throw new Error(`Le Book demande n'existe pas. Réessayez avec un autre identifiant.`)
        }
    
        const bookUpdate = bookId.update(book, {where: {id: bookId}})
        return bookUpdate
    }
    
    async bookDelete (id: number){
        const bookId = await Book.findByPk(id)  
        try {
            if(!bookId) {
                throw new Error(`Le Book demande n'existe pas. Réessayez avec un autre identifiant.`)
            }
    
            const deletedBook = await bookId.destroy()
            return deletedBook
            // console.log(id)
            
        } catch (e) {
            console.log(e)
        } 
    }
}



