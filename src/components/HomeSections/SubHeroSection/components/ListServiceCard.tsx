"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ServiceCard, ServiceCardProps } from "@/components";

export function ListServiceCard() {
  return (
    <>
      <div className="hidden sm:flex 2xl:flex absolute -bottom-30 -right-45 sm:-bottom-10 sm:right-4 md:-bottom-4 md:right-26 gap-4 ">
        {dataToMap.map((cardData, index) => (
          <ServiceCard key={index} {...cardData} />
        ))}
      </div>

      <div className="block sm:hidden 2xl:hidden ">
        <Swiper
          slidesPerView={2.5}
          slidesOffsetBefore={50}
          slidesOffsetAfter={70}
          className="absolute -top-25 -right-20 "
        >
          {dataToMap.map((cardData, index) => (
            <SwiperSlide key={index}>
              <ServiceCard {...cardData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

const dataToMap: ServiceCardProps[] = [
  {
    type: "Featured",
    title: "The map of mathematics",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    type: "Popular",
    title: "Design for how people think",
    text: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.",
  },
  {
    type: "New",
    title: "International & commercial law",
    text: "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.",
  },
];
