import { HighlightedTitle, Icon, Text } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/assets";
import { ServiceCard } from "./components/ServiceCard";

export function SubHeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[30.625rem_1fr]   items-center h-[44rem] -mr-20 ml-auto">
      <div className="flex flex-col gap-8">
        <HighlightedTitle
          className="top-3.5"
          textPreset="subHeader"
          prevText="An "
          text="all-in-one"
          afterText={"app\nthat makes it easier"}
        />

        <div>
          <CheckItem text="Est et in pharetra magna adipiscing ornare aliquam." />
          <CheckItem text="Tellus arcu sed consequat ac velit ut eu blandit." />
          <CheckItem text="Ullamcorper ornare in et egestas dolor orci." />
        </div>

        <Link
          href=""
          className="flex group items-center self-start gap-3 hover:text-primary"
        >
          <Text
            as="span"
            preset="paragraphMedium"
            className="text-secondary-light group-hover:text-primary"
          >
            Find more about the app
          </Text>
          <Icon
            name="arrowRight"
            className="text-secondary-light hover:cursor-pointer group-hover:text-primary"
          />
        </Link>
      </div>

      <div className="relative">
        <Image
          src={images.subHeroImage}
          alt="Imagem de fundo mostrando um desktop"
          width={700}
          height={570}
          className="flex flex-1 h-full w-full -ml-10 mr-auto"
        />

        <div className="flex gap-4 absolute -bottom-4 right-26">
          <ServiceCard
            type="Featured"
            title="The map of mathematics"
            text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          />
          <ServiceCard
            type="Popular"
            title="Design for how people think"
            text="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. "
          />
          <ServiceCard
            type="New"
            title="International & commercial law"
            text="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui. "
          />
        </div>
      </div>
    </section>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <Icon name="check" className="mr-2" />

      <Text as="p" preset="paragraphNormal">
        {text}
      </Text>
    </div>
  );
}
