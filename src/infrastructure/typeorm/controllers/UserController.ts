import { NextFunction, Request, Response } from 'express'
import { addUserAdapter, deleteUserAdapter, getUserAdapter, getUsersAdapter, updateUserAdapter } from '../adapters/UserAdapter'


export const createUser = async (req: Request,res: Response,next: NextFunction) => {
    try {
        const body = req.body
        //console.log(body)
        const result = await addUserAdapter.execute(body)
        return res.status(201).send(result)
    } catch (e) {
        next(e)
    }
}

export const getUser = async ( req: Request, res: Response, next: NextFunction) => {
    try {
        const email = req.params.email
        const result = await getUserAdapter.execute(email)
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

export const getUsers = async ( _: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getUsersAdapter.execute()
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id)
        const body = req.body
        const result = await updateUserAdapter.execute(id, body)
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id)
        const result = await deleteUserAdapter.execute(id)
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}
