import Link from "next/link";
import { Icon, Text } from "@/components";
import { tailwindUtils } from "@/utils";

interface Props {
  text: string;
  href: string;
  className?: string;
  ariaLabel?: string;
}

export function CallToActionLink({ href, text, className, ariaLabel }: Props) {
  const { cn } = tailwindUtils;

  return (
    <Link
      href={href}
      className={cn(
        "flex group items-center self-start gap-3 hover:text-primary",
        "animate-scale-pulse",
        className
      )}
      aria-label={ariaLabel || `${text} - click to continue`}
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
        aria-hidden={true}
      />
    </Link>
  );
}
