import React from 'react'
import { stories } from '../utils/stories'
import StoryCard from '../components/StoryCard'
import StoriesHeroComponent from '../components/StoriesHeroComponent'

const Stories = () => {
  return (
    <>
      <StoriesHeroComponent />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {
        stories.map((story) =>
          <StoryCard
            key={story.id}
            date={story.date}
            img_desk={story.img_desk}
            img_mob={story.img_mb}
            title={story.title}
            author={story.author.name}
            slug={story.slug}
          />
        )
      }
      </div>
    </>
  )
}

export default Stories