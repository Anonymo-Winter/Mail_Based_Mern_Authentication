import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        console.log("Error occured connection DB", error.message);
        process.exit(1);
    }
};