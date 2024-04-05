import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center h-screen p-4'>
      
      {/* <Signup/> */}
      <Home/>
    </div>
  )
}

export default App
