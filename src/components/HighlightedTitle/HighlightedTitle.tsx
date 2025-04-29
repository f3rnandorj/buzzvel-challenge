import { Text } from "@/components";

export function HighlightedTitle({
  text,
  subtext,
}: {
  text: string;
  subtext: string;
}) {
  return (
    <div>
      <div className="relative top-5 inline-block mr-2">
        <svg
          className="absolute bottom-0 left-0 w-full h-[23px] z-0"
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

        <Text as="span" className="relative z-10 " preset="header">
          {text}
        </Text>
      </div>

      <Text as="span" className="align-middle" preset="header">
        {subtext}
      </Text>
    </div>
  );
}
