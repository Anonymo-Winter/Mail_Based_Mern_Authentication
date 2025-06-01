import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongo_url = process.env.MODE == "development" ? "mongodb://localhost:27017/auth_sys" : process.env.MONGO_URL;

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongo_url);
        console.log("Database connected");
    } catch (error) {
        console.log("Error occured connection DB", error.message);
        process.exit(1);
    }
};
