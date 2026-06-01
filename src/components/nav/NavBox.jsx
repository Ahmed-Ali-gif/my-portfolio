import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import Button from '../ui/Button'

const NavBox = () => {
  return (
    <div className='flex justify-between items-center mx-20 bg-amber-500 py-4'>
      <Logo/>
      <NavBar/>
      <Button/>
    </div>
  )
}

export default NavBox