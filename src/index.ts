import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import { App } from './app'

createConnection()
    .then(async (conn) => {
        await conn.runMigrations()

        const app = express()
        const PORT = 3000

        App(app)

        app.listen(PORT, () => {
            console.log(`Server: Server is running at http://localhost:${PORT}`)
        })
    })
    .catch((err) => console.log(err))
