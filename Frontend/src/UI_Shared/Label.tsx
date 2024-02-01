import { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Iprops
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  children: ReactNode; // Changed "Text" to "text"
}

const labelVariants = cva([""], {
  variants: {
    variant: {
      default: "text-black  mt-1 block text-sm font-medium text-gray-700",
      checkbox: "ml-2 block text-sm text-gray-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Label({ children, variant, ...rest }: Iprops) {
  return (
    <label className={cn(labelVariants({ variant }))} {...rest}>
      {children}
    </label>
  );
}

export default Label;
