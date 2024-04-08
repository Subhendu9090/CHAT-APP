import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import useSendMessage from "../../Hooks/useSendMessage";

function MessageInput() {
  const [message,setMessage]= useState('');
  const {loading,sendMessage} = useSendMessage();


  const handlesSubmit=async(e)=>{
      e.preventDefault();
      if(!message)return;
      await sendMessage(message);
      setMessage("")
  }
  return (
    <form className="px-4 my-3 " onSubmit={handlesSubmit}>
      <div className="relative w-full ">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 flex items-center end-0 pe-3"
        >
          {loading ?<span className=" loading loading-spinner"></span> :<FiSend />}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
