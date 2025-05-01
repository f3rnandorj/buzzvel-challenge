import { Icon, Text } from "@/components";
import Link from "next/link";

export function RequestDemoLink() {
  return (
    <Link href="" className="group">
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
