import React from 'react'
import LoginForm from '../Forms/LoginForm'
import { Link } from 'react-router-dom'
import LoginIntro from './LoginIntro'
import illustraion from '../images/illustration.png'
import GoogleBtn from '../GoogleBtn'
import UseEmail from '../UseEmail'
const Login = () => {
  return (
    <div className='flex flex-col lg:flex-row-reverse lg:justify-around justify-center items-center h-[90vh]'>
      <img src={illustraion} alt="login-banner" className='hidden lg:block w-[30%] mb-4 self-center' />
   <div className=' flex flex-col justify-around w-full h-[90%] lg:w-[50%] lg:px-32'>
     <LoginIntro/>
    <GoogleBtn name={'Sign In'}/>
    <UseEmail/>
    <LoginForm/>
     <p className='text-center'>Don’t have an account? <Link to='signup'> <span className='font-bold'>Sign Up</span></Link></p>
   </div>
    </div>
  )
}

export default Login