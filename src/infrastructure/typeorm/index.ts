import express from 'express'
import cors from 'cors'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import routes from './routes'

const app = express()
createConnection()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

// import { expressApp } from './app'

// createConnection()
//     .then(async (conn) => {
//         await conn.runMigrations()

//         const app = express()
//         const PORT = 3000

//         expressApp(app)

//         app.listen(PORT, () => {
//             console.log(`Server: Server is running at http://localhost:${PORT}`)
//         })
//     })
//     .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send("Hello from ts app")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server: Server is running at http://localhost:${PORT}`)
})
