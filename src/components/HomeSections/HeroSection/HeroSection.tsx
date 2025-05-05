import { Button, HighlightedTitle, Icon, Text } from "@/components";
import { images } from "@/assets";
import Image from "next/image";
import { HeroSectionParagraph } from "./components/HeroSectionParagraph";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full pb-8 md:pb-12">
      <div className="max-w-[90rem] px-4 sm:px-8 lg:px-20 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex flex-col lg:order-none gap-8">
          <HighlightedTitle
            className="top-2.5 md:top-5"
            text="Teach"
            afterText="students worldwide"
          />

          <HeroSectionParagraph />

          <div className="flex lg:pb-12">
            <Link href="/signup">
              <Button
                title="Sign Up Now"
                size="XL"
                className="flex flex-1 lg:block lg:flex-none"
              />
            </Link>
            <Button
              leftIcon={{ name: "playCircle", color: "secondary-light" }}
              title="View Demo"
              size="XL"
              variant="transparent"
              className="flex flex-1 lg:block lg:flex-none"
            />
          </div>

          <div className="sm:flex items-center justify-around">
            <Text as="span" preset="item" className="text-gray-light">
              <span className="hidden sm:inline ">
                Trusted by
                <br />
                leading companies
              </span>
              <span className="inline sm:hidden">
                Trusted by leading companies
              </span>
            </Text>

            <div className="flex items-center gap-6 mt-4">
              <Icon name="brand4" size={32} />
              <Icon name="brand5" size={32} />
              <Icon name="brand3" size={32} />
              <Icon name="brand2" size={32} />
              <Icon name="brand1" size={32} />
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={images.heroImage}
            alt="Image of an exchange of messages between teacher and student"
            width={625}
            height={545}
          />
        </div>
      </div>
    </section>
  );
}
