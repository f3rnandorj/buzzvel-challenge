"use client";

import Image from "next/image";
import { SectionList } from "./components/SectionList";
import { navSectionsToMap } from "./navSectionsToMap";
import { Icon, LinkText, Text } from "@/components";
import { useGetWindowWidth } from "@/hooks";

export function FooterSection() {
  const { windowWidth } = useGetWindowWidth();

  return (
    <footer className="w-full bg-secondary py-12 md:py-22">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-20 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-11 sm:gap-8 text-sm">
          <Image
            src="/logoWhite.svg"
            alt="Logo"
            width={96}
            height={34}
            className="h-8.5 w-24"
            priority
          />

          {navSectionsToMap.map((section) => (
            <SectionList key={section.title} {...section} />
          ))}
        </div>

        <hr className="border-gray-700 w-full mt-12 sm:mt-9" />

        <div className="flex flex-wrap items-center justify-between mt-6 md:mt-0 md:py-8 gap-6 md:gap-4">
          <Text as="p" preset="itemNormal" className="text-gray-200">
            uteach @ 2023. All rights reserved.
          </Text>

          <nav className="flex flex-1 sm:flex-0 items-center justify-between sm:gap-9">
            <LinkText href="" text="Terms" />
            <LinkText href="" text="Privacy" />
            {windowWidth >= 640 && <LinkText href="" text="Contact" />}

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
