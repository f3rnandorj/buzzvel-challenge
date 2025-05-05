import { Text } from "@/components";

export function HeroSectionParagraph() {
  return (
    <Text as="p" className="text-base sm:text-[1.125rem]">
      <span className="hidden md:inline">
        Amet nunc diam orci duis ut sit diam arcu, nec. <br />
        Eleifend proin massa tincidunt viverra lectus pulvinar. <br />
        Nunc ipsum est pellentesque turpis ultricies.
      </span>
      <span className="hidden sm:inline md:hidden">
        Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
        tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
        ultricies.
      </span>
      <span className="inline sm:hidden">
        Amet nunc diam orci duis ut sit diam arcu, nec. <br />
        Eleifend proin massa tincidunt viverra lectus <br />
        pulvinar. Nunc ipsum est pellentesque turpis <br />
        ultricies.
      </span>
    </Text>
  );
}
