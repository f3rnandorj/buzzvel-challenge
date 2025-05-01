import { Text } from "@/components";

export function BetaItem({ text }: { text: string }) {
  return (
    <Text
      as="li"
      preset="itemNormal"
      className="flex items-center gap-1 text-white"
    >
      {text}
      <Text
        as="span"
        preset="itemNormal"
        className="text-xs text-purple-800 bg-purple-100 px-2 py-1 ml-2 rounded"
      >
        BETA
      </Text>
    </Text>
  );
}
