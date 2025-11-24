import { useLocation } from "react-router-dom"

const Story = () => {
    const { state } = useLocation();
    if(!state){
        return <p>No data found</p>
    }
    const { img_desk, img_mob, title, author } = state;
    return (
        <div>{author} : Story of {title} </div>
    )
}

export default Story