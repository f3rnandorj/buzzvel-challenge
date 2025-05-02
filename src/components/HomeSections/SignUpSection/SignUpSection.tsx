"use client";

import { images } from "@/assets";
import Image from "next/image";
import { SignUpCallToAction } from "./components/SignUpCallToAction";
import { useGetWindowWidth } from "@/hooks";

export function SignUpSection() {
  const { windowWidth } = useGetWindowWidth();

  return (
    <section className="flex min-h-[40.75rem] md:min-h-[48.75rem] items-center bg-yellow-app w-screen relative left-1/2 -translate-x-1/2 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col md:flex-row flex-1 h-full w-full items-center justify-center gap-6 relative">
        <Image
          src={
            windowWidth >= 768 ? images.signUpImageLeft : images.signUpImageTop
          }
          alt="Image with some little pictures of people"
          width={470}
          height={600}
          className="h-auto w-full object-contain md:object-fit md:h-[37.5rem] md:w-[29.375rem]"
        />

        <SignUpCallToAction />

        <Image
          src={
            windowWidth >= 768
              ? images.signUpImageRight
              : images.signUpImageBottom
          }
          alt="Image with some little pictures of people"
          width={470}
          height={600}
          className="h-auto w-full object-contain md:object-fit md:h-[37.5rem] md:w-[29.375rem]"
        />
      </div>
    </section>
  );
}
