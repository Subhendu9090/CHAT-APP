import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin"
function Login() {
  const [username,setUsername]= useState("")
  const [password,setPassword]= useState("")
  const {loading,Login}= useLogin()

  const handelSubmit = async (e)=>{
   e.preventDefault();
   await Login(username,password)
  }
  
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          login
          <span className="text-blue-600 "> ChatApp</span>
        </h1>
        <form onSubmit={handelSubmit} className="flex flex-col items-center justify-center">
          
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full p-2 text-white bg-gray-900 border border-gray-300 rounded-md focus:bg-black focus:border-blue-500 focus:outline-dotted focus:ring-2 focus:ring-blue-500 "
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            ></input>
          </div>

          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 text-white bg-gray-900 border border-gray-300 rounded-md focus:bg-black focus:border-blue-500 focus:outline-dotted focus:ring-2 focus:ring-blue-500 "
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            ></input>
          </div>
          

          <Link to="/signup" className="inline-block mt-2 text-sm hover:text-blue-600 hover:underline">
            {"Don't"} have an account?
          </Link>

          <button className="w-1/2 p-1 m-2 text-white bg-gray-900 border border-gray-500 rounded-2xl hover:bg-blue-600 hover:border-gray-900 hover:ring-2 hover:outline-dotted hover:outline-purple-400"
          disabled={loading}>{loading ? <span className=" loading loading-spinner"></span> : "Login"}</button>
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default Login;
