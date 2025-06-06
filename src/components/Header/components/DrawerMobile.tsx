import Image from "next/image";
import { useEffect, useRef } from "react";
import { HeaderNavItem, HeaderNavItemProps } from "./HeaderNavItem";
import { Button, Icon, ScrollToComponentProps } from "@/components";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

export function DrawerMobile({ setIsOpen }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "auto";
      };
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  return (
    <div className="fixed inset-0 z-50 bg-black/30 lg:hidden">
      <div className="fixed top-0 right-0 h-full w-[55%] bg-white shadow-lg p-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={40}
            className="h-10 w-auto"
          />

          <Icon
            name="x"
            onClick={() => setIsOpen(false)}
            size={24}
            aria-label="Close menu"
          />
        </div>

        <nav className="flex flex-col gap-4 mt-8" role="menu">
          {navItemsToMap.map((item) => (
            <HeaderNavItem key={item.title} {...item} />
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2">
          <Button
            href="/signin"
            onClick={() => setIsOpen(false)}
            title="Log In"
            variant="transparent"
            aria-label="Log into your account"
            className="w-full"
          />
          <Button
            href="/signup"
            onClick={() => setIsOpen(false)}
            title="Sign Up Now"
            variant="outline"
            aria-label="Create a new account"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

function scrollToComponent({ elementIdToSwipe, href }: ScrollToComponentProps) {
  if (!elementIdToSwipe && !href) return;

  if (href) {
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

const navItemsToMap: HeaderNavItemProps[] = [
  {
    title: "Products",
    onClick: () => scrollToComponent({ elementIdToSwipe: "products" }),
  },
  {
    title: "Solutions",
    onClick: () => scrollToComponent({ elementIdToSwipe: "solutions" }),
  },
  {
    title: "Pricing",
    onClick: () => scrollToComponent({ elementIdToSwipe: "pricing" }),
  },
  {
    title: "Documentation",
    onClick: () =>
      scrollToComponent({
        href: "https://github.com/f3rnandorj/buzzvel-challenge/blob/main/README.md",
      }),
  },
  {
    title: "Contact us",
    onClick: () => scrollToComponent({ elementIdToSwipe: "contact-us" }),
  },
];
