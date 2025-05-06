"use client";

import { useEffect, useRef, useState, KeyboardEvent, useCallback } from "react";
import { Text, Icon } from "@/components";

interface ItemProps {
  title: string;
  onClick: () => void;
}

interface Props {
  title: string;
  items: ItemProps[];
}

export function DropdownNavItemDesktop({ title, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const menuId = `dropdown-menu-${title.toLowerCase().replace(/\s+/g, "-")}`;
  const buttonId = `dropdown-button-${title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  const setMenuItemRef = useCallback(
    (el: HTMLButtonElement | null, index: number) => {
      if (el) {
        menuItemsRef.current[index] = el;
      }
    },
    []
  );

  function handleButtonKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    switch (e.key) {
      case "ArrowDown":
      case "Down":
        e.preventDefault();
        setIsOpen(true);
        setActiveIndex(0);
        menuItemsRef.current[0]?.focus();
        break;
      case "Escape":
        setIsOpen(false);
        menuButtonRef.current?.focus();
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        setIsOpen(!isOpen);
        break;
    }
  }

  function handleMenuItemKeyDown(
    e: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    console.log("Key pressed:", e.key);
    switch (e.key) {
      case "ArrowDown":
      case "Down":
        e.preventDefault();
        if (index < items.length - 1) {
          setActiveIndex(index + 1);
          menuItemsRef.current[index + 1]?.focus();
        }
        break;
      case "ArrowUp":
      case "Up":
        e.preventDefault();
        if (index > 0) {
          setActiveIndex(index - 1);
          menuItemsRef.current[index - 1]?.focus();
        } else {
          menuButtonRef.current?.focus();
          setActiveIndex(-1);
        }
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        menuItemsRef.current[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(items.length - 1);
        menuItemsRef.current[items.length - 1]?.focus();
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        menuButtonRef.current?.focus();
        break;
      case "Tab":
        if (index === items.length - 1 && !e.shiftKey) {
          setIsOpen(false);
        } else if (index === 0 && e.shiftKey) {
          setIsOpen(false);
        }
        break;
    }
  }

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

  useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={menuButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menuId}
        id={buttonId}
      >
        <Text as="span" preset="item" className={"group-hover:text-primary"}>
          {title}
        </Text>
        <Icon
          name={isOpen ? "chevronUp" : "chevronDown"}
          className={"group-hover:text-primary"}
          aria-hidden={true}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
          role="menu"
          aria-labelledby={buttonId}
          id={menuId}
        >
          {items.map((item, index) => (
            <button
              ref={(el) => setMenuItemRef(el, index)}
              key={item.title}
              className="block w-full px-4 py-2 text-sm hover:bg-gray-50"
              onClick={item.onClick}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              onKeyDown={(e) => handleMenuItemKeyDown(e, index)}
              aria-current={activeIndex === index ? "page" : undefined}
            >
              <Text as="span" preset="paragraphSmall">
                {item.title}
              </Text>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
