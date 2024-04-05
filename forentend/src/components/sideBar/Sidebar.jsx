import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from "./LogoutButton"
function Sidebar() {
  return (
    <div className='flex flex-col p-4 border-slate-500'>
      <SearchInput/>
      <div className='px-3'></div>
      <Conversations/>
      <LogoutButton/> 
    </div>
  )
}

export default Sidebar
