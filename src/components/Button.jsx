import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";

export const ButtonVariants = cva(
    "cursor-pointer font-light text-base uppercase",
    {
        variants:{
            variant: {
                primary : "bg-black text-white hover:bg-black/90",
                secondary: "bg-transparent flex justify-between items-center"
            },
            size:{
                sm: "w-40 p-2",
                md: "w-80",
                lg: "w-full"
            },
        },
        defaultVariants:{
            variant: "primary",
            size: "sm"
        }
    }
);

export const Button = ({
    variant,
    size,
    className,
    children,
    ...props

}) => {
  return (
    <button 
        className={cn(ButtonVariants({variant,size}),className)}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button;