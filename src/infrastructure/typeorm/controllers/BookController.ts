import { NextFunction, Request, Response } from "express";
import { BookProvider } from "../providers/BookProvider";

export class BookController {

    provider: BookProvider = new BookProvider()

    async createBook(req: Request, res: Response, next: NextFunction) {
        const body = req.body

        try {
            const result = await this.provider.addBook(body)
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}