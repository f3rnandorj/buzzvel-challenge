import { Icon, Text } from "@/components";
import Link from "next/link";

interface Props {
  href: string;
}

export function RequestDemoLink({ href }: Props) {
  return (
    <Link href={href} className="group inline-block focus-outline-primary">
      <Text
        as="li"
        preset="itemNormal"
        className="flex items-center gap-1 text-gray-200 group-hover:text-primary"
      >
        Request Demo
        <Icon
          name="arrowRight"
          className="ml-1 text-gray-200 group-hover:text-primary"
        />
      </Text>
    </Link>
  );
}
