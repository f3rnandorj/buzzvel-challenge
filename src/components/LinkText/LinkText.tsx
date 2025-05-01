import Link from "next/link";
import { Text } from "../Text/Text";

interface Props {
  href: string;
  text: React.ReactNode;
}

export function LinkText({ href, text }: Props) {
  return (
    <Link href={href}>
      <Text
        as="span"
        preset="itemNormal"
        className="text-gray-200 hover:text-primary"
      >
        {text}
      </Text>
    </Link>
  );
}
