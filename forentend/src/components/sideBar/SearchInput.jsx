import React ,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation.js"
import useGetConversation from "../../Hooks/useGetConversation.js";
import toast from 'react-hot-toast'

function SearchInput() {
  
const {setSelectedConversation}=useConversation();

const {conversation}=useGetConversation();

  const[search,setsearch]= useState('');
  
  const handelSubmit= (e)=>{
     e.preventDefault();
     if(!search) return;
     if (search.length <3) {
      return toast.error('search must be at least 3 character')
     }
     const searchConversation = conversation.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));

     if(searchConversation){
      setSelectedConversation(searchConversation)
      setsearch("")
    }else toast.error("no user found")
  }


  return (

    <form onSubmit={handelSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="search..."
        className="w-full p-2 text-white bg-gray-900 border border-gray-300 rounded-full focus:bg-black focus:border-blue-500 focus:outline-dotted focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
      ></input>
      <button className="p-2 m-2 text-white bg-gray-900 border border-gray-500 rounded-full hover:bg-blue-500 hover:border-gray-900 hover:ring-2 hover:outline-dotted hover:outline-purple-300">
      <FaSearch  className="w-6 h-6 outline-none" />
        </button>
    </form>
  );
}

export default SearchInput;
