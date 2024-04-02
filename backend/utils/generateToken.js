import jwt from "jsonwebtoken";

const generateTokenAndSetCooike = (res,userId)=>{
   const token = jwt.sign(
    {
        userId
    },
    process.env.JWT_SECRET,
    {
        expiresIn:"20d"
    }
   )

   res.cookie("token",token,{
    httpOnly:true
   })
}

export default generateTokenAndSetCooike;