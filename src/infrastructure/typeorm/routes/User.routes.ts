import { Router } from 'express'
import { login } from '../controllers/authController';
import {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/UserController'

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', createUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)
userRouter.post('/login', login)



export default userRouter
