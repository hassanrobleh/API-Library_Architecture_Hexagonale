import { Router } from 'express'
import { deleteBook } from '../controllers/BookController';
import {
    createBook,
    getBook,
    getBooks,
    updateBook,
} from '../controllers/BookController'

const bookRouter = Router()

bookRouter.post('/', createBook)
bookRouter.get('/:id', getBook)
bookRouter.get('/', getBooks)
bookRouter.put('/:id', updateBook)
bookRouter.delete('/:id', deleteBook)

export default bookRouter
