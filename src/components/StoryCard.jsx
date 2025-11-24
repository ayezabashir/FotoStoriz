import React from 'react'

const StoryCard = (
  {
    img_desk,
    img_mob,
  }) => {
  return (
    <article className='h-[400px] md:h-[500px] w-full'>
      <div className='h-full w-full'>
        <picture>
        <source className='w-full h-full object-cover' media="(min-width: 768px)" srcSet={img_desk} /> 
        <img className='w-full h-full object-cover' src={img_mob} alt="Story Image" loading='lazy' decoding='async' />
      </picture>
      </div>

    </article>
  )
}

export default StoryCard