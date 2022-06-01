import React from 'react'
import Logo from '../images/logo.png'
import { useLocation, Link } from 'react-router-dom';
import test from '../images/test.svg'
import SignInBtn from './SignInBtn';
const Navbar = () => {
  const location = useLocation(); 
  return (
    <header className={`${location.pathname=='/' || location.pathname=='/signup'? '' : 'bg-[#1A202C]' } absolute top-0 w-full left-0 flex items-center justify-between`} >
    <Link to='/'>
    <img src={location.pathname=='/' || location.pathname=='/signup'? Logo: test} alt="overpay-logo" className={`${location.pathname!=='/' || location.pathname!=='/signup'? 'w-28':''} ml-4`} />
    </Link>
   {location.pathname=='/' || location.pathname=='/signup'? '' : <SignInBtn/> }
   </header>
  )
}

export default Navbar