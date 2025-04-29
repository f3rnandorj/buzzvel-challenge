"use client";

import { useEffect, useRef, useState } from "react";
import { Text, Icon } from "@/components";
import Link from "next/link";

interface Props {
  title: string;
  items: { href: string; title: string }[];
}

export function DropdownNavItem({ title, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group"
      >
        <Text as="span" preset="item">
          {title}
        </Text>
        <Icon
          name={isOpen ? "chevronUp" : "chevronDown"}
          className={"group-hover:text-primary"}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <Text as="span" preset="paragraphSmall">
                {item.title}
              </Text>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
