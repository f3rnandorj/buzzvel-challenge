import { Text, TextProps } from "@/components";
import { tailwindUtils } from "@/utils";

interface Props {
  textPreset?: TextProps["preset"];
  text: string;
  prevText?: string;
  afterText?: string;
  className: string;
}

export function HighlightedTitle({
  textPreset = "header",
  text,
  prevText,
  afterText,
  className,
}: Props) {
  const { cn } = tailwindUtils;

  function renderTextWithLineBreaks(text?: string) {
    if (!text) return null;

    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    ));
  }

  return (
    <div>
      {prevText && (
        <Text as="span" className="align-middle" preset={textPreset}>
          {prevText}
        </Text>
      )}

      <div className={cn("relative inline-block mr-2 md:mr-3.5", className)}>
        <svg
          className="absolute -bottom-1 left-1 md:bottom-0 md:left-1 w-full h-[23px] z-0"
          viewBox="0 0 252 23"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#FB923C"
            strokeLinejoin="round"
            strokeWidth={10}
            d="M1 8.96c32.283-2.419 149.795-7.124 246 0-49.939 0-115.004.72-156.898 8.225"
          />
        </svg>

        <Text as="span" className="relative z-10 " preset={textPreset}>
          {text}
        </Text>
      </div>

      {afterText && (
        <Text as="span" className="align-middle" preset={textPreset}>
          {renderTextWithLineBreaks(afterText)}
        </Text>
      )}
    </div>
  );
}
