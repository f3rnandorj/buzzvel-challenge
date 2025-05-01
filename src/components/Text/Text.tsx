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

const variantClassesStyles: Record<TextVariants, string> = {
  header: "text-[4.5rem] leading-[1.1] font-extrabold", // 72px
  subHeader: "text-[3.5rem] leading-[1.1] font-extrabold", // 56px
  descriptionHeader: "text-[2rem] leading-[1.6] font-light", // 32px
  paragraph: "text-[1.5rem] leading-[1.6] font-normal", // 24px
  paragraphNormal: "text-[1.25rem] leading-[1.8] font-normal", // 20px
  paragraphMedium: "text-[1.25rem] leading-[1.2] font-medium", // 20px
  paragraphSmall: "text-[1.125rem] leading-[1.6] font-normal", // 18px
  item: "text-[1rem] font-medium", // 16px
  itemNormal: "text-[1rem] leading-[1.4] font-normal", // 16px
  itemSmall: "text-[0.875rem] leading-[1.4] font-normal", // 14px
  interParagraphNormal: "text-[1.125rem] leading-[1.6] font-normal font-inter", // 18px
};

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
      className={cn(`${baseClasses} text-secondary ${className}`)}
      {...props}
    >
      {children}
    </Component>
  );
}
