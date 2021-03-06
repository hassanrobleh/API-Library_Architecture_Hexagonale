import { NextFunction, Request, Response } from 'express'
import {
    addBookAdapter,
    deleteBookAdapter,
    getBookAdapter,
    getBooksAdapter,
    updateBookAdapter,
} from '../adapters/BookAdapter'
import { BookProvider } from '../providers/BookProvider'

// export class BookController {

// const provider: BookProvider = new BookProvider()

export const createBook = async ( req: Request, res: Response, next: NextFunction ) => {
    const body = req.body
    try {
        // const result = await provider.addBook(body)
        const result = await addBookAdapter.execute(body)
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

export const getBook = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const id = Number(req.params.id)
        const result = await getBookAdapter.execute(id)
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

export const getBooks = async ( _: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await getBooksAdapter.execute()
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

export const updateBook = async ( req: Request, res: Response,next: NextFunction ) => {
    try {
        const id = Number(req.params.id)
        const body = req.body
        const result = await updateBookAdapter.execute(id, body)
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id)
        const result = await deleteBookAdapter.execute(id)
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

// }
