"use client";

import { IconProps } from "@/components";
import { tailwindUtils } from "@/utils";
import { ReactNode } from "react";
import { HTMLMotionProps, motion } from "motion/react";
import { ButtonContent } from "./components/ButtonContent";

const { cn } = tailwindUtils;

export type ButtonVariant = "primary" | "outline" | "transparent";
export type ButtonSize = "M" | "XL";

type ButtonCommon = {
  title: string;
  textColor?: string;
  isLoading?: boolean;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
};
export type ButtonProps = {} & Omit<HTMLMotionProps<"button">, "ref"> &
  ButtonCommon;

export type AProps = {
  href: string;
} & Omit<HTMLMotionProps<"a">, "ref"> &
  ButtonCommon;

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

export function Button(props: ButtonProps | AProps) {
  const {
    title,
    textColor,
    isLoading = false,
    leftIcon,
    rightIcon,
    className = "",
    variant = "primary",
    size = "M",
    fullWidth = false,
    disabled,
    ...rest
  } = props;

  const baseClasses = cn(
    "flex items-center justify-center rounded-lg ",
    "transition-colors duration-500",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    sizeClassesStyles[size],
    variantClassesStyles[variant],
    fullWidth ? "w-full" : "",
    className
  );

  const contentProps = {
    title,
    textColor,
    isLoading,
    leftIcon,
    rightIcon,
    variant,
    size,
  };

  if (isAnchorProps(props)) {
    return (
      <motion.a
        {...(rest as Omit<HTMLMotionProps<"a">, "ref">)}
        href={props.href}
        className={baseClasses}
        aria-busy={isLoading}
        aria-disabled={isLoading || !!disabled}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 5 }}
      >
        <ButtonContent {...contentProps} />
      </motion.a>
    );
  }

  return (
    <motion.button
      {...(rest as Omit<HTMLMotionProps<"button">, "ref">)}
      className={baseClasses}
      disabled={isLoading || disabled}
      aria-busy={isLoading}
      aria-disabled={isLoading || !!disabled}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }}
    >
      <ButtonContent {...contentProps} />
    </motion.button>
  );
}

function isAnchorProps(props: ButtonProps | AProps): props is AProps {
  return "href" in props;
}
