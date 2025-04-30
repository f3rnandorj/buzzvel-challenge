import { Button, HighlightedTitle, Icon, Text } from "@/components";
import { images } from "@/assets";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-[44rem] ">
      <div className="flex  flex-col order-1 lg:order-none gap-8">
        <HighlightedTitle
          className="top-5"
          text="Teach"
          afterText="students worldwide"
        />

        <Text as="p">
          Amet nunc diam orci duis ut sit diam arcu, nec. <br />
          Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est
          pellentesque turpis ultricies.
        </Text>

        <div className="flex pb-12">
          <Button title="Sign Up Now" size="XL" />
          <Button
            leftIcon={{ name: "playCircle", color: "secondary-light" }}
            title="View Demo"
            size="XL"
            variant="transparent"
          />
        </div>

        <div className="flex items-center justify-around">
          <Text as="span" preset="item" className="text-gray-light">
            Trusted by
            <br />
            leading companies
          </Text>

          <Icon name="brand4" size={32} />
          <Icon name="brand5" size={32} />
          <Icon name="brand3" size={32} />
          <Icon name="brand2" size={32} />
          <Icon name="brand1" size={32} />
        </div>
      </div>

      <div className="order-2 lg:order-none flex justify-center lg:justify-end">
        <Image
          src={images.heroImage}
          alt="Imagem de uma troca de mensagens entre professor e estudante"
          width={625}
          height={545}
        />
      </div>
    </section>
  );
}
