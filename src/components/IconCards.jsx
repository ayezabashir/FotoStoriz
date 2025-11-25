import React from 'react'

const IconCards = ({image, heading, paragraph}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 p-4'>
        <img className='w-20 mb-5' src={image} alt="feature icon" />
        <h3 className='font-bold font-xl'>{heading}</h3>
        <p className='text-base leading-6 text-center'>{paragraph}</p>
    </div>
  )
}

export default IconCards