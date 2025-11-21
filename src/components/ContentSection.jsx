import { cn } from "../utils/cn";
import Button from "./Button";
import arrowdark from "/src/assets/right-arrow-dark.svg";
import arrowlight from "/src/assets/right-arrow-white.svg";

export const ContentSection=({
    title, 
    description,
    img_mb,
    img_desk,
    reverse=false,
    dark=false,
    className
}) =>{
    return (
        <section
            className={cn(
                "grid md:grid-cols-2 w-full",
                dark ? "bg-black text-white" : "bg-white text-black",
                className
            )}
        >
            <div className={cn(
                "my-32 mx-20 flex flex-col gap-5",
                reverse ? "border-0 md-order-2" : "border border-l-2 border-gray"
            )}>
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="text-base leading-relaxed">{description}</p>
                <Button variant="secondary" size="sm" className={cn(dark ? "text-white" : "text-black")}>
                    get an invite
                    <img className="w-4" src={dark ? arrowlight : arrowdark} alt="right arrow icon" />
                </Button>

            </div>
            <div className={cn(
                reverse && "md:order-1"
            )}>
                <img srcSet={`${img_mb} 600w, ${img_desk} 1200w`} sizes="(max-width: 768px) 100vw, 50vw"
                 className="w-full h-full object-cover" alt="image" />
            </div>

        </section>
    )
}