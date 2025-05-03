"use client";

import { images } from "@/assets";
import Image from "next/image";
import { SignUpCallToAction } from "./components/SignUpCallToAction";
import { useGetWindowWidth } from "@/hooks";

export function SignUpSection() {
  const { windowWidth } = useGetWindowWidth();

  return (
    <div className="relative w-screen left-[50%] right-[50%] mx-[-50vw]">
      <section className="flex min-h-[40.75rem] md:min-h-[48.75rem] items-center bg-yellow-app px-4 sm:px-0">
        <div className="flex flex-col md:flex-row flex-1 h-full w-full items-center justify-center gap-6 relative overflow-hidden">
          <Image
            src={
              windowWidth >= 1024
                ? images.signUpImageLeft
                : images.signUpImageTop
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
    </div>
  );
}
