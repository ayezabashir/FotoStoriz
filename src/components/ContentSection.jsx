import { useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";
import Button from "./Button";
import arrowdark from "/src/assets/right-arrow-dark.svg";
import arrowlight from "/src/assets/right-arrow-white.svg";

export const ContentSection = ({
    title,
    description,
    img_mb,
    img_desk,
    reverse = false,
    dark = false,
    className
}) => {
    const nav = useNavigate();
    return (
        <section
            className={cn(
                "flex flex-col-reverse md:flex-row w-full md:h-[500px] lg:h-[600px] overflow-hidden",
                dark ? "bg-black text-white" : "bg-white text-black",
                reverse ? "md:flex-row-reverse" : "",
                className
            )}
        >
            <div className={cn(
                "w-full md:w-[60%] lg:w-[40%] flex items-center justify-center p-7 md:p-10",
            )}>
                <div className="mx-auto flex flex-col justify-center gap-5 w-full md:max-w-[420px]">
                    <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
                    <p className="text-base leading-relaxed mb-7">{description}</p>
                    <Button variant="secondary" size="sm" className={cn("flex justify-between items-center group",dark ? "text-white" : "text-black")} onClick={()=>nav("/pricing")} >
                        get an invite
                        <img className="w-7 transition-transform duration-300 group-hover:translate-x-2" src={dark ? arrowlight : arrowdark} alt="right arrow icon" />
                    </Button>
                </div>
            </div>
            <div className={cn(
                "h-full w-full md:w-[40%] lg:w-[60%] flex",
            )}>
                <picture className="w-full h-full">
                    <source className="object-cover" media="(max-width:768px)" srcSet={img_mb} />
                    <source className="object-cover" media="(min-width:768px)" srcSet={img_desk} />
                    <img className="object-cover object-center w-full h-full" src={img_desk} alt="hero image" />
                </picture>
            </div>

        </section>
    )
}