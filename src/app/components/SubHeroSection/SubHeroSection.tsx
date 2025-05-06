import { CallToActionLink, Text } from "@/components";
import Image from "next/image";
import { images } from "@/assets";
import { SubHeroHighlightedTitle } from "./components/SubHeroHighlightedTitle";
import { SubHeroCheckItem } from "./components/SubHeroCheckItem";
import { ListServiceCard } from "./components/ListServiceCard";

interface Props {
  id: string;
}

export function SubHeroSection({ id }: Props) {
  return (
    <section id={id} className="w-full my-8 md:my-12">
      <div className="max-w-[90rem] px-4 sm:px-8 lg:px-20 mx-auto grid grid-cols-1 2xl:grid-cols-[30.625rem_1fr] items-center -mb-20 sm:mb-0">
        {/* Texts */}
        <div className="flex flex-col gap-8">
          <SubHeroHighlightedTitle />

          <Text as="p" preset="paragraphNormal" className="inline sm:hidden">
            Sit elit feugiat turpis sed integer integer accumsan
            <br />
            turpis. Sed suspendisse nec lorem mauris.
            <br />
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </Text>

          <div>
            {checkItemTextsToMap.map((text, index) => (
              <SubHeroCheckItem key={index} text={text} />
            ))}
          </div>

          <CallToActionLink href="" text="Find more about the app" />
        </div>

        {/* Image with Service Cards */}
        <div className="relative overflow-visible -ml-24 sm:mx-0">
          <Image
            src={images.subHeroImage}
            alt="Imagem de fundo mostrando um desktop"
            width={700}
            height={600}
            className="flex flex-1 h-full"
          />

          <ListServiceCard />
        </div>
      </div>
    </section>
  );
}

const checkItemTextsToMap = [
  "Est et in pharetra magna adipiscing ornare aliquam.",
  "Tellus arcu sed consequat ac velit ut eu blandit.",
  "Ullamcorper ornare in et egestas dolor orci.",
];
