import React from "react";
import { icons } from "@/assets";
import { tailwindUtils } from "@/utils";
import { ChevronDown, ChevronUp, PlayCircle } from "lucide-react";

export type IconName = keyof typeof Icons;

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  onClick?: () => void;
  className?: string;
}

export function Icon({
  name,
  size = 20,
  color = "text-secondary",
  onClick,
  className = "",
}: IconProps) {
  const { cn } = tailwindUtils;

  const SelectedIcon = Icons[name];

  return (
    <SelectedIcon
      className={cn(`
        ${color}
        ${onClick ? "cursor-pointer" : "cursor-default"}
        ${className}
      `)}
      height={size}
      width={size}
      size={size}
      onClick={onClick}
    />
  );
}

const Icons = {
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  playCircle: PlayCircle,
  ...icons,
};
