import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './utils/dbConnect.js'
import UserRouter from './routes/userRoutes.js'
import authRouter from './routes/authRouter.js'
const app = express()
app.use(express.json())
dotenv.config()
dbConnect()

app.use('/api/user',UserRouter)
app.use('/api/auth',authRouter)

const PORT = process.env.PORT
app.listen(PORT, (req, res) => {
    console.log('connected to backend at' + PORT)
})