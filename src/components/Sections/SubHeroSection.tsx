import { HighlightedTitle, Icon, Text } from "@/components";
import Link from "next/link";

export function SubHeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-[44rem] ">
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
            preset="link"
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

      <div></div>
    </section>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <Icon name="check" className="mr-2" />

      <Text as="p" preset="paragraphMedium">
        {text}
      </Text>
    </div>
  );
}
