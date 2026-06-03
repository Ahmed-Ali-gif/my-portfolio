import React from 'react'
import heroImg from "../../assets/mypic.png"
import hero from "../../assets/heroBGpic.png"
const HeroImg = () => {
  return (
    <div>
      <img className='w-80 block rounded-2xl relative' src={hero} alt="" />
      <img className='w-80 block rounded-2xl  absolute top-32  ' src={heroImg} alt="" />
    </div>
)
}

export default HeroImg