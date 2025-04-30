interface Props {
  activeIndex: number;
  length: number;
}

export function SliderDots({ activeIndex, length }: Props) {
  return (
    <div className="absolute bottom-20 left-[5.5rem] flex items-center gap-2">
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
