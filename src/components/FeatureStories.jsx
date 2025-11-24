import StoryCard from './StoryCard'
import mountains_desk from "/src/assets/mountains_desk.webp"
import mountains_mb from "/src/assets/mountains_mb.webp"

const FeatureStories = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        <StoryCard img_desk={mountains_desk} img_mob={mountains_mb} title="The mountains" author="cardigan" />
        <StoryCard img_desk={mountains_desk} img_mob={mountains_mb} title="The mountains" author="cardigan"  />
        <StoryCard img_desk={mountains_desk} img_mob={mountains_mb} title="The mountains" author="cardigan"  />
        <StoryCard img_desk={mountains_desk} img_mob={mountains_mb} title="The mountains" author="cardigan"  />
    </div>
  )
}

export default FeatureStories