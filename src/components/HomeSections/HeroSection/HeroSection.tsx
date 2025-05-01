import { Button, HighlightedTitle, Icon, Text } from "@/components";
import { images } from "@/assets";
import Image from "next/image";
import { HeroSectionParagraph } from "./components/HeroSectionParagraph";

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-[44rem] mb-22 sm:mb-0">
      <div className="flex  flex-col order-1 lg:order-none gap-8">
        <HighlightedTitle
          className="top-2.5 md:top-5"
          text="Teach"
          afterText="students worldwide"
        />

        <HeroSectionParagraph />

        <div className="flex lg:pb-12">
          <Button title="Sign Up Now" size="XL" />
          <Button
            leftIcon={{ name: "playCircle", color: "secondary-light" }}
            title="View Demo"
            size="XL"
            variant="transparent"
          />
        </div>

        <div className="sm:flex items-center justify-around">
          <Text as="span" preset="item" className="text-gray-light">
            <span className="hidden md:inline"></span>
            <span className="hidden sm:inline md:hidden">
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

      <div className="order-2 lg:order-none flex justify-center lg:justify-end">
        <Image
          src={images.heroImage}
          alt="Image of an exchange of messages between teacher and student"
          width={625}
          height={545}
        />
      </div>
    </section>
  );
}
