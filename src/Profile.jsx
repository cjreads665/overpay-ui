import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[80vh]">
        <div>
        <h1>Hi, Johne Doe!</h1>
        <p>You’re logged in. Well done!</p>
        </div>
        <Link to='/'>
      <Button name='log out'/>
        </Link>
    </div>
  )
}

export default Profile