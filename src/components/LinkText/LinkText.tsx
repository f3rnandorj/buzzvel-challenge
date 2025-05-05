import Link from "next/link";
import { Text } from "../Text/Text";
import { tailwindUtils } from "@/utils";

interface Props {
  href: string;
  text: React.ReactNode;
  className?: string;
}

export function LinkText({ href, text, className }: Props) {
  const { cn } = tailwindUtils;

  return (
    <Link href={href}>
      <Text
        as="span"
        preset="itemNormal"
        className={cn("text-gray-200 hover:text-primary", className)}
      >
        {text}
      </Text>
    </Link>
  );
}
