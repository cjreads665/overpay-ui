import React from 'react'
import Footer from '../Footer'
import illustration2 from '../images/illustration2.png'
import SignUpInto from './SignUpIntro'
import SignUpForm from '../Forms/SignUpForm'
import { Link } from 'react-router-dom'
import GoogleBtn from '../GoogleBtn'
import UseEmail from '../UseEmail'
const SignUp = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-around justify-center items-center h-[90vh]'>
    <img src={illustration2} alt="login-banner" className='hidden lg:block w-[35%] mb-4 self-center -z-40 lg:w-[30%]' />
 <div className=' flex flex-col justify-around w-full h-[90%] lg:w-[50%] lg:px-32'>
  <SignUpInto/>
  <GoogleBtn name={'Sign Up'}/>
 <UseEmail/>
    <SignUpForm/>
    <p className='text-center'>Already have an account? <Link to='/'><span className='font-bold'>Sign In</span></Link></p>
    <Footer/>
 </div>

  </div>
  )
}

export default SignUp