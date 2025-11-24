import { featureStory } from "../utils/stories"

const StoriesHeroComponent = () => {
    return (
        <div className='w-full md:h-[500px] lg:h-[600px] relative'>
            {
                featureStory.map((story) => (
                    <>
                        <div key={story.id} className='h-full w-full'>
                            <picture>
                                <source media='(min-width:768px)' srcSet={story.img_mb} />
                                <img src={story.img_desk} className="w-full h-full object-cover object-center" alt="full moon background image" />
                            </picture>
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-0 bottom-0 left-0 z-10 p-2">
                            <p className="uppercase text-white text-base">Last month featured story</p>
                            <h2 className="uppercase text-white text-2xl">{story.title}</h2>
                            <h3 className="text-white">{story.date} by {story.author.name}</h3>
                            <p className="text-white">
                                {story.content}
                            </p>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default StoriesHeroComponent