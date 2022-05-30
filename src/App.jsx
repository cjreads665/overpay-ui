import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import NoPage from './NoPage';
import SignUp from './SignUp';
import Navbar from './Header/Navbar';
function App() {
  return (
    <div className="App min-h-screen p-4 overflow-hidden font-['Manrope']">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='signup' element={<SignUp/>} />
    </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
