import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { set } from 'mongoose';
import {useContext} from "react";
import {AuthContext} from "../Context/AuthContext.jsx"

function useSignup() {
    const [loading, setLoading] = useState(false);
    
    const contextfunction = useContext(AuthContext);
    
    console.log("context",contextfunction);

    const signup = async({ fullName, userName, password, confirmPassword, gender }) => {
        // console.log({ fullName, userName, password, confirmPassword, gender });

        const success = await handelInputError({ fullName, userName, password, confirmPassword, gender })

        // console.log({ fullName, userName, password, confirmPassword, gender });

        if (!success) {
            return
        }
        try {
            const res = await fetch("/api/auth/signup", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            })

            const data = await res.json()
            console.log(data);
            if (data.error) {
                throw new Error(data.error)
            }
           // localstorage
            localStorage.setItem("chat-user",JSON.stringify(data))
            contextfunction.setAuthUser(data)
            

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, signup }
}

export default useSignup

function handelInputError({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error("Please fill all fields.");
        console.log("data not found at handel input");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        return false;
    }
    // if (typeof password !== 'string' || typeof confirmPassword !== 'string') {
    //     toast.error("Password must be a string.");
    //     return false;
    // }
    // Add more checks if needed
    return true;
}
