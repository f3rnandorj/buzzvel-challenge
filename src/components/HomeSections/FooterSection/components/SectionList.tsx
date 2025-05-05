import { Text } from "@/components";
import { ReactNode } from "react";

export interface SectionListProps {
  title: string;
  items: string[];
  CustomItem?: ReactNode;
  CustomItemPosition?: number;
}

export function SectionList({
  title,
  items,
  CustomItem,
  CustomItemPosition,
}: SectionListProps) {
  function renderItems() {
    const listItems = items.map((item, index) => (
      <ListItem key={`${item}-${index}`}>{item}</ListItem>
    ));

    if (CustomItem && typeof CustomItemPosition === "number") {
      listItems.splice(
        CustomItemPosition,
        0,
        <div key="custom-item">{CustomItem}</div>
      );
    } else if (CustomItem) {
      listItems.push(<div key="custom-item">{CustomItem}</div>);
    }

    return listItems;
  }

  return (
    <div className="space-y-6">
      <Text as="h2" preset="item" className="text-white">
        {title}
      </Text>

      <ul className="space-y-6">{renderItems()}</ul>
    </div>
  );
}

function ListItem({ children }: { children: ReactNode }) {
  return (
    <Text as="li" preset="itemNormal" className="text-gray-200 ">
      {children}
    </Text>
  );
}
