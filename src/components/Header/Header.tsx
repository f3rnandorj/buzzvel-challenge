"use client";

import Image from "next/image";
import { useState } from "react";
import { HeaderNavItem, HeaderNavItemProps } from "./components/HeaderNavItem";
import { DropdownNavItemDesktop } from "./components/DropdownNavItemDesktop";
import { Button } from "../Button/Button";
import { DrawerMobile } from "./components/DrawerMobile";
import { Icon } from "../Icon/Icon";
import Link from "next/link";

export interface ScrollToComponentProps {
  elementIdToSwipe?: string;
  href?: string;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="flex flex-1 w-full h-24 items-center justify-between gap-12 max-w-[90rem] px-4 sm:px-8 lg:px-20 mx-auto mb-6 md:mb-12"
      role="banner"
    >
      {/* Desktop Nav */}
      <div className="flex items-center gap-12">
        <Link href="/" aria-label="Homepage">
          <Image
            src="/logo.svg"
            alt="Uteach Logo"
            width={100}
            height={40}
            className="h-10 w-24"
            priority
          />
        </Link>

        <nav
          className="hidden md:flex items-center justify-between w-full gap-12"
          aria-label="Main navigation"
          role="menu"
        >
          {navItemsToMap.map((item) => (
            <HeaderNavItem key={item.title} {...item} />
          ))}
          <DropdownNavItemDesktop
            title="Resources"
            items={[
              {
                title: "Documentation",
                onClick: () =>
                  scrollToComponent({
                    href: "https://github.com/f3rnandorj/buzzvel-challenge/blob/main/README.md",
                  }),
              },
              {
                title: "Contact us",
                onClick: () =>
                  scrollToComponent({ elementIdToSwipe: "contact-us" }),
              },
            ]}
          />
        </nav>
      </div>

      {/* Signin / SignUp */}
      <div className="hidden md:flex gap-2">
        <Button
          href="/signin"
          title="Log In"
          variant="transparent"
          aria-label="Log into your account"
        />
        <Button
          href="/signup"
          title="Sign Up Now"
          variant="outline"
          aria-label="Create a new account"
        />
      </div>

      {/* Mobile Drawer*/}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Icon
          name="menu"
          size={24}
          className="text-secondary"
          aria-hidden={true}
        />
      </button>
      {isOpen && <DrawerMobile setIsOpen={setIsOpen} />}
    </header>
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
];
