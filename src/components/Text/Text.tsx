import { tailwindUtils } from "@/utils";
import { HTMLAttributes, ReactNode } from "react";

export type TextVariants =
  | "header"
  | "subHeader"
  | "descriptionHeader"
  | "paragraph"
  | "paragraphMedium"
  | "paragraphSmall"
  | "item";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  preset?: TextVariants;
  color?: string;
  children: ReactNode;
  className?: string;
}

const variantClassesStyles: Record<TextVariants, string> = {
  header: "text-[72px] leading-[110%] font-extrabold",
  subHeader: "text-[56px] leading-[110%] font-extrabold",
  descriptionHeader: "text-[32px] leading-[160%] font-light",
  paragraph: "text-[24px] leading-[160%] font-normal",
  paragraphMedium: "text-[20px] leading-[180%] font-normal",
  paragraphSmall: "text-[18px] leading-[160%] font-normal",
  item: "text-[16px] font-medium",
};

export function Text({
  children,
  preset = "paragraph",
  color = "text",
  as: Component = "p",
  className = "",
  ...props
}: TextProps) {
  const { cn } = tailwindUtils;
  const baseClasses = variantClassesStyles[preset];

  return (
    <Component
      className={cn(`${baseClasses} text-${color} ${className}`)}
      {...props}
    >
      {children}
    </Component>
  );
}
