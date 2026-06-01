import React from 'react'
import Logo_pic from "../../assets/Logo-pic.png"
const Logo = () => {
  return (
    <div className='flex items-center gap-1.5'>
      <img className='w-10' src={Logo_pic} alt="" />
      <span className='text-2xl'>Ahmed Ali</span>
    </div>
  )
}

export default Logo