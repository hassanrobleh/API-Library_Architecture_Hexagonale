import * as express from 'express'
import cors from 'cors'
import swaggerDocument from '../../../swagger.json'
import * as swaggerUi from 'swagger-ui-express'
import routes from './routes'
import dotenv from 'dotenv'

dotenv.config()

export const expressApp = async (app) => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(routes)

    app.get('/', (req, res) => {
        res.json('Hello, Heroku ! 👋')
    })
}
