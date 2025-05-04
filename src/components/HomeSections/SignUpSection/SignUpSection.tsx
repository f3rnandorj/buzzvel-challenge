"use client";

import { images } from "@/assets";
import Image from "next/image";
import { SignUpCallToAction } from "./components/SignUpCallToAction";
import { useGetWindowWidth } from "@/hooks";

export function SignUpSection() {
  const { windowWidth } = useGetWindowWidth();

  return (
    <section className="w-full bg-yellow-app py-8 md:py-12">
      <div className="max-w-[90rem] mx-auto px-4 flex flex-col md:flex-row   items-center justify-center gap-6 relative overflow-hidden">
        <Image
          src={
            windowWidth >= 1024 ? images.signUpImageLeft : images.signUpImageTop
          }
          alt="Image with some little pictures of people"
          className="h-auto w-full object-contain md:size-fit"
        />

        <SignUpCallToAction />

        <Image
          src={
            windowWidth >= 1024
              ? images.signUpImageRight
              : images.signUpImageBottom
          }
          alt="Image with some little pictures of people"
          className="h-auto w-full object-contain md:size-fit"
        />
      </div>
    </section>
  );
}
