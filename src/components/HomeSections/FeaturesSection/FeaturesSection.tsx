import Image from "next/image";
import { images } from "@/assets";
import {
  CallToActionLink,
  HighlightedTitle,
  ServiceCard,
  Text,
} from "@/components";

export function FeaturesSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[37rem_1fr] gap-12 lg:gap-20 items-center h-[40rem] -mr-20 ml-auto mb-16">
      <div className="flex flex-col gap-8">
        <HighlightedTitle
          className="top-[0.9rem]"
          textPreset="subHeader"
          prevText="All the cool "
          text="features"
        />

        <Text as="p" preset="paragraphNormal">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </Text>

        <CallToActionLink href="" text="View all the features" />
      </div>

      <div className="relative">
        <Image
          src={images.featuresImage}
          alt="Imagem de fundo mostrando um desktop"
          width={600}
          height={500}
          className="flex flex-1 h-[31.2rem] w-[37.5rem]  -mt-10"
        />

        <div className="flex gap-4 absolute -top-3 left-14">
          <ServiceCard
            type="Popular"
            title="Design for how people think"
            text="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. "
          />
        </div>
      </div>
    </section>
  );
}
