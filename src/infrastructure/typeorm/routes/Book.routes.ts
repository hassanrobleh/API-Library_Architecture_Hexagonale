import { Router } from "express";
import { createBook } from "../controllers/BookController";


const bookRouter = Router()

bookRouter.post('/', createBook)

export default bookRouter



// import { Router } from 'express'
// import bookRouter from './Book.routes'

// const router = Router()

// router.use('/book', bookRouter)

// export default router

