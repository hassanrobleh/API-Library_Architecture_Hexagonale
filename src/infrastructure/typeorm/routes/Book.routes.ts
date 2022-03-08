import { Router } from 'express'
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

export default bookRouter
