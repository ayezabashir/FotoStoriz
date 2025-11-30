import React from 'react'
import Button from './Button'
import arrow from "/src/assets/right-arrow-white.svg"
import { useNavigate } from 'react-router-dom'

const StoryCard = (
  {
    date,
    img_desk,
    img_mob,
    title,
    author_name,
    author_email,
    author_address,
    author_img,
    categories,
    content,
    slug,
  }) => {
  const nav = useNavigate()
  const handleNav = () => {
    nav(`/story/${slug}`, {
      state: {
        date,
        img_desk,
        img_mob,
        title,
        author_name,
        author_email,
        author_address,
        author_img,
        categories,
        content,
      }
    });
  }
  return (
    <article className='h-[330px] md:h-[430px] w-full relative group overflow-hidden'>
      <div className='h-full w-full'>
        <picture>
          <source media="(min-width: 768px)" srcSet={img_desk} />
          <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' src={img_mob} alt="Story Image" loading='lazy' decoding='async' />
        </picture>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent'></div>
      <div className='absolute bottom-0 z-10 w-full px-5 py-2'>
        <p className='text-white text-xs font-regular'>{date}</p>
        <h3 className="text-base my-1 uppercase text-white tracking-wide font-medium">{title}</h3>
        <h4 className="text-xs text-white font-regular">by {author_name}</h4>
        <div className='border-t border-white mt-3 py-2'>
          <Button size="lg" variant="secondary" className="flex text-white font-medium tracking-wider text-sm items-center justify-between group" onClick={handleNav} >
            READ STORY
            <img className='w-7 transition-transform duration-300 group-hover:translate-x-2' src={arrow} alt="read story" />
          </Button>
        </div>
      </div>
    </article>
  )
}

export default StoryCard