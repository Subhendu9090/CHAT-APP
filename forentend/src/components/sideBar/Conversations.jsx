import React from 'react'
import Conversation from './Conversation.jsx'
function Conversations() {
  return (
    <div className='flex flex-col gap-1 py-2 overflow-hidden'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations
