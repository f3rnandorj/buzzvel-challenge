import { MetricItem, MetricItemProps } from "./components/MetricItem";

export function MetricsSection() {
  return (
    <div className="relative w-screen left-[50%] right-[50%] mx-[-50vw]">
      <section className="min-h-[23.5rem] flex items-center bg-secondary w-screen ">
        <div className="grid sm:grid-cols-3 h-full w-full max-w-[90rem] mx-auto px-20 items-center justify-center py-12 sm:py-0 gap-12 sm:gap-0">
          {dataToMap.map((item) => (
            <MetricItem key={item.description} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

const dataToMap: MetricItemProps[] = [
  { iconName: "heart", value: "195", description: "user countries" },
  { iconName: "diamond", value: "1M", description: "valued teachers" },
  { iconName: "mortarboard", value: "17M", description: "happy students" },
];
