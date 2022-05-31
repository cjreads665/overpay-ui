import React from 'react'
import { Link } from 'react-router-dom'
const LoginForm = () => {
  let inputStyles='h-12 rounded-lg border w-full p-2'
  return (
    <form action="" className='flex flex-col justify-around h-[50%]'>
        <input type="text" name="username" id="username" placeholder='Username or email' className={inputStyles} />
        <div>
        <input type="password" name="pasword" id="password" placeholder='Password' className={inputStyles}/>      
        </div>
        <div className='flex w-full justify-between items-center'>
            <span>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </span>
            <span className='text-sky-600'>Forgot Password?</span>
        </div>
        <Link to='verification'>
        <button type="submit"
        className='w-full text-white bg-[#194BFB] px-1.5 py-3 rounded font-[800] tracking-[0.2px] capitalize'
        > Sign in</button>
        </Link>
       
 
    </form>
  )
}

export default LoginForm