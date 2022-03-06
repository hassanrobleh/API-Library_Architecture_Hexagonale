import { Router } from "express";
import { createBook } from "../controllers/BookController";



const bookRouter = Router()

bookRouter.post('/', createBook)

export default bookRouter