import { MetricItem, MetricItemProps } from "./components/MetricItem";

export function MetricsSection() {
  return (
    <section className="w-full bg-secondary my-8 md:my-12">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-20 py-14 sm:py-0">
        <div className="grid sm:grid-cols-3 gap-14 sm:gap-0 min-h-[23.5rem] place-items-center text-center">
          {dataToMap.map((item) => (
            <MetricItem key={item.description} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

const dataToMap: MetricItemProps[] = [
  { iconName: "heart", value: 195, description: "user countries" },
  {
    iconName: "diamond",
    value: 1,
    measure: "M",
    description: "valued teachers",
  },
  {
    iconName: "mortarboard",
    value: 17,
    measure: "M",
    description: "happy students",
  },
];
