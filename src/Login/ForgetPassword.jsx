import React from 'react'
import Button from '../Button'
import Footer from '../Footer'

const ForgetPassword = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[100vh]">
        <div className='w-[80%] md:w-[50%] lg:w-[30%] h-[60vh] flex flex-col items-center justify-evenly'>
    <div className='flex flex-col justify-evenly h-[30%]'>
        <h1 className='text-4xl text-center font-[900] w-full '>Need help with your account?</h1>
        <p className='text-[#718096] text-sm mt-2 text-center w-full'>Enter the email address associated with your account and we will send you a link to reset your password.</p>
    </div>
      <input type="email" name="email" id="email" placeholder='Enter your E-mail' className='h-12 rounded-lg border border-1 border-slate-700 w-full p-2'/>
      <Button name='Send Link'/>
      <p>Forgot your email?</p>
        </div>
        <div className="absolute bottom-8 w-full px-8">
      <Footer/>
    </div>
    </div>
  )
}

export default ForgetPassword