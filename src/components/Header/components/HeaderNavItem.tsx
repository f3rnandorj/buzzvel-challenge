import { Text } from "@/components";

export interface HeaderNavItemProps {
  title: string;
  ariaLabel?: string;
  onClick: () => void;
}

export function HeaderNavItem({
  onClick,
  title,
  ariaLabel,
}: HeaderNavItemProps) {
  return (
    <button
      className="hover:text-primary transition-colors"
      onClick={onClick}
      aria-label={ariaLabel}
      role="menuitem"
    >
      <Text as="span" preset="item">
        {title}
      </Text>
    </button>
  );
}
