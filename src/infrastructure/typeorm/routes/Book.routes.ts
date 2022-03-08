import { Router } from "express";
import { createBook, getBook, getBooks } from "../controllers/BookController";


const bookRouter = Router()

bookRouter.post('/', createBook)
bookRouter.get('/:id', getBook)
bookRouter.get('/', getBooks)

export default bookRouter



