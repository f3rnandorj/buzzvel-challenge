import { Icon, Text } from "@/components";

export function SubHeroCheckItem({ text }: { text: string }) {
  return (
    <div className="flex sm:items-center">
      <Icon name="check" className="mr-2 pt-2 sm:pt-0" />

      <Text
        as="p"
        preset="paragraphNormal"
        className="text-[1.25rem] leading-[1.8]"
      >
        {text}
      </Text>
    </div>
  );
}
