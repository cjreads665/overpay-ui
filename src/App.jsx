import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import NoPage from './NoPage';
import Navbar from './Header/Navbar';
import Footer from './Footer';
import SignUp from './SignUp/SignUp';
import Verification from './Verification';
function App() {
  return (
    <div className="App min-h-screen tracking-[0.05rem] p-4 overflow-hidden font-['Manrope']">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='signup' element={<SignUp/>} />
      <Route path='verification' element={<Verification/>} />
    </Routes>
    
      </BrowserRouter>
    </div>
  )
}

export default App
