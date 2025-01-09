import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import NoPage from './NoPage';
import Navbar from './Header/Navbar';
import Footer from './Footer';
import SignUp from './SignUp/SignUp';
import Verification from './Verification';
import ForgetPassword from './Login/ForgetPassword';
import Profile from './Profile';
function App() {
  return (
    <div className="App min-h-screen tracking-[0.05rem] p-4 overflow-hidden font-['Manrope']">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='signup' element={<SignUp/>} />
      <Route path='verification' element={<Verification/>} />
      <Route path='reset-password' element={<ForgetPassword/>} />
      <Route path='profile' element={<Profile/>} />
    </Routes>
    
      </BrowserRouter>
    </div>
  )
}

export default App
