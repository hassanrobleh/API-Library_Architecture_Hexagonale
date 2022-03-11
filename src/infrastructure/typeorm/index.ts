import express from 'express';
import 'reflect-metadata'
import { createConnection } from 'typeorm'


import { expressApp } from './app'

createConnection()
    .then(async (conn) => {
        await conn.runMigrations()

        const app = express()
        const PORT = 3000

        expressApp(app)

        app.listen(PORT, () => {
            console.log(`Server: Server is running at http://localhost:${PORT}`)
        })
    })
    .catch((err) => console.log(err))


