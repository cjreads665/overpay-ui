import React from 'react'
import Logo from '../images/logo.png'
import { useLocation } from 'react-router-dom';
import test from '../images/test.svg'
import SignInBtn from './SignInBtn';
const Navbar = () => {
  const location = useLocation(); 
  return (
    <header className={`${location.pathname=='/' || location.pathname=='/signup'? '' : 'bg-[#1A202C]' } flex items-center justify-between`} >
    <img src={location.pathname =='/verification'? test: Logo} alt="overpay-logo" className={`${location.pathname =='/verification'? 'w-28':''} ml-4`} />
   {location.pathname=='/' || location.pathname=='/signup'? '' : <SignInBtn/> }
   </header>
  )
}

export default Navbar