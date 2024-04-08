import React from 'react'
import Conversation from './Conversation.jsx'
import useGetConversation from '../../Hooks/useGetConversation.js'

function Conversations() {
  const {loading,conversation}=useGetConversation()
  //console.log("CONVERSATION",conversation);
  return (
    <div className='flex flex-col gap-1 py-2 overflow-auto'>

      {conversation.map((conv)=>(
        <Conversation key={conv._id}
         conversation = {conv}
        />
      ))}

      {loading ? <span className='mx-auto loading loading-spinner'></span>:null}

    </div>
  )
}

export default Conversations
