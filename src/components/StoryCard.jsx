import React from 'react'
import Button from './Button'
import arrow from "/src/assets/right-arrow-white.svg"
import { useNavigate } from 'react-router-dom'

const StoryCard = (
  {
    img_desk,
    img_mob,
    title,
    author
  }) => {
  const nav = useNavigate()
  const handleNav = () => {
    nav(`/story/${author}`, {
      state: {
        img_desk,
        img_mob,
        title,
        author
      }
    });
  }
  return (
    <article className='h-[300px] md:h-[400px] w-full relative group overflow-hidden'>
      <div className='h-full w-full'>
        <picture>
          <source media="(min-width: 768px)" srcSet={img_desk} />
          <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' src={img_mob} alt="Story Image" loading='lazy' decoding='async' />
        </picture>
      </div>
      <div className='absolute bottom-0 z-10 w-full p-5'>
        <h3 className="text-base uppercase text-white font-medium">{title}</h3>
        <h4 className="text-sm text-white font-light">by {author}</h4>
        <div className='border-t border-white mt-3 py-2'>
          <Button size="lg" variant="secondary" className="flex text-white font-medium tracking-wider text-xs items-center justify-between group" onClick={handleNav} >
            READ STORY
            <img className='w-7 transition-transform duration-300 group-hover:translate-x-2' src={arrow} alt="read story" />
          </Button>
        </div>
      </div>
    </article>
  )
}

export default StoryCard