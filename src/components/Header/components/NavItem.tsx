import { Text } from "@/components";

interface Props {
  elementIdToSwipe: string;
  title: string;
  ariaLabel?: string;
}

export function NavItem({ elementIdToSwipe, title, ariaLabel }: Props) {
  function scrollToComponent() {
    const element = document.getElementById(elementIdToSwipe);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end",
    });
  }

  return (
    <button
      className="hover:text-primary transition-colors"
      onClick={scrollToComponent}
      aria-label={ariaLabel}
      role="menuitem"
    >
      <Text as="span" preset="item">
        {title}
      </Text>
    </button>
  );
}
