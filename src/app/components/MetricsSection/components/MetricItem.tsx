import { Icon, IconProps, NumberTicker, Text } from "@/components";

export interface MetricItemProps {
  iconName: IconProps["name"];
  value: number;
  measure?: string;
  description: string;
}

export function MetricItem({
  description,
  iconName,
  value,
  measure,
}: MetricItemProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Icon name={iconName} color="text-yellow-app" size={64} />

      <Text as="h2" preset="header" className="text-yellow-app font-extrabold">
        <NumberTicker
          value={value}
          className="text-yellow-app font-extrabold"
        />
        {measure && <span>{measure}</span>}
      </Text>

      <Text as="span" className="text-yellow-app">
        {" "}
        {description}
      </Text>
    </div>
  );
}
