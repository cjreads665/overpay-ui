import React from 'react'

const Button = ({name}) => {
  return (
    <button className='text-white bg-[#194BFB] py-3 px-10 w-full rounded-lg font-[800] tracking-[0.2px] capitalize'>
      {name}
    </button>
  )
}

export default Button