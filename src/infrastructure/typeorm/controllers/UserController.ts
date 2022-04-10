import { NextFunction, Request, Response } from 'express'


export const createUser = async (req: Request,res: Response,next: NextFunction) => {
    try {
        const body = req.body
        
        
    } catch (e) {
        next(e)
    }
}

export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.params.id)
        
    } catch (error) {
        next(error)
    }
}

export const getUsers = async (
    _: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.params.id)
        const body = req.body
        
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.params.id)
        
    } catch (error) {
        next(error)
    }
}
