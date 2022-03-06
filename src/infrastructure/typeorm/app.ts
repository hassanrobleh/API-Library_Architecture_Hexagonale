import * as express from 'express';
import  cors from 'cors';
import routes from './routes'
// import carRoutes from './routes/carRoutes';
// import userRoutes from './routes/userRoute';
// import router from './routes/index';

// export const App = async (app) => {
//     app.use(express.json())
//     app.use(cors())
//     // app.use(express.urlencoded({ extended: false }))
//     app.user(routes)

//     // app.get('/', (req, res) => {
//     //     res.send('ok')
//     // })
// }

export const expressApp = async (app) => {
    app.use(express.json())
    app.use(cors())
    app.use(routes)
}
