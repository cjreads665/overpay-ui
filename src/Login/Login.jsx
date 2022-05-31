import React from 'react'
import LoginForm from '../Forms/LoginForm'
import { Link } from 'react-router-dom'
import LoginIntro from './LoginIntro'
import GSignIn from './GSignIn'
const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
   <div className=' flex flex-col justify-around w-full h-[90%]'>
     <LoginIntro/>
    <GSignIn/>
     <section>
        <div className='flex items-center overflow-hidden'>
          <div className='w-[30%] bg-[#E2E8F0] h-[0.05rem]'></div>
           <span className='w-[40%] text-center text-[#E2E8F0] mx-1'>Or with email</span>
          <div className='w-[30%] bg-[#E2E8F0] h-[0.05rem]'></div>
        </div>
     </section>
     <LoginForm/>
     <p className='text-center'>Don’t have an account? <Link to='signup'> <span className='font-bold'>Sign Up</span></Link></p>
   </div>
    </div>
  )
}

export default Login