import { Server } from "socket.io";
import http from 'http';
import express from 'express';
 const app = express()

 const server = http.createServer(app);
 const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
 })

 const userSocketMap = {} // {userId:socketId}

 io.on('connection',(socket)=>{
    console.log("a user connected");
    const userId = socket.handshake.query.userId;
    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
    }
    //io.emit() used to send events to all the connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap))
    //socket.on() used to listen to the events can be used both client and server side
    socket.on("disconnect",()=>{
        console.log("user disconnected");
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
 })

 export {app,io,server}