import React from 'react'

const IconCards = ({image, heading, paragraph}) => {
  return (
    <div className='flex flex-col justify-center items-center p-4'>
        <img className='w-10' src={image} alt="feature icon" />
        <h3 className='font-bold font-xl'>{heading}</h3>
        <p className='text-base leading-6'>{paragraph}</p>
    </div>
  )
}

export default IconCards