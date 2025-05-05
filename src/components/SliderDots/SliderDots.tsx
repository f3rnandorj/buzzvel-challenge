import { tailwindUtils } from "@/utils";

interface Props {
  activeIndex: number;
  length: number;
  className?: string;
  onDotClick: (index: number) => void;
  ariaLabel?: string;
}

export function SliderDots({
  activeIndex,
  length,
  className,
  onDotClick,
  ariaLabel = "Carousel navigation",
}: Props) {
  const { cn } = tailwindUtils;

  return (
    <div
      className={cn("flex items-center gap-2", className)}
      role="tablist"
      aria-label={ariaLabel}
    >
      {Array.from({ length }, (_, i) => i).map((index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            onClick={() => {
              onDotClick(index);
            }}
            className={`
              h-2 w-2 rounded-full transition-all duration-1000 ease-in-out cursor-pointer
              ${isActive ? "bg-secondary w-8" : "bg-white"}
              focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2
            `}
            aria-label={`Go to slide ${index + 1}`}
            aria-controls={`slide-${index}`}
            id={`slide-tab-${index}`}
          />
        );
      })}
    </div>
  );
}
