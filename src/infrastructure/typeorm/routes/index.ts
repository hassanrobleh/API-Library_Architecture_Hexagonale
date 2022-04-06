import { Router } from 'express'
import bookRouter from './Book.routes'
import categoryRouter from './Category.routes';

const router = Router()

router.use('/book', bookRouter)
router.use('/category', categoryRouter)

export default router

