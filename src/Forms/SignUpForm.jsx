import React from 'react'

const SignUpForm = () => {
  let inputStyles='h-12 rounded-lg border w-full p-2 border border-1 border-[#dbdde0]'
  return (
    <form action="" className='flex flex-col justify-around h-[60%]'>
        <div className='flex justify-between'>
            <input type="text" name="fname" id="fname" placeholder='First name' className={inputStyles} />
            <input type="text" name="lname" id="lname" placeholder='Last name' className={inputStyles} />
        </div>
        <input type="email" name="email" id="email" className={inputStyles} placeholder='Email' />
        <input type="password" name="password" id="password" className={inputStyles} placeholder='Password' />
        <p> By creating an account, you agreeing to our <span className='font-bold'>Privacy Policy</span> , and <span className='font-bold'>Electronics Communication Policy</span>.</p>
       
        <button type="submit"
        className='w-full text-white bg-[#194BFB] px-1.5 py-3 rounded font-[800] tracking-[0.2px] capitalize'
        onClick={(e)=>e.preventDefault()}
        >
        Sign Up</button>
    </form>
  )
}

export default SignUpForm