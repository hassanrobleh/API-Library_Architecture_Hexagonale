import { NextFunction, Request, Response } from "express";
import { addBookAdapter } from "../adapters/BookAdapter";
import { BookProvider } from "../providers/BookProvider";

// export class BookController {

    // const provider: BookProvider = new BookProvider()

    export const createBook =  async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body
        try {
            // const result = await provider.addBook(body)
            const result = await addBookAdapter.execute(body)
            return res.status(201).send(result)
            
        } catch (error) {
            console.log(error)
        }
    }
// }