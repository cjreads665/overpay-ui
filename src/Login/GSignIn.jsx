import React from 'react'

const GSignIn = () => {
  let gIcon ="https://img.icons8.com/color/48/000000/google-logo.png"
  return (
    <button className='flex w-full font-base font-bold items-center justify-center self-center p-2 border border-1 border-[#E2E8F0] rounded-lg'>
    <img src={gIcon} className='w-[2rem] mr-2' />Sign In with Google
  </button>
  )
}

export default GSignIn