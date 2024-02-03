import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children: ReactNode;
}

const ButtonVariants = cva([""], {
  variants: {
    variant: {
      default:
        "w-full bg-blue-600 hover:bg-blue-700 rounded-md py-2 text-white h-[40px] font-medium border border-transparent text-sm ",
      seller:
        "w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Button({ variant, children, className, ...rest }: Iprops) {
  return (
    <button className={cn(ButtonVariants({ variant }), className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
