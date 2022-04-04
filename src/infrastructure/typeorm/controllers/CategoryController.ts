import { NextFunction, Request, Response } from 'express'
import {
    addCategoryAdapter,
    deleteCategoryAdapter,
    getCategoriesAdapter,
    getCategoryAdapter,
    updateCategoryAdapter,
} from '../adapters/CategoryAdapter'

export const createCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const body = req.body
    try {
        // const result = await provider.addBook(body)
        const result = await addCategoryAdapter.execute(body)
        return res.status(201).send(result)
    } catch (error) {
        console.log(error)
    }
}

export const getCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.params.id)
        const result = await getCategoryAdapter.execute(id)
        return res.status(201).send(result)
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
        const result = await getCategoriesAdapter.execute()
        return res.status(201).send(result)
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
        const result = await updateCategoryAdapter.execute(id, body)
        return res.status(201).send(result)
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
        const result = await deleteCategoryAdapter.execute(id)
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}
