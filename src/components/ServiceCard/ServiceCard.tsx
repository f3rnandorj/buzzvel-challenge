import { Button } from "@/components/Button/Button";
import { Text } from "@/components/Text/Text";
import { tailwindUtils } from "@/utils";

type CardStatus = "Featured" | "Popular" | "New";

export interface ServiceCardProps {
  type: CardStatus;
  title: string;
  text: string;
  onClick?: () => void;
}

export function ServiceCard({ text, title, type, onClick }: ServiceCardProps) {
  const { cn } = tailwindUtils;

  function getCardColor(): string {
    switch (type) {
      case "Featured":
        return "bg-purple-100 text-purple-800";
      case "Popular":
        return "bg-blue-100 text-blue-800";
      case "New":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }

  return (
    <div className="flex flex-col w-[10rem] sm:w-[12.5rem] h-[14.5rem] shadow-lg bg-white p-4 rounded-lg gap-2">
      <div className={cn("w-fit px-2 rounded", `${getCardColor()}`)}>
        <Text as="span" preset="itemSmall">
          {type}
        </Text>
      </div>

      <Text as="h3" preset="paragraphMedium">
        {title}
      </Text>

      <Text as="p" preset="itemSmall" className="flex flex-1">
        {text}
      </Text>

      <Button
        title="Take Lesson"
        variant="outline"
        className=" border-secondary-light"
        textColor="text-secondary-light"
        onClick={onClick}
      />
    </div>
  );
}
