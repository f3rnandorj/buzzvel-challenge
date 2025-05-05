"use client";

import { useRef } from "react";
import { Icon, Text } from "@/components";
import { SwiperRef } from "swiper/react";
import { TestimonialsCarousel } from "./components/TestimonialsCarousel";
import { AnimatedArrowButton } from "./components/AnimatedArrowButton";

export function TestimonialsSection() {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className="w-full my-8 md:my-12">
      <div className="max-w-[90rem] px-4 sm:px-8 lg:px-20 mx-auto flex w-full items-center justify-between">
        <Text as="h2" preset="subHeader" className="mb-8 lg:mb-16">
          What everyone says
        </Text>

        <div className="items-center justify-between gap-6 hidden md:flex">
          <AnimatedArrowButton position="left">
            <Icon
              name="arrowLeftCircle"
              size={48}
              color="text-primary"
              onClick={() => swiperRef.current?.swiper.slidePrev(1000)}
            />
          </AnimatedArrowButton>

          <AnimatedArrowButton position="right">
            <Icon
              name="arrowRightCircle"
              size={48}
              color="text-primary"
              onClick={() => swiperRef.current?.swiper.slideNext(1000)}
            />
          </AnimatedArrowButton>
        </div>
      </div>

      <TestimonialsCarousel swiperRef={swiperRef} />
    </section>
  );
}
