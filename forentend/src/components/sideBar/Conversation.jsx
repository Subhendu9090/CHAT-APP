import React from "react";
import useConversation from "../../zustand/useConversation";

function Conversation({ conversation }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  //console.log(isSelected);
  return (
    <>
      <div
        className={`flex items-center gap-3 p-2 py-2 border-b-2 border-blue-400 cursor-pointer rounded hover:bg-sky-500 ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className=" avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} className="w-6" alt="user" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200 "> {conversation.fullName}</p>
            <span className="text-xl ">☹️</span>
          </div>
        </div>
      </div>
      <div className="h-1 py-0 my-0 border-gray-500" />
    </>
  );
}

export default Conversation;
