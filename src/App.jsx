import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import Home from './components/static/Home'
import Signup from './components/authentication/Signup'
import Login from './components/authentication/Login'




const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  )
}

export default App