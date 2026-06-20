import React from 'react'

const Fields = ({name,property,placeholder, className}) => {
  return (
    <div>
      <label className='text-lg mr-1.5 ' htmlFor="">{name} :</label>
      <input className={className} type={property} name="" id="" placeholder={placeholder}/>
    </div>
  )
}

export default Fields