import express from 'express'
import { loginController, registerController } from '../controllers/authController.js'
const authRouter = express.Router()

authRouter.post('/register',registerController)
authRouter.post('/login',loginController)

export default authRouter