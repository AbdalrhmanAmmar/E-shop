import { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Iprops
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  children: ReactNode; // Changed "Text" to "text"
}

const labelVariants = cva([" mt-1 block text-sm font-medium text-gray-700"], {
  variants: {
    variant: {
      default: "text-black",
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
