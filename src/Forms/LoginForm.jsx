import React from 'react'

const LoginForm = () => {
  return (
    <form action="">
        <input type="text" name="username" id="username" placeholder='Username or email'/>
        <div>
        <input type="password" name="pasword" id="password" placeholder='Password'/>      
        </div>
        <div className='flex w-full justify-between'>
            <span>
                <input type="checkbox" name="remember" id="remember" /> <label htmlFor="remember">Remember me</label>
            </span>
            <span className='text-sky-600'>Forgot Password?</span>
        </div>
        <button type="submit"
        className='w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        onClick={(e)=>e.preventDefault()}
        >
        Sign in</button>
    </form>
  )
}

export default LoginForm