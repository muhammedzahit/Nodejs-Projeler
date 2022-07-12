import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
export default async () => {
    console.log("env : ", process.env.MONGODB_URL)
    const conn = await mongoose.connect(process.env.MONGODB_URL).catch(e => console.log(e))
}