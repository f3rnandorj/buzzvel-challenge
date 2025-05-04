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
    <section className="w-full my-8 md:my-12 ">
      <div className="max-w-[90rem] px-4 sm:px-8 lg:px-20 mx-auto grid grid-cols-1 2xl:grid-cols-[37rem_1fr] gap-12 lg:gap-20 items-center">
        <div className="flex flex-col gap-6 md:gap-8 ">
          <HighlightedTitle
            containerClassName="flex flex-wrap items-center gap-x-2"
            textPreset="subHeader"
            prevText="All the cool "
            text="features"
          />

          <Text as="p" preset="paragraphNormal">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
            ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
            pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
            ullamcorper non viverra a, neque orci.
          </Text>

          <CallToActionLink
            href=""
            text="View all the features"
            className="pt-3 pb-4 sm:pb-0"
          />
        </div>

        <div className="relative overflow-x-hidden -my-10 md:my-12 -ml-8 md:ml-0 -mr-20 md:mr-0">
          <Image
            src={images.featuresImage}
            alt="Image showing a desktop"
            width={600}
            height={500}
            className="h-full w-full "
          />

          <div className="flex gap-4 absolute -top-3.5 left-7.5 sm:top-11.5 sm:left-10">
            <ServiceCard
              type="Popular"
              title="Design for how people think"
              text="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
