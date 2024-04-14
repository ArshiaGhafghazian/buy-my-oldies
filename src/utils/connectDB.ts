import { MONGO_URL } from "@/configs/global"
import mongoose from "mongoose"

const connectDB = async (): Promise<void> => {
    if (mongoose.connections[0].readyState) return

    mongoose.set("strictQuery", false)

    await mongoose.connect(MONGO_URL!)

    console.log("Connected to DB")
}

export default connectDB
