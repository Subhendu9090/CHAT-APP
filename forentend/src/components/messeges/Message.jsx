import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

function Message({ message }) {
  //console.log("message from message", message);

  const { authUser } = useContext(AuthContext);
//console.log("auth user",authUser.user);
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser.user._id;
console.log(fromMe);

  const chatClassName = fromMe ? " chat-end" : " chat-start";
  
  const profilePic = fromMe? authUser.user.profilePic: selectedConversation?.profilePic;

  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const formatedTime = extractTime(message.createdAt);

  return (
    <div className={` chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
          <img alt="pesson Image" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="flex items-center gap-1 text-xs opacity-50 chat-footer">
        {formatedTime}
      </div>
    </div>
  );
}

export default Message;
