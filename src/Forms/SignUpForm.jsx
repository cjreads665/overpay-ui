import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import ConditionalLink from '../ConditionalLink'
import useStore from '../context/useStore'
const SignUpForm = () => {
  let {user,setUser} = useStore()
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
        <input type="email" name="email" id="email" required className={inputStyles} placeholder='Email' onChange={(e)=>setUser(e.target.value)} />
        <input type="password" name="password" id="password" required className={inputStyles} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        <p> By creating an account, you agreeing to our <span className='font-bold'>Privacy Policy</span> , and <span className='font-bold'>Electronics Communication Policy</span>.</p>
       
        <ConditionalLink to="/verification"
        condition={password !== "" || email !== "" || fName!=='' || lName!=='' }>
        <Button name={'Sign Up'}/>
        </ConditionalLink>
        
    </form>
  )
}

export default SignUpForm