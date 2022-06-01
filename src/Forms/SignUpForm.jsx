import React,{useState} from 'react'

const SignUpForm = () => {
  let inputStyles='h-12 rounded-lg border w-full p-2 border border-1 border-[#dbdde0]'
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')


  return (
    <form action="" className='flex flex-col justify-around h-[60%]' >
        <div className='flex justify-between'>
            <input type="text" name="fname" id="fname" placeholder='First name' required className={inputStyles} onChange={(e)=>setFName(e.target.value)} />
            <input type="text" name="lname" id="lname" placeholder='Last name' required className={inputStyles}  />
        </div>
        <input type="email" name="email" id="email" required className={inputStyles} placeholder='Email' onChange={(e)=>setLName(e.target.value)} />
        <input type="password" name="password" id="password" required className={inputStyles} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        <p> By creating an account, you agreeing to our <span className='font-bold'>Privacy Policy</span> , and <span className='font-bold'>Electronics Communication Policy</span>.</p>
       
        <button type="submit"
        className='w-full text-white bg-[#194BFB] px-1.5 py-3 rounded font-[800] tracking-[0.2px] capitalize'
        >
        Sign Up</button>
    </form>
  )
}

export default SignUpForm