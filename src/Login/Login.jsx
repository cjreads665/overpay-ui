import React from 'react'
import LoginForm from '../Forms/LoginForm'
import { Link } from 'react-router-dom'
import LoginIntro from './LoginIntro'
import GSignIn from './GSignIn'
import illustraion from '../images/illustration.png'
const Login = () => {
  return (
    <div className='flex flex-col lg:flex-row-reverse lg:justify-around justify-center items-center h-[90vh]'>
      <img src={illustraion} alt="login-banner" className='hidden lg:block w-[30%] mb-4 self-center' />
   <div className=' flex flex-col justify-around w-full h-[90%] lg:w-[50%] lg:px-32'>
     <LoginIntro/>
    <GSignIn/>
     <section>
        <div className='flex items-center overflow-hidden'>
          <div className='w-[30%] bg-[#a3a7ac] h-[0.05rem]'></div>
           <span className='w-[40%] text-center text-[#4f5155] mx-1'>Or with email</span>
          <div className='w-[30%] bg-[#a3a7ac] h-[0.05rem]'></div>
        </div>
     </section>
     <LoginForm/>
     <p className='text-center'>Don’t have an account? <Link to='signup'> <span className='font-bold'>Sign Up</span></Link></p>
   </div>
    </div>
  )
}

export default Login