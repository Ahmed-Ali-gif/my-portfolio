import React from 'react'
const FeatureImg = ({feature_Img}) => {
  return (
    <div className='border-2 border-[rgba(255,255,255,0.08)] px-4 py-2 inline-block max-w-full rounded-2xl'>
      <img className='w-[38rem] h-80 rounded-2xl' loading='lazy' src={feature_Img} alt="" />
    </div>
  )
}

export default FeatureImg