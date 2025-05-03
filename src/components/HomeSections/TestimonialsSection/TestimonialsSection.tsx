"use client";

import { useRef } from "react";
import { Icon, Text } from "@/components";
import { SwiperRef } from "swiper/react";

import "swiper/css";
import { TestimonialsCarousel } from "./components/TestimonialsCarousel";

export function TestimonialsSection() {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="relative w-screen left-[50%] right-[50%] mx-[-50vw]">
      <section className="flex flex-col min-h-[33rem] md:min-h-[39rem] pt-12 md:pt-20 space-y-8 md:space-y-20 px-4">
        <div className="flex w-full items-center justify-between max-w-[90rem] mx-auto sm:px-8 lg:px-20">
          <Text as="h2" preset="subHeader">
            What everyone says
          </Text>

          <div className="items-center justify-between gap-6 hidden md:flex">
            <Icon
              name="arrowLeftCircle"
              size={48}
              color="text-primary"
              onClick={() => swiperRef.current?.swiper.slidePrev(1000)}
            />
            <Icon
              name="arrowRightCircle"
              size={48}
              color="text-primary"
              onClick={() => swiperRef.current?.swiper.slideNext(1000)}
            />
          </div>
        </div>

        <TestimonialsCarousel swiperRef={swiperRef} />
      </section>
    </div>
  );
}
