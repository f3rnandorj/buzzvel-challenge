import { Icon, IconProps, Text } from "@/components";
import { tailwindUtils } from "@/utils";
import { ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "transparent";
export type ButtonSize = "M" | "XL";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  textColor?: string;
  isLoading?: boolean;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const { cn } = tailwindUtils;

const variantClassesStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-background hover:bg-secondary",
  outline:
    "bg-background text-secondary border-[3px] border-secondary hover:bg-gray-200",
  transparent: "text-secondary bg-transparent hover:bg-gray-100",
};

const sizeClassesStyles: Record<ButtonSize, string> = {
  M: "px-3 py-2 min-h-10 sm:px-7 sm:py-3 sm:min-h-12",
  XL: "px-7 py-4 min-h-6 sm:px-12 sm:py-5 sm:min-h-16",
};

export function Button({
  title,
  textColor,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  variant = "primary",
  size = "M",
  fullWidth = false,
  ...buttonProps
}: ButtonProps) {
  const baseClasses = cn(
    "flex items-center justify-center rounded-lg ",
    "transition-colors duration-500",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    sizeClassesStyles[size],
    variantClassesStyles[variant],
    fullWidth ? "w-full" : "",
    className
  );

  const resolvedTextColor =
    textColor || (variant === "primary" ? "text-background" : "text-secondary");

  return (
    <button
      {...buttonProps}
      className={baseClasses}
      disabled={isLoading || buttonProps.disabled}
    >
      {isLoading ? (
        <Spinner variant={variant} />
      ) : (
        <div className="flex items-center gap-2">
          {leftIcon ? (
            <Icon
              {...leftIcon}
              className={cn(leftIcon.className, resolvedTextColor)}
            />
          ) : (
            <div />
          )}

          <Text
            as="span"
            preset="item"
            className={cn(resolvedTextColor, size === "M" ? "text-sm" : "")}
          >
            {title}
          </Text>

          {rightIcon ? (
            <Icon
              {...rightIcon}
              className={cn(rightIcon.className, resolvedTextColor)}
            />
          ) : (
            <div />
          )}
        </div>
      )}
    </button>
  );
}

interface SpinnerProps {
  variant?: ButtonVariant;
}

function Spinner({ variant = "primary" }: SpinnerProps) {
  const spinnerColor =
    variant === "primary" ? "border-background" : "border-secondary";

  return (
    <div
      className={cn(
        "w-5 h-5 border-2 border-t-transparent rounded-full animate-spin",
        spinnerColor
      )}
      data-testid="spinner-testId"
    />
  );
}
