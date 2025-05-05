import { HighlightedTitle } from "@/components";

export function SubHeroHighlightedTitle() {
  return (
    <>
      <div className="hidden md:block">
        <HighlightedTitle
          className="top-[0.19rem] md:top-[0.9rem]"
          textPreset="subHeader"
          prevText="An "
          text="all-in-one"
          afterText={"app\nthat makes it easier"}
        />
      </div>
      <div className="md:hidden">
        <HighlightedTitle
          className="top-[0.19rem] md:top-[0.9rem]"
          textPreset="subHeader"
          prevText="An "
          text="all-in-one"
          afterText={"app that makes it\neasier"}
        />
      </div>
    </>
  );
}
