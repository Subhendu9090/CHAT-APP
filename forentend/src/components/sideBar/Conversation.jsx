import React from 'react'

function Conversation() {
  return (
    <>
    <div className='flex items-center gap-3 p-2 py-2 border-b-2 border-blue-400 cursor-pointer hover:bg-sky-500'>
       <div className=''>
         <div className='w-12 rounded-full'>
            <img src='https://em-content.zobj.net/source/apple/391/bust-in-silhouette_1f464.png' 
            className='w-6'
            alt='user'/>
         </div>
       </div>

       <div className='flex flex-col flex-1'>
         <div className='flex justify-between gap-3'>
            <p className='font-bold text-gray-200 '> Jhon doe</p>
            <span className='text-xl '>☹️</span>
         </div>
       </div>
    </div>
    <div className='h-1 py-0 my-0 border-gray-500'/>
    </>
  )
}

export default Conversation
