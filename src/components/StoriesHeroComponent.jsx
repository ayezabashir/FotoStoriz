import { useState } from "react";
import { featureStory } from "../utils/stories"
import Button from "./Button"
import arrow from "/src/assets/right-arrow-white.svg";

const StoriesHeroComponent = () => {
    let [currentId, setCurrentId] = useState(1);
    const handleScrollLeft =()=>{
        if(currentId>1){
            setCurrentId(currentId--);
        }else if(currentId===1){
            setCurrentId(3);
        }
        console.log(currentId);
    }
    const handleScrollRight = ()=>{
        if(currentId>=1){
            setCurrentId(currentId++)
        }else if(currentId===3){
            setCurrentId(1)
        }
        console.log(currentId)
    }
    return (
        <div className='w-full md:h-[500px] lg:h-[600px] relative'>
            <Button variant="secondary" size="md" className="absolute right-[50px] top-0 bottom-[50px] transform translate-[50%] z-10 h-[50px] w-[50px] cursor-pointer" onClick={handleScrollRight} >
                <img className="w-5 h-5" src={arrow} alt="" />
            </Button>
            <Button variant="secondary" size="md" className="absolute left-[50px] top-0 bottom-[50px] transform translate-[50%] z-10 h-[50px] w-[50px] cursor-pointer" onClick={handleScrollLeft} >
                <img className="w-5 h-5 transform rotate-180" src={arrow} alt="" />
            </Button>
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
                        <div className="absolute top-0 bottom-0 left-0 z-[10px] p-2 flex flex-col justify-center items-start">
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