import React from 'react'
import Button from '../Button'

const ForgetPassword = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[80vh]">
        <div className='w-[80%] md:w-[50%] lg:w-[30%]'>
        <div>
        <h1>Need help with your account?</h1>
        <p>Enter the email address associated with your account and we will send you a link to reset your password.</p>
      </div>
      <input type="email" name="email" id="email" className='h-12 rounded-lg border border-1 border-slate-700 w-full p-2'/>
      <Button name='submit'/>
      <p>Forgot your email?</p>
        </div>
        
    </div>
  )
}

export default ForgetPassword