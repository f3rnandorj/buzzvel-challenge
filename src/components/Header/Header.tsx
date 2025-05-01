"use client";

import Image from "next/image";
import { useState } from "react";
import { NavItem } from "./components/NavItem";
import { DropdownNavItemDesktop } from "./components/DropdownNavItemDesktop";
import { Button } from "../Button/Button";
import { DrawerMobile } from "./components/DrawerMobile";
import { Icon } from "../Icon/Icon";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-1 h-24 items-center justify-between gap-12 mx-4">
      {/* Desktop Nav */}
      <div className="flex items-center gap-12">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={40}
          className="h-10 w-24"
          priority
        />

        <nav className="hidden md:flex items-center justify-between w-full gap-12">
          <NavItem href="" title="Products" />
          <NavItem href="" title="Solutions" />
          <NavItem href="" title="Pricing" />
          <DropdownNavItemDesktop
            title="Resources"
            items={[
              { href: "/docs", title: "Documentation" },
              { href: "/blog", title: "Blog" },
              { href: "/support", title: "Support" },
            ]}
          />
        </nav>
      </div>

      {/* Signin / SignUp */}
      <div className="hidden md:flex">
        <Button title="Log In" variant="transparent" />
        <Button title="Sign Up Now" variant="outline" />
      </div>

      {/* Mobile Drawer*/}
      <Icon
        name="menu"
        onClick={() => setIsOpen(true)}
        size={24}
        className="md:hidden  text-[#0B0E18]"
        aria-label="Open menu"
      />
      {isOpen && <DrawerMobile setIsOpen={setIsOpen} />}
    </div>
  );
}
