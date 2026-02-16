import { Button as HeadlessButton } from "@headlessui/react";
import { forwardRef, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = React.ComponentPropsWithoutRef<typeof HeadlessButton>;

export interface ButtonProps extends BaseProps {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gray-900 text-white data-hover:bg-gray-800 data-active:bg-gray-950",
  secondary:
    "bg-gray-200 text-gray-900 data-hover:bg-gray-300 data-active:bg-gray-400",
  danger: "bg-red-600 text-white data-hover:bg-red-500 data-active:bg-red-700",
  ghost:
    "bg-transparent text-gray-900 data-hover:bg-gray-100 data-active:bg-gray-200",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <HeadlessButton
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed w-full",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {leftIcon && <span className="flex items-center">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
      </HeadlessButton>
    );
  },
);

Button.displayName = "Button";
