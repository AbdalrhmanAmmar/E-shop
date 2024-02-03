import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { InputHTMLAttributes } from "react";

interface Iprops
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {}

const InputVariants = cva(
  [
    " block w-full px-3 py-2 rounded-md border-[2px] border-gray-300 placeholder-gray-400 shadow-sm sm:text-sm",
  ],
  {
    variants: {
      variant: {
        default:
          "border-2 border-black focus:outline-none focus:border-blue-500 border-gray-300",
        search: "h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Input({ variant, className, ...rest }: Iprops) {
  return (
    <input className={cn(InputVariants({ variant }), className)} {...rest} />
  );
}

export default Input;
