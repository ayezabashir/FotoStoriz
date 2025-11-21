import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";

export const ButtonVariants = cva(
    "cursor-pointer font-light text-base uppercase",
    {
        variants:{
            variant: {
                primary : "bg-black text-white hover:bg-black/90",
                secondary: "bg-transparent outline-none"
            },
            size:{
                sm: "w-38 p-0",
                md: "w-40 p-2",
                lg: "w-full"
            },
        },
        defaultVariants:{
            variant: "primary",
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