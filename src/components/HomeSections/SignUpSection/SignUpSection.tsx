import { images } from "@/assets";
import Image from "next/image";
import { SignUpCallToAction } from "./components/SignUpCallToAction";

export function SignUpSection() {
  return (
    <section className="h-[48.75rem] items-center bg-yellow-app w-screen relative left-1/2 -translate-x-1/2">
      <div className="flex flex-1 h-full w-full items-center justify-center gap-6 relative">
        <Image
          src={images.signUpImageLeft}
          alt="Logo"
          width={470}
          height={600}
          className="h-37.5rem w-29.375rem"
        />

        <SignUpCallToAction />

        <Image
          src={images.signUpImageRight}
          alt="Logo"
          width={470}
          height={600}
          className="h-37.5rem w-29.375rem"
        />
      </div>
    </section>
  );
}
