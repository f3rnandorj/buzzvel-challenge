import { images } from "@/assets";
import { CallToActionLink, Icon, Text } from "@/components";
import Image from "next/image";

export function CommunitySection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-[44rem] ">
      <div>
        <Image
          src={images.communityImage}
          alt="Photos of students and people studying"
          width={600}
          height={650}
          className="w-[37.5rem] h-[40.625rem]"
        />
      </div>

      <div className="flex flex-col gap-8">
        <Text as="h2" preset="subHeader" className="relative inline-block">
          Meet{" "}
          <Text as="span" preset="subHeader" className="relative inline-block">
            international
            <Icon name="plane" size={64} className="absolute -top-11 right-4" />
          </Text>{" "}
          students & teachers
        </Text>

        <Text as="p" preset="paragraphNormal">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </Text>

        <CallToActionLink href="" text="Explore teachers and students" />
      </div>
    </section>
  );
}
