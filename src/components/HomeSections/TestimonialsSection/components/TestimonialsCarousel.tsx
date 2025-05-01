import { RefObject, useEffect, useState } from "react";
import { images } from "@/assets";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import { TestimonialItem, TestimonialItemProps } from "./TestimonialItem";

interface Props {
  swiperRef: RefObject<SwiperRef | null>;
}

export function TestimonialsCarousel({ swiperRef }: Props) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const getSlidesPerView = () => {
    if (windowWidth < 830) return 1;
    if (windowWidth < 1024) return 2;
    if (windowWidth < 1280) return 2;
    if (windowWidth < 1700) return 3;
    if (windowWidth < 1920) return 4;
    if (windowWidth < 2560) return 5;
    if (windowWidth < 3440) return 6;
    return 7;
  };

  const getSpaceBetween = () => {
    if (windowWidth < 640) return 16;
    if (windowWidth < 768) return 16;
    if (windowWidth < 1024) return 20;
    if (windowWidth < 1536) return 24;
    if (windowWidth < 1920) return 40;
    if (windowWidth < 2560) return 60;
    if (windowWidth < 3440) return 80;
    return 100;
  };

  const getOffset = () => {
    if (windowWidth < 640) return 0;
    if (windowWidth < 768) return 10;
    if (windowWidth < 1024) return 20;
    if (windowWidth < 1280) return 40;
    if (windowWidth < 1366) return 60;
    if (windowWidth < 1440) return 80;
    if (windowWidth < 1536) return 100;
    if (windowWidth < 1700) return 150;
    if (windowWidth < 1920) return 200;
    if (windowWidth < 2560) return 300;
    if (windowWidth < 3440) return 350;
    return 400;
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex ">
      <Swiper
        ref={swiperRef}
        className="w-full h-[20rem] ml-auto"
        slidesPerView={getSlidesPerView()}
        spaceBetween={getSpaceBetween()}
        slidesOffsetBefore={getOffset()}
        slidesOffsetAfter={getOffset()}
      >
        {testimonialsToMap.map((testimonial) => (
          <SwiperSlide key={testimonial.testimonial}>
            <TestimonialItem {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const testimonialsToMap: TestimonialItemProps[] = [
  {
    testimonial:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    name: "Hellen Jimmy",
    role: "Financial Counselor",
    imageUri: images.userThumb,
  },
  {
    testimonial:
      "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultricies ultricies neque, hac ultricies dolor.",
    name: "Ralph Edwards",
    role: "Math Teacher",
    imageUri: images.userThumb1,
  },
  {
    testimonial:
      "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    name: "Hellena John",
    role: "Psychology Student",
    imageUri: images.userThumb2,
  },
  {
    testimonial:
      "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
    name: "David Oshodi",
    role: "Manager",
    imageUri: images.userThumb3,
  },
  {
    testimonial:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    name: "Charolette Hanlin",
    role: "CEO",
    imageUri: images.userThumb4,
  },
];
