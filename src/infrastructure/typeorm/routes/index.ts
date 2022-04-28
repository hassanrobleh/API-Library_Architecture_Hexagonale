import { Router } from 'express'
import bookRouter from './Book.routes'
import categoryRouter from './Category.routes';
import userRouter from './User.routes';

const router = Router()

router.use('/', (req, res) => {
    res.json('Hello, Heroku ! 👋')
})

router.use('/book', bookRouter)
router.use('/category', categoryRouter)
router.use('/user', userRouter)



export default router


