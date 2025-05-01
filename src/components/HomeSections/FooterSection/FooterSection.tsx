import Image from "next/image";
import { SectionList } from "./components/SectionList";
import { navSectionsToMap } from "./navSectionsToMap";
import { Icon, LinkText, Text } from "@/components";

export function FooterSection() {
  return (
    <footer className="h-[26.25rem] items-center bg-secondary w-screen relative left-1/2 -translate-x-1/2 py-12">
      <div className="max-w-7xl mx-auto">
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logoWhite.svg"
              alt="Logo"
              width={96}
              height={34}
              className="h-8.5 w-24"
              priority
            />
          </div>

          {navSectionsToMap.map((section) => (
            <SectionList key={section.title} {...section} />
          ))}
        </div>

        <hr className="border-gray-700 w-full mt-9" />

        <div className="flex flex-wrap items-center justify-between py-8 gap-4">
          <Text as="p" preset="itemNormal" className="text-gray-200">
            uteach @ 2023. All rights reserved.
          </Text>

          <nav className="flex items-center gap-9">
            <LinkText href="" text="Terms" />
            <LinkText href="" text="Privacy" />
            <LinkText href="" text="Contact" />

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
