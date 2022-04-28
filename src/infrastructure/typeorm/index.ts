import express from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { expressApp } from './app'

createConnection()
    .then(async (conn) => {
        await conn.runMigrations()

        const app = express()
        
        app.get('/', (req, res) => {
            res.json('Hello, Heroku ! 👋')
        })

        const port = process.env.PORT || 3000

        expressApp(app)

        // On gère les routes 404.
        app.use(({ res }) => {
            const message =
                'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
            res.status(404).json({ message })
        })

        app.listen(port, () => {
            console.log(`Server: Server is running at http://localhost:${port}`)
        })
    })
    .catch((err) => console.log(err))
