// Create the UI of Login Page  
//API Integration for login
// store data in localStorage 
// Create the UI for Profile page   
// Api Integration for Profile page   
// User react-router-dom for Route management 
// Show error if any while login

// userName:  atuny0 
// Password:   9uQFF1Lh


import React from 'react'
import Login from './Component/Login/Login'
import Profile from './Component/Profile/Profile'
import { Routes, Route } from 'react-router-dom'
import Ristricted from './Ristricted'
import Private from './Private'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Ristricted />} >
          <Route index element={<Login />} />
        </Route>
        <Route path='/' element={<Private />} >
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='*' element={<Login />} />
         
      </Routes>
    


    </div>
  )
}

export default App