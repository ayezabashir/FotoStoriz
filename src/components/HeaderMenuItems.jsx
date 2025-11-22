import { useNavigate } from "react-router-dom"
import { Button } from "./Button";

const HeaderMenuItems = () => {
    const nav = useNavigate();
    return (
        <>
            <ul className="flex flex-col md:flex-row items-center justify-between gap-8">
                <li className="font-semibold tracking-widest text-white md:text-black hover:underline underline-offset-2 transform transition-all delay-75 hover:-translate-y-1 cursor-pointer text-sm mx-1" onClick={() => nav("/stories")}>STORIES</li>
                <li className="font-semibold tracking-widest text-white md:text-black hover:underline underline-offset-2 transform transition-all delay-75 hover:-translate-y-1 cursor-pointer text-sm mx-1" onClick={() => nav("/features")}>FEATURES</li>
                <li className="font-semibold tracking-widest text-white md:text-black hover:underline underline-offset-2 transform transition-all delay-75 hover:-translate-y-1 cursor-pointer text-sm mx-1" onClick={() => nav("/pricing")}>PRICING</li>
            </ul>
            <div className="mt-5 md:mt-0">
                <Button variant="primary" size="md">
                    get an invite
                </Button>
            </div>
        </>
    )
}

export default HeaderMenuItems