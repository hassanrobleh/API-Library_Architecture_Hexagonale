import { NextFunction, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../models/User'
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loginAdapter } from '../adapters/UserAdapter';

export const login = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const {email, password} = req.body
        const user = await loginAdapter.execute(email)
        if (!user) {
            const message = `L'utilisateur demandé n'existe pas.`
            return res.status(404).json({ message })
        }

        bcrypt.compare(password, user.password,  (isPasswordValid) => {
            if(!isPasswordValid) {
                const message = `Le mot de passe est incorrect.`
                return res.status(401).json({ message })
            }
        })
        
        const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '48h' // 24 hours
        });

        const message = `L'utilisateur a été connecté avec succès`
        return res.json({ message, data: user, token })

    } catch (error) {
        const message = `L'utilisateur n'a pas pu être connecté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
    }
}