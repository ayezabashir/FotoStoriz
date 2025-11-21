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
    return (
        <section
            className={cn(
                "grid md:grid-cols-2 w-full md:h-[500px] overflow-hidden",
                dark ? "bg-black text-white" : "bg-white text-black",
                className
            )}
        >
            <div className={cn(
                "my-32 mx-auto flex flex-col justify-center gap-5 max-w-[420px]",
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
                "h-full",
                reverse && "md:order-1"
            )}>
                <picture className="w-full h-full flex">
                    <source className="object-cover"  media="(max-width:768px)" srcSet={img_mb} />
                    <source  className="object-cover" media="(min-width:768px)" srcSet={img_desk} />
                    <img  className="object-cover" src={img_desk} alt="hero image" />
                </picture>
            </div>

        </section>
    )
}