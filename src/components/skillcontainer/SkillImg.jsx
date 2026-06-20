import React from 'react'

const SkillImg = ({img,className}) => {
  return (
    <div>
      <img loading='lazy' className={`${className} w-20 block`} src={img} alt="" />
    </div>
  )
}

export default SkillImg