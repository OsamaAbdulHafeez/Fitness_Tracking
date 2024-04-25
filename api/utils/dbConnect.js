import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()

export const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('mongo db connected')
    } catch (error) {
        console.log(error)
    }
}