import React from 'react'
import LoginForm from './Forms/LoginForm'
import Logo from './images/logo.png'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='overflow-hidden p-1'>
         <header>
    <img src={Logo} alt="overpay-logo" />
   </header>
   <div>

     <section>
     <h1>Sign in to Overpay</h1>
     <h6>Send, spend and save smarter</h6>
     </section>

     <section>
       <button>Sign In with Google</button>
        <div className='flex items-center overflow-hidden'>
          <div className='w-[35%] bg-red-700 h-[0.05rem]'></div>
           <span className='w-[30%] text-center'>Or with email</span>
          <div className='w-[35%] bg-red-700 h-[0.05rem]'></div>
        </div>
     </section>
     <LoginForm/>
     <p>Don’t have an account? <Link to='signup'> <span className='font-bold'>Sign Up</span></Link></p>
   </div>
    </div>
  )
}

export default Login