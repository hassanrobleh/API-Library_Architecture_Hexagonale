import { Request, Response, NextFunction } from 'express'
import { AddBookAdapter, GetBookAdapter } from '../adapter/bookAdapter'
import { bookService } from '../services/Book'
// import {bookCreate, getBookById, getAllBook, bookUpdate, bookDelete} from '../services/Book'

const service = new bookService()


export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body
    try {
        // const result = await service.bookCreate({...body})
        const result = await AddBookAdapter.execute(body)
        return res.status(201).send(result)
    } catch (e) {
        next(e)
    }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    // const result =  await service.getBookById(id)
    const result =  await GetBookAdapter.execute(id)
    return res.status(200).send(result)
}

export const getAll = async (req: Request, res: Response, next: NextFunction) => {

    // const name = req.query.name
    // const results = await getAllBook(name)
    // const message = `La liste book a bien été récupérée`
    // return res.status(200).json({message, data:results})
    const name = req.query.name
    if(req.query.name) {
        const results = await service.getAllBook(name)
        const message = ` Il y a ${results.length} books qui correspondent au terme de recherche ${name}`
        return res.json({message, data: results})
    } else {
        const results = await service.getAllBook()
        const message = `La liste book a bien été récupérée`
        return res.status(200).json({message, data:results})
    }
}

export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const body = req.body
    const result = await service.bookUpdate(id, body)
    // console.log(result)
    const message = `Le pokémon ${result.name} a bien été modifié.`
    return res.json({message, data:result})
}

export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await service.bookDelete(id)
    
    const message = `Le book avec l'identifiant n°${result} a bien été supprimé.`
    return res.json({message, data: result})
}
