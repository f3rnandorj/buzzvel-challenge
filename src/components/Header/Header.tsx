import Image from "next/image";

import { NavItem } from "./components/NavItem";
import { DropdownNavItem } from "./components/DropdownNavItem";
import { Button } from "../Button/Button";

export function Header() {
  return (
    <div className="flex flex-1 h-24 items-center justify-between gap-12">
      <div className="flex items-center gap-12">
        <Image src="/logo.svg" alt="Logo" width={100} height={40} priority />

        <nav className="flex gap-12">
          <NavItem href="" title="Products" />
          <NavItem href="" title="Solutions" />
          <NavItem href="" title="Pricing" />
          <DropdownNavItem
            title="Resources"
            items={[
              { href: "/docs", title: "Documentation" },
              { href: "/blog", title: "Blog" },
              { href: "/support", title: "Support" },
            ]}
          />
        </nav>
      </div>

      <div className="flex ">
        <Button title="Log In" variant="transparent" />
        <Button title="Sign Up Now" variant="outline" />
      </div>
    </div>
  );
}
