import { MetricItem, MetricItemProps } from "./components/MetricItem";

export function MetricsSection() {
  return (
    <section className="h-[23.5rem] items-center bg-secondary w-screen relative left-1/2 -translate-x-1/2">
      <div className="grid grid-cols-3 h-full w-full max-w-[90rem] mx-auto px-20 items-center justify-center">
        {dataToMap.map((item) => (
          <MetricItem key={item.description} {...item} />
        ))}
      </div>
    </section>
  );
}

const dataToMap: MetricItemProps[] = [
  { iconName: "heart", value: "195", description: "user countries" },
  { iconName: "diamond", value: "1M", description: "valued teachers" },
  { iconName: "mortarboard", value: "17M", description: "happy students" },
];
