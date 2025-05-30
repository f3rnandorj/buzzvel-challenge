"use client";

import { Icon, SliderDots } from "@/components";
import {
  ClientReviewItem,
  TestimonialCardProps,
} from "./components/ClientReviewItem";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

export function ClientReviewCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperRef>(null);

  function handleDotClick(index: number) {
    setActiveIndex(index);

    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index, 1000);
    }
  }

  return (
    <section
      className="w-full bg-[#f3ce49] my-6 md:my-20"
      aria-labelledby="client-review-title"
    >
      <h2 id="client-review-title" className="sr-only">
        Client Reviews
      </h2>
      <div className="flex items-center gap-4 max-w-[90rem] sm:px-8 lg:px-20 mx-auto relative ">
        <Icon
          onClick={() => swiperRef.current?.swiper.slidePrev(1000)}
          name="chevronLeft"
          color="text-white"
          size={48}
          aria-label="Previous slide"
          className="hidden md:hidden lg:block"
        />

        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          className="min-h-[50rem] sm:min-h-[44rem] lg:h-[30rem] w-full flex items-center relative -mb-18 sm:mb-0 lg:-my-20"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={250}
          aria-live="polite"
        >
          {dataToMap.map((item, index) => (
            <SwiperSlide
              key={index}
              className="my-4 sm:my-2"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${dataToMap.length}`}
            >
              <ClientReviewItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Icon
          onClick={() => swiperRef.current?.swiper.slideNext(1000)}
          name="chevronRight"
          color="text-secondary"
          size={48}
          aria-label="Next slide"
          className="hidden md:hidden lg:block"
        />

        <SliderDots
          activeIndex={activeIndex}
          length={dataToMap.length}
          className="absolute bottom-122 left-4 sm:bottom-150 sm:left-13 lg:bottom-26 lg:left-39 z-50"
          onDotClick={handleDotClick}
          ariaLabel="Client review slides"
        />
      </div>
    </section>
  );
}

const dataToMap: TestimonialCardProps[] = [
  {
    text: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
    author: "Marie Poirot",
    role: "Bigapp",
    alterText: "A image showing a girl smiling",
  },
  {
    text: "In hac habitasse platea dictumst. Vivamus nec est eu augue semper rutrum. Nullam congue diam sit amet erat ullamcorper, at tempor tellus consequat. Cras ultricies ligula sed.",
    author: "Marie Poirot",
    role: "Bigapp",
    alterText: "A image showing a girl smiling",
  },
  {
    text: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Curabitur aliquet quam id dui posuere.",
    author: "Marie Poirot",
    role: "Bigapp",
    alterText: "A image showing a girl smiling",
  },
  {
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis.",
    author: "Marie Poirot",
    role: "Bigapp",
    alterText: "A image showing a girl smiling",
  },
  {
    text: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor.",
    author: "Marie Poirot",
    role: "Bigapp",
    alterText: "A image showing a girl smiling",
  },
];
