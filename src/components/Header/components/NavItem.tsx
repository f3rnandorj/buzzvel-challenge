import { Text } from "@/components";

interface Props {
  title: string;
  ariaLabel?: string;
  elementIdToSwipe?: string;
  href?: string;
}

export function NavItem({ href, elementIdToSwipe, title, ariaLabel }: Props) {
  function scrollToComponent() {
    if (!elementIdToSwipe && !href) return;

    if (href) {
      console.log("chegou", href);
      window.open(href, "_blank");
      return;
    }

    if (elementIdToSwipe) {
      const blockPositionScroll: ScrollIntoViewOptions["block"] =
        elementIdToSwipe === "contact-us" ? "start" : "center";

      const element = document.getElementById(elementIdToSwipe);

      element?.scrollIntoView({
        behavior: "smooth",
        block: blockPositionScroll,
        inline: "end",
      });
    }
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
