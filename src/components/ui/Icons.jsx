import React from 'react'
import { NavLink } from 'react-router-dom'

const Icons = ({icon,path,title}) => {
  return (
   <NavLink to={path} title={title} target='_blank'>
      <div className='rounded-full border px-1 py-1 inline-block'>
      {icon}
    </div>
   </NavLink>
  )
}

export default Icons