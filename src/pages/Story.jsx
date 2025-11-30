import { useLocation } from "react-router-dom"

const Story = () => {
    const { state } = useLocation();
    if (!state) {
        return <p>No data found</p>
    }
    const { date, img_desk, img_mob, title, author_name, author_email, author_address, author_img, categories, content} = state;
    return (
        <div className="w-full mx-auto py-12 px-4 md:max-w-[1100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <picture>
                    <source media='(min-width:768px)' srcSet={img_mob} />
                    <img src={img_desk} className="w-full h-full object-cover object-center" alt={title} />
                </picture>
                <div>
                    <p>{categories}</p>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <p>{date}</p>
                </div>
            </div>
            <div>
                <h2>About Author</h2>
                <div>
                    <picture>
                        <img src={author_img} alt="" />
                    </picture>
                    <div>
                        <p>{author_name}</p>
                        <p>{author_email}</p>
                        <p>{author_address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story