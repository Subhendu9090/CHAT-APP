import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../Hooks/useGetMessages";
import Skeleton from "../skeletons/Skeleton";
const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
   setTimeout(()=>{
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
   },1000)
  }, [messages]);
  

//console.log(messages);
  return (
    <div className="flex-1 px-4 overflow-auto ">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
          <Message key={message._id} message={message} />
          </div>
        ))}

      {loading && <Skeleton />}
      {!loading && messages.length == 0 && (
        <p className="text-center ">Send a message to start the conversation</p>
      )}


    </div>
  );
};

export default Messages;
