import React,{ useState } from 'react'
import './App.css'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Route,Routes ,Navigate} from 'react-router-dom'
import {useContext} from "react";
import {AuthContext} from "./Context/AuthContext.jsx"

function App() {
  
  //console.log(contestData);
  
  const {authUser} = useContext(AuthContext)
  return (
    <div className='flex items-center justify-center h-screen p-4'>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to='/login'/>}/>
        <Route path='/login' element={authUser ? <Navigate to= '/'/> : <Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/'/>: <Signup/> } />
      </Routes>
    </div>
  )
}

export default App
