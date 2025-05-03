import { images } from "@/assets";
import { CallToActionLink, Icon, Text } from "@/components";
import Image from "next/image";

export function CommunitySection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-11 lg:gap-20 items-center min-h-[44rem] w-full pt-4 md:pt-0 mb-12 md:mb-4">
      <div className="order-2 sm:order-1">
        <Image
          src={images.communityImage}
          alt="Photos of students and people studying"
          width={600}
          height={650}
          className="w-full h-full md:w-[37.5rem] md:h-[40.625rem]"
        />
      </div>

      <div className="flex flex-col gap-6 md:gap-8 order-1 sm:order-2">
        <Text as="h2" preset="subHeader" className="relative inline-block">
          Meet{" "}
          <Text as="span" preset="subHeader" className="relative inline-block">
            international
            <Icon
              name="plane"
              className="size-6 md:size-16 absolute -top-4 right-2 md:-top-11 md:right-4"
            />
          </Text>{" "}
          students & teachers
        </Text>

        <Text as="p" preset="paragraphNormal">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </Text>

        <CallToActionLink
          href=""
          text="Explore teachers and students"
          className="pt-2 md:pt-4"
        />
      </div>
    </section>
  );
}
