import { Icon, SliderDots } from "@/components";
import { ClientReviewItem } from "./components/ClientReviewItem";

export function ClientReviewCarouselSection() {
  return (
    <section className="h-[35rem] items-center bg-yellow-app w-screen relative left-1/2 -translate-x-1/2">
      <div className="flex flex-1 h-full w-full max-w-[90rem] mx-auto items-center gap-6 relative">
        <Icon name="chevronLeft" color="text-white" size={48} />

        <ClientReviewItem
          text="Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo."
          author="Marie Poirot"
          role="Bigapp"
        />

        <Icon name="chevronRight" size={48} />

        <SliderDots activeIndex={0} length={3} />
        <div className=" bottom-20 left-[5.5rem]"></div>
      </div>
    </section>
  );
}
