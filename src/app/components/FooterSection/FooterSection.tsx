"use client";

import Image from "next/image";
import { SectionList } from "./components/SectionList";
import { navSectionsToMap } from "./navSectionsToMap";
import { Icon, LinkText, Text } from "@/components";
import { useGetWindowWidth } from "@/hooks";
import Link from "next/link";

interface Props {
  id: string;
}

export function FooterSection({ id }: Props) {
  const { windowWidth } = useGetWindowWidth();

  return (
    <footer
      id={id}
      className="w-full bg-secondary pt-12 md:pt-22"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-20 items-center">
        <menu className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-11 sm:gap-8 text-sm">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="focus-outline-primary"
          >
            <Image
              src="/logoWhite.svg"
              alt="Uteach Logo"
              width={96}
              height={34}
              className="h-8.5 w-24"
              priority
            />
          </Link>

          {navSectionsToMap.map((section) => (
            <SectionList key={section.title} {...section} />
          ))}
        </menu>

        <hr
          className="border-gray-700 w-full mt-12 sm:mt-9"
          aria-hidden="true"
        />

        <div className="flex flex-wrap items-center justify-between mt-6 md:mt-0 md:py-8 gap-6 md:gap-4">
          <Text as="p" preset="itemNormal" className="text-gray-200">
            uteach @ 2023. All rights reserved.
          </Text>

          <nav
            className="flex flex-1 sm:flex-0 items-center justify-between sm:gap-9"
            aria-label="Legal and settings"
          >
            <LinkText href="" text="Terms" ariaLabel="Terms of service" />
            <LinkText href="" text="Privacy" ariaLabel="Privacy policy" />
            {windowWidth >= 640 && (
              <LinkText href="" text="Contact" ariaLabel="Contact us" />
            )}

            <div className="flex items-center">
              <Icon name="globe" size={34} className="text-gray-200 pr-2.5" />
              <Text as="span" preset="itemNormal" className="text-gray-200">
                EN
              </Text>
            </div>

            <div className="flex items-center">
              <Icon name="euro" size={34} className="text-gray-200 pr-2.5" />
              <Text as="span" preset="itemNormal" className="text-gray-200">
                EUR
              </Text>
            </div>

            <Icon name="accessibility" size={26} className="text-gray-200" />
          </nav>
        </div>
      </div>
    </footer>
  );
}
