import React from 'react'
import heroImg from "../../assets/heroImg.jpg"
const HeroImg = () => {
  return (
    <div>
      <img className='w-80 block rounded-2xl' src={heroImg} alt="" />
    </div>
  )
}

export default HeroImg