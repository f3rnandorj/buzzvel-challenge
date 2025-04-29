import React from "react";
import { tailwindUtils } from "@/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

export type IconName = keyof typeof Icons;

type Sizes = 16 | 22 | 24 | 32;

export interface IconProps {
  name: IconName;
  size?: Sizes;
  color?: string;
  onClick?: () => void;
  className?: string;
}

export function Icon({
  name,
  size = 22,
  color = "text-secondary",
  onClick,
  className = "",
}: IconProps) {
  const { cn } = tailwindUtils;

  const SelectedIcon = Icons[name];

  const sizeClassesStyles: Record<Sizes, string> = {
    22: "w-5 h-5",
    16: "w-4 h-4",
    24: "w-6 h-6",
    32: "w-8 h-8",
  };

  return (
    <SelectedIcon
      className={cn(`
        ${sizeClassesStyles[size]}
        ${color}
        ${onClick ? "cursor-pointer" : "cursor-default"}
        ${className}
      `)}
      onClick={onClick}
    />
  );
}

const Icons = {
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
};
