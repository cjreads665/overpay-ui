import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Profile = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[80vh]">
        <div className='flex flex-col justify-between'>
        <h1 className='text-4xl font-[900] text-center'>Hi, Johne Doe!</h1>
        <p className='text-[#718096] text-md mt-2 text-center'>You’re logged in. Well done!</p>
        </div>
        <div className='mt-6 w-[60%]'>
        <Link to='/'>
      <Button name='log out'/>
        </Link>
        </div>
        <div className="absolute bottom-8 w-full px-8">
      <Footer/>
    </div>
    </div>
  )
}

export default Profile