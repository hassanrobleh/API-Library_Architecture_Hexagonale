import * as express from 'express'
import cors from 'cors'
// import carRoutes from './routes/carRoutes';
// import userRoutes from './routes/userRoute';

export const App = async (app) => {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    app.get('/', (req, res) => {
        res.send('ok')
    })
}
