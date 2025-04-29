import Link from "next/link";
import { Text } from "@/components";

interface Props {
  href: string;
  title: string;
}

export function NavItem({ href, title }: Props) {
  return (
    <Link className="hover:text-primary transition-colors" href={href}>
      <Text as="span" preset="item">
        {title}
      </Text>
    </Link>
  );
}
