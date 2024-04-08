import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext.jsx'

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useContext(AuthContext);

    const Login = async (username, password) => {
      
        const success = handelInputError(username, password)
        if (!success) {
            return
        }
        setLoading(true)
        try {
            const res = await fetch('/api/auth/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data));

            setAuthUser(data)


        } catch (error) {
            toast.error(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, Login }
}

export default useLogin

function handelInputError(username, password) {
   
    if (!username || !password) {
        toast.error("Please fill all fields.");
        console.log("data not found at handel input");
        return false;
    }
    return true;
}
