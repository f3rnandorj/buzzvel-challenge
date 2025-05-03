import { Text } from "@/components";
import { GetInTouchForm } from "./components/GetInTouchForm";

export function GetInTouchSection() {
  return (
    <div className="relative w-screen left-[50%] right-[50%] mx-[-50vw]">
      <section className="flex min-h-[38.5rem] sm:min-h-[42.5rem] py-12 items-center bg-[#D9622B] w-screen px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col flex-1 h-full max-w-[90rem] w-full mx-auto items-center justify-center gap-8 relative">
          <Text as="h2" preset="subHeader" className="text-white">
            Ready for your next project?
          </Text>

          <Text
            as="p"
            preset="descriptionHeader"
            className="text-white text-center"
          >
            Sit elit feugiat turpis sed integer integer accumsan turpis.
          </Text>

          <GetInTouchForm />
        </div>
      </section>
    </div>
  );
}
