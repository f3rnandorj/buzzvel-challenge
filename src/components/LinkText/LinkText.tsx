import Link from "next/link";
import { Text } from "../Text/Text";
import { tailwindUtils } from "@/utils";

interface Props {
  href: string;
  text: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function LinkText({ href, text, className, ariaLabel }: Props) {
  const { cn } = tailwindUtils;

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="focus:outline-none focus:ring-3 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary rounded"
    >
      <Text
        as="span"
        preset="itemNormal"
        className={cn(
          "text-gray-200 hover:text-primary transition-colors duration-200",
          className
        )}
      >
        {text}
      </Text>
    </Link>
  );
}
