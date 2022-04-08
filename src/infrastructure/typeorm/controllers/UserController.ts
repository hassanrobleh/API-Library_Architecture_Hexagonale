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

export const getCategories = async (
    _: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        
    } catch (error) {
        next(error)
    }
}

export const updateCategory = async (
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

export const deleteCategory = async (
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
