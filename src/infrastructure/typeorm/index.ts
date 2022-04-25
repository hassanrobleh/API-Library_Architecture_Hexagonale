import express from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { expressApp } from './app'

createConnection()
    .then(async (conn) => {
        await conn.runMigrations()

        const app = express()
        const port = process.env.PORT || 3000

        expressApp(app)

        app.get('/', (req, res) => {
            res.json('Hello, Heroku ! 👋')
        })

        app.listen(port, () => {
            console.log(`Server: Server is running at http://localhost:${port}`)
        })
    })
    .catch((err) => console.log(err))
