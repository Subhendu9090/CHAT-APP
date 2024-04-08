import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup.js";

function Signup() {

  const [input, setInput] = useState({
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    gender:''
  })
const {loading , signup} = useSignup()

  const handelCheckBox = (gender)=>{
    setInput({...input,gender})
  }

  const handelSubmit= async(e)=>{
    e.preventDefault()
    //console.log(input);
     await signup(input)
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Signup
          <span className="text-blue-600 "> ChatApp</span>
        </h1>

        <form onSubmit={handelSubmit}
         className="flex flex-col items-center justify-center">
          <div className="w-full ">
            <label className="p-2 label">
              <span className="m-2 mt-2 text-base text-white label-text">
                Full name
              </span>
            </label>
            <input
              type="text"
              placeholder="Jhon Doe"
              className="w-full p-2 text-white bg-gray-900 border border-gray-300 rounded-md focus:bg-black focus:border-blue-500 focus:outline-dotted focus:ring-2 focus:ring-blue-500 hover:cursor-pointer hover:border hover:border-blue-500"
              value={input.fullName}
              onChange={(e)=>setInput({...input,fullName:e.target.value})}
            ></input>
          </div>

          <div className="w-full ">
            <label className="p-2 label">
              <span className="m-1 text-base text-white label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="JhonDoe"
              className="w-full p-2 text-white bg-gray-900 border border-gray-300 rounded-md focus:bg-black focus:border-blue-500 focus:outline-dotted focus:ring-2 focus:ring-blue-500 hover:cursor-pointer hover:border hover:border-blue-500"
              value={input.userName}
              onChange={(e)=>setInput({...input,userName:e.target.value})}
            ></input>
          </div>

          <div className="w-full ">
            <label className="p-2 label">
              <span className="m-1 text-base text-white label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="123456"
              className="w-full p-2 text-white bg-gray-900 border border-gray-300 rounded-md focus:bg-black focus:border-blue-500 focus:outline-dotted focus:ring-2 focus:ring-blue-500 hover:cursor-pointer hover:border hover:border-blue-500"
              value={input.password}
              onChange={(e)=>setInput({...input,password:e.target.value})}
            ></input>
          </div>

          <div className="w-full ">
            <label className="p-2 label">
              <span className="m-1 text-base text-white label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="123456"
              className="w-full p-2 text-white bg-gray-900 border border-gray-300 rounded-md focus:bg-black focus:border-blue-500 focus:outline-dotted focus:ring-2 focus:ring-blue-500 hover:cursor-pointer hover:border hover:border-blue-500"
              value={input.confirmPassword}
              onChange={(e)=>setInput({...input,confirmPassword:e.target.value})}
            ></input>
          </div>

          {/* {gender check box here} */}
          <GenderCheckBox onCheckBoxChange={handelCheckBox} selectedGender={input.gender} />

          <Link
            to="/login"
            className="inline-block mt-2 mb-3 text-sm font-bold text-white hover:text-blue-600 hover:underline"
          >
            Already have an account?
          </Link>

          <button className="w-1/2 p-1 m-2 text-white bg-gray-900 border border-gray-500 rounded-2xl hover:bg-blue-600 hover:border-gray-900 hover:ring-2 hover:outline-dotted hover:outline-purple-400"
          disabled={loading}>
           {loading ? <span className=" loading loading-spinner"></span> : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
