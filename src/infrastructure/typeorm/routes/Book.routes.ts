import { Router } from 'express'
import { deleteBook } from '../controllers/BookController'
import {
    createBook,
    getBook,
    getBooks,
    updateBook,
} from '../controllers/BookController'
import { auth } from '../middleware/auth'

const bookRouter = Router()

bookRouter.get('/', auth, getBooks)

bookRouter.get('/:id', getBook)

bookRouter.post('/', createBook)

bookRouter.put('/:id', updateBook)

bookRouter.delete('/:id', deleteBook)

export default bookRouter
