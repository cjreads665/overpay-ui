import React from 'react'

const Profile = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[80vh]">
        <div>
        <h1>Hi, Johne Doe!</h1>
        <p>You’re logged in. Well done!</p>
        </div>
      <button className='text-white bg-[#194BFB] py-3 px-10 rounded-lg font-[800] tracking-[0.2px] capitalize'>
      Log out
      </button>
        
    </div>
  )
}

export default Profile