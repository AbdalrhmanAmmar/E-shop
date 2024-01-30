import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { InputHTMLAttributes } from "react";

interface Iprops
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {}

const InputVariants = cva(
  [
    "mt-2 block w-full  px-3 py-2 rounded-md border border-gray-300 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
  ],
  {
    variants: {
      variant: {
        default: "border-2 border-black",
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
