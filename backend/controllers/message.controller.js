import Conversation from "../models/conversation.model.js"
import Message from "../models/messege.model.js";

const sendMessage = async(req,res)=>{
try {
    const {message}= req.body;
    const {id: receiverId}= req.params;
    const senderId= req.user?._id;

   let conversation= await Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
    })

    if (!conversation) {
        conversation= await Conversation.create({
            participants:[senderId,receiverId],
        })
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message
    })

    if (newMessage) {
        conversation.messages.push(newMessage._id)
    }

    // use socket io for real time
    
    console.log(conversation);
    console.log(newMessage);

    await conversation.save();
    await newMessage.save();

    // await Promise.all([conversation.save(),newMessage.save()])

    res.status(200).json(newMessage)

} catch (error) {
    console.log("Eroor",error);
    res.status(500).json({message:"error occured during send message"})
}
}

const getMessage = async(req,res)=>{
    try {
        
        const {id:userToChat}= req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChat]}
        }).populate('messages')// actual messeges

        if (!conversation) {
           return res.status(200).json([])
        }
        console.log(conversation);
        
        const messages = conversation.messages

        console.log("messeges: ",messages);

        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in getMesseges controller: ",error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export {
    sendMessage,
    getMessage
}