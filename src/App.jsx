
import './App.css'
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom'
import { DashBoard, Home, Login } from './components/pages'
import { useState } from 'react'
import Navbar from './components/navbar/Navbar'

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const userName = 'anurag'
   const data = { isLoggedIn, redirect, userName }
  return (
    <>
      <Router>
      <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path='/' element={<Home {...data} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
