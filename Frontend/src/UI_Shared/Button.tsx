import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children: ReactNode;
}

const ButtonVariants = cva(["rounded-md"], {
  variants: {
    variant: {
      default: "w-full bg-blue-500 py-4 text-white",
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
