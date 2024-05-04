import  User  from "../models/user.model.js"
import bcryptjs from "bcryptjs";
import generateTokenAndSetCooike from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if ([fullName, userName, password, confirmPassword, gender].some((field) => field.trim() === "")) {
      throw res.status(400).json({ error: "please enter valid credentials" })
    }

    if (password != confirmPassword) {
      return res.status(400).json({ error: "password do not match with confirm password" })
    }

   const user=await User.findOne({username:userName})
    if (user) {
     // console.log("user already exist");
      return res.status(400).json({ error: "user already exist" })
    }

    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`

    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

    const newUser = new User({
      fullName,
      username: userName,
      password: hashedPassword,
      gender,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic
    })

    if (!newUser) {
      return res.status(400).json({ error: "user registration failed try again" })
    }
    await generateTokenAndSetCooike(res, newUser._id)
    await newUser.save();

    return res.status(201).json({ user: newUser })

  } catch (error) {
    console.log("Error is signup" + error.message);
    res.status(500).json({ error: "internal server error" })
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if ([username, password].some((field) => field.trim() === "")) {
      res.status(400).json({ error: "please enter valid credentials" })
    }

    const user = await User.findOne({ username })

    if (!user) {
      res.status(400).json({ error: "user not found" })
    }

    const checkPassword = await bcryptjs.compare(password, user.password)

    if (!checkPassword) {
      res.status(400).json({ error: "please enter correct password" })
    }

    await generateTokenAndSetCooike(res, user?._id);

    res.status(200).json({ messege: "user logged in", user })

  } catch (error) {
    console.log("Error is login" + error.message);
    res.status(500).json({ error: "internal server error" })
  }
}

export const logout = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true
    })
    res.status(200).json({ messege: "logged out successfully" })

  } catch (error) {
    console.log("Error is logout" + error.message);
    res.status(500).json({ error: "internal server error" })
  }
}