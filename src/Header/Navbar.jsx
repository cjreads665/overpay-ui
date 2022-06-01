import React from 'react'
import Logo from '../images/logo.png'
import { useLocation, Link } from 'react-router-dom';
import test from '../images/test.svg'
import SignInBtn from './SignInBtn';
const Navbar = () => {
  const location = useLocation(); 
  let condition = location.pathname=='/' || location.pathname=='/signup'
  return (
    <header className={`${condition? '' : 'bg-[#1A202C] absolute top-0 w-full left-0' }  flex items-center justify-between`} >
    <Link to='/'>
    <img src={condition? Logo: test} alt="overpay-logo" className={`${condition? '':'w-28'} ml-4`} />
    </Link>
   {condition? '' : <SignInBtn/> }
   </header>
  )
}

export default Navbar