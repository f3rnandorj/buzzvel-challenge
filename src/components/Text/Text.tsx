import { tailwindUtils } from "@/utils";
import { HTMLAttributes, ReactNode } from "react";

export type TextVariants =
  | "header"
  | "subHeader"
  | "descriptionHeader"
  | "paragraph"
  | "paragraphMedium"
  | "paragraphSmall"
  | "paragraphNormal"
  | "item"
  | "itemNormal"
  | "interParagraphNormal"
  | "itemSmall";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as: React.ElementType;
  preset?: TextVariants;
  children: ReactNode;
  className?: string;
}

export function Text({
  children,
  preset = "paragraph",
  as: Component,
  className = "",
  ...props
}: TextProps) {
  const { cn } = tailwindUtils;
  const baseClasses = variantClassesStyles[preset];

  return (
    <Component
      className={cn(`${baseClasses}text-secondary ${className}`)}
      {...props}
    >
      {children}
    </Component>
  );
}

const variantClassesStyles: Record<TextVariants, string> = {
  header:
    "text-[2.5rem] leading-[1.1] font-bold md:text-[4.5rem] md:leading-[1.1] md:font-extrabold",
  subHeader:
    "text-[1.5rem] leading-[1.1] font-bold md:text-[3.5rem] md:leading-[1.1] md:font-extrabold",
  descriptionHeader:
    "text-[1.125rem] leading-[1.6] font-normal md:text-[2rem] md:leading-[1.6] md:font-light",
  paragraph:
    "text-[1rem] leading-[1.4] font-normal md:text-[1.5rem] md:leading-[1.6] md:font-normal",
  paragraphNormal:
    "text-[1rem] leading-[1.4] font-normal md:text-[1.25rem] md:leading-[1.8] md:font-normal",
  paragraphMedium:
    "text-[1rem] leading-[1.1] font-medium md:text-[1.25rem] md:leading-[1.2] md:font-medium",
  paragraphSmall: "text-[1.125rem] leading-[1.6] font-normal",
  item: "text-[1rem] font-medium md:text-[1rem] md:font-medium",
  itemNormal: "text-[1rem] leading-[1.4] font-normal",
  itemSmall:
    "text-[0.75rem] leading-[1.4] font-normal md:text-[0.875rem] md:leading-[1.4] md:font-normal",
  interParagraphNormal: "text-[1.125rem] leading-[1.6] font-normal font-inter",
};
