import { tailwindUtils } from "@/utils";

interface Props {
  activeIndex: number;
  length: number;
  className?: string;
  onDotClick: (index: number) => void;
}

export function SliderDots({
  activeIndex,
  length,
  className,
  onDotClick,
}: Props) {
  const { cn } = tailwindUtils;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {Array.from({ length }, (_, i) => i).map((index) => (
        <button
          key={index}
          onClick={() => {
            console.log("pressionou");
            onDotClick(index);
          }}
          className={`
             h-2 w-2 rounded-full transition-all duration-1000 ease-in-out cursor-pointer
            ${index === activeIndex ? "bg-secondary w-8" : "bg-white "}
          `}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
