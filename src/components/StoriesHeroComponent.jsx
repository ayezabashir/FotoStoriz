import Button from "./Button"
import arrow from "/src/assets/right-arrow-white.svg";
import { useNavigate } from "react-router-dom";

const StoriesHeroComponent = (
    {
        key,
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
        handleScrollLeft,
        handleScrollRight
    }
) => {
    const nav = useNavigate();
    const handleNav = () => {
        nav(`/story/${slug}`, {
            state: {
                key,
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
            }
        })
    }


    return (
        <div className='w-full h-[500px] lg:h-[600px] relative'>
            <Button variant="secondary" size="md" className="absolute right-0 top-0 bottom-[50px] transform translate-y-[180px]  md:translate-y-[250px] z-10 h-[50px] w-[50px] cursor-pointer" onClick={handleScrollRight} >
                <img className="w-5 h-5" src={arrow} alt="" />
            </Button>
            <Button variant="secondary" size="md" className="absolute left-0 top-0 bottom-[50px] transform translate-y-[180px] md:translate-y-[250px] z-10 h-[50px] w-[50px] cursor-pointer" onClick={handleScrollLeft} >
                <img className="w-5 h-5 transform rotate-180" src={arrow} alt="" />
            </Button>
            {
                <>
                    <div key={key} className='h-full w-full'>
                        <picture>
                            <source media='(min-width:768px)' srcSet={img_mob} />
                            <img src={img_desk} className="w-full h-full object-cover object-center" alt="full moon background image" />
                        </picture>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 left-0 z-[10px] md:w-[600px] p-10 md:p-16 flex flex-col justify-center items-start">
                        <p className="uppercase text-gray-200 text-sm tracking-wider">Last month featured story</p>
                        <h2 className="uppercase text-white my-3 tracking-wide text-3xl md:text-5xl">{title}</h2>
                        <h3 className="text-base text-gray-200">{date} by <b className="text-white">{author_name}</b></h3>
                        <Button className="text-white text-start mt-4" variant="secondary" size="lg" onClick={handleNav} >
                            Read Story
                        </Button>
                    </div>
                </>
            }
        </div>
    )
}

export default StoriesHeroComponent