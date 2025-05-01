"use client";

import { useRef } from "react";
import { Icon, Text } from "@/components";
import { SwiperRef } from "swiper/react";

import "swiper/css";
import { TestimonialsCarousel } from "./components/TestimonialsCarousel";

export function TestimonialsSection() {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className="flex flex-col h-[39rem] pt-20 space-y-20 w-screen relative left-1/2 -translate-x-1/2">
      <div className="flex w-full items-center justify-between max-w-[90rem]  mx-auto">
        <Text as="h2" preset="subHeader">
          What everyone says
        </Text>

        <div className="flex items-center justify-between gap-6">
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
  );
}
