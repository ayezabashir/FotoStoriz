import { stories } from '../utils/stories'
import StoryCard from './StoryCard'

const FeatureStories = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
      {
        stories.slice(0, 4).map((story) =>
          <StoryCard
            key={story.id}
            img_desk={story.img_desk}
            img_mob={story.img_mb}
            title={story.title}
            author={story.author.name}
            slug={story.slug}
          />
        )
      }
    </div>
  )
}

export default FeatureStories