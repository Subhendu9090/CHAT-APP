import mongoose from "mongoose";

export const connectDB= async()=>{
 try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`mongo db connected successfully ${connectionInstance.connection.host}`);
 } catch (error) {
    console.log(`mongo db connection failed ${error}`);
 }
}