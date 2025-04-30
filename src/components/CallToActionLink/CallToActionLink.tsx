import Link from "next/link";
import { Icon, Text } from "@/components";
import { tailwindUtils } from "@/utils";

interface Props {
  text: string;
  href: string;
  className?: string;
}

export function CallToActionLink({ href, text, className }: Props) {
  const { cn } = tailwindUtils;

  return (
    <Link
      href={href}
      className={cn(
        "flex group items-center self-start gap-3 hover:text-primary",
        className
      )}
    >
      <Text
        as="span"
        preset="paragraphMedium"
        className="text-secondary-light group-hover:text-primary"
      >
        {text}
      </Text>

      <Icon
        name="arrowRight"
        className="text-secondary-light hover:cursor-pointer group-hover:text-primary"
      />
    </Link>
  );
}
