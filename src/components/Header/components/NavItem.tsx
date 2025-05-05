import Link from "next/link";
import { Text } from "@/components";

interface Props {
  href: string;
  title: string;
  ariaLabel?: string;
}

export function NavItem({ href, title, ariaLabel }: Props) {
  return (
    <Link
      className="hover:text-primary transition-colors"
      href={href}
      aria-label={ariaLabel}
      role="menuitem"
    >
      <Text as="span" preset="item">
        {title}
      </Text>
    </Link>
  );
}
