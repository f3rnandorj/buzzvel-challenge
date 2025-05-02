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
    <section className="grid grid-cols-1 lg:grid-cols-[37rem_1fr] gap-12 lg:gap-20 items-center min-h-[40rem] lg:-mr-20 lg:ml-auto lg:mb-16">
      <div className="flex flex-col gap-6 md:gap-8 ">
        <HighlightedTitle
          containerClassName="flex flex-wrap items-center gap-x-2"
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

        <CallToActionLink
          href=""
          text="View all the features"
          className="pt-3 pb-4 sm:pb-0"
        />
      </div>

      <div className="relative -ml-7 -mr-30 sm:-ml-7 sm:-mr-30">
        <Image
          src={images.featuresImage}
          alt="Imagem de fundo mostrando um desktop"
          width={600}
          height={500}
          className="flex flex-1 h-[28.75rem] w-[28.5rem] sm:h-[31.2rem] sm:w-[37.5rem] -mt-10"
        />

        <div className="flex gap-4 absolute -top-8 left-8 sm:-top-3 sm:left-14">
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
