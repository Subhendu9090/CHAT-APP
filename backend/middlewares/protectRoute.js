import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

const protectRoute=async(req,res,next)=>{
    try {
        const token= req.cookies.token;

        if (!token) {
            return res.status(400).json({error:"token not found in protect Route"})
        }

        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);

        if (!decodedToken) {
           return res.status(400).json({error:"Invalid token"})
        }

        const user =await User.findById(decodedToken.userId).select("-password");

        if (!user) {
            return res.status(400).json({error:"user not found"})
        }
        req.user=user;
        next();


    } catch (error) {
        console.log("Error",error);
        res.status(500).json({error:"error in protect route middlewares"})
    }
}

export default protectRoute;