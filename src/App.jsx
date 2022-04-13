import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MainContainer from './containers/MainContainer'
import SignupForm from './components/authentication/SignupForm'
import LoginForm from './components/authentication/LoginForm'



const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  console.log(currentUser)

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) =>{ 
          setCurrentUser(user)
          setAuthenticated(true);
        });
      }
    });
  }, []);

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<MainContainer />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
    </Router>
  )
}

export default App