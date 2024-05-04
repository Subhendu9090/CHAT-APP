import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import { connectDB } from "./db/connectTodb.js";
import {app, server} from './socket/socket.js'

dotenv.config();

const PORT= process.env.PORT || 5000;


app.use(express.json()); // to parse data in req.body
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)
//app.use("/api/auth",authRoutes)

server.listen(PORT,()=>{
    connectDB();
    console.log(`server is running at ${PORT}`);
})

