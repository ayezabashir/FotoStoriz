import { useLocation } from "react-router-dom"

const Story = () => {
    const { state } = useLocation();
    if(!state){
        return <p>No data found</p>
    }
    const { img_desk, img_mob, title, author } = state;
    return (
        <div>{author} : Story of {title}
        <img src={img_desk} alt="" />
        <img src={img_mob} alt="" />
         </div>
    )
}

export default Story