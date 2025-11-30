import { stories } from '../utils/stories'
import { featureStory } from '../utils/stories'
import StoryCard from '../components/StoryCard'
import StoriesHeroComponent from '../components/StoriesHeroComponent'
import { useState } from 'react'

const Stories = () => {

  let [currentId, setCurrentId] = useState(1);
  const handleScrollLeft = () => {
    setCurrentId((prev) => {
      if (prev > 0) {
        return prev - 1
      }
      return 2
    })
  }
  const handleScrollRight = () => {
    setCurrentId((prev) => {
      if (prev < 2) {
        return prev + 1
      }
      return 0
    })
  }
  return (
    <>
      {
        <StoriesHeroComponent
          key={featureStory[currentId].id}
          date={featureStory[currentId].date}
          img_desk={featureStory[currentId].img_desk}
          img_mob={featureStory[currentId].img_mb}
          title={featureStory[currentId].title}
          author_name={featureStory[currentId].author.name}
          author_email={featureStory[currentId].author.email}
          author_address={featureStory[currentId].author.address}
          author_img={featureStory[currentId].author.img}
          categories={featureStory[currentId].categories}
          content={featureStory[currentId].content}
          slug={featureStory[currentId].slug}
          handleScrollLeft={handleScrollLeft}
          handleScrollRight={handleScrollRight}
        />

      }
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {
          stories.map((story) =>
            <StoryCard
              key={story.id}
              date={story.date}
              img_desk={story.img_desk}
              img_mob={story.img_mb}
              title={story.title}
              author_name={story.author.name}
              author_email={story.author.email}
              author_address={story.author.address}
              author_img={story.author.img}
              categories={story.categories}
              content={story.content}
              slug={story.slug}
            />
          )
        }
      </div>
    </>
  )
}

export default Stories