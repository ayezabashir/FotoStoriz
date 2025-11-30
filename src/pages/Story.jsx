import { useLocation } from "react-router-dom"

const Story = () => {
    const { state } = useLocation();
    if (!state) {
        return <p>No data found</p>
    }
    const { date, img_desk, img_mob, title, author_name, author_email, author_address, author_img, categories, content } = state;
    return (
        <div className="w-full mx-auto py-12 px-4 md:max-w-[1100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="max-h-[400px]">
                    <picture>
                        <source media='(min-width:768px)' srcSet={img_mob} />
                        <img src={img_desk} className="w-full h-full object-cover object-center" alt={title} />
                    </picture>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="my-4 text-2xl font-bold">{title}</h1>
                        <p className="italic text-base text-justify">{content}</p>
                        <p className="my-2 text-sm text-right underline italic underline-offset-4">{date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm mr-4">Categories</h2>
                        {
                            categories.map((category) => (
                                <span className="bg-black text-white px-4 py-1 rounded-md">
                                    {category}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h3 className="text-xl mb-5 font-semibold">About Author</h3>
                <div className="flex items-center gap-5">
                    <div className="w-36 h-36 overflow-hidden rounded-full flex items-center justify-center">
                        <picture>
                            <img src={author_img} className="object-cover rounded-full" alt="" />
                        </picture>
                    </div>
                    <div>
                        <p className="font-bold text-black text-xl mb-3">{author_name}</p>
                        <p className="italic text-base">{author_email}</p>
                        <p className="text-sm mt-1">{author_address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story