import React from 'react'
import Button from '../Button'
import { useLocation,Link } from 'react-router-dom';

const SignInBtn = () => {
  const location = useLocation(); 
  let name
  location.pathname=='/profile' ? name = 'log out' : name= 'sign in'
  return (
    <Link to='/'>
    <div className='mr-4'>
    <Button name={name}/>
    </div>
    </Link>
    
  )
}

export default SignInBtn