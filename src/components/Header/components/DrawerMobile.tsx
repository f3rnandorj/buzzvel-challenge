import Image from "next/image";
import { NavItem } from "./NavItem";
import { Button, Icon } from "@/components";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

export function DrawerMobile({ setIsOpen }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/30 lg:hidden">
      <div className="fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg p-6 flex flex-col gap-6">
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

        <nav className="flex flex-col gap-4 mt-8">
          <NavItem href="" title="Products" />
          <NavItem href="" title="Solutions" />
          <NavItem href="" title="Pricing" />
          <NavItem href="/docs" title="Documentation" />
          <NavItem href="/blog" title="Blog" />
          <NavItem href="/support" title="Support" />
        </nav>

        <div className="mt-auto flex flex-col gap-2">
          <Button title="Log In" variant="transparent" />
          <Button title="Sign Up Now" variant="outline" />
        </div>
      </div>
    </div>
  );
}
