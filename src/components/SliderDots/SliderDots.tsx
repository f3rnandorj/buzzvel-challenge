import { tailwindUtils } from "@/utils";

interface Props {
  activeIndex: number;
  length: number;
  className?: string;
}

export function SliderDots({ activeIndex, length, className }: Props) {
  const { cn } = tailwindUtils;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {Array.from({ length }, (_, i) => i).map((index) => (
        <span
          key={index}
          className={`
             h-2 w-2 rounded-full transition-all duration-1000 ease-in-out
            ${index === activeIndex ? "bg-secondary w-8" : "bg-white "}
          `}
        />
      ))}
    </div>
  );
}
