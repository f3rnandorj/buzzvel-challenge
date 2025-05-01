import { Text } from "@/components";
import { GetInTouchForm } from "./components/GetInTouchForm";

export function GetInTouchSection() {
  return (
    <section className="h-[42.5rem] items-center bg-[#D9622B] w-screen relative left-1/2 -translate-x-1/2">
      <div className="flex flex-col flex-1 h-full max-w-[90rem]  mx-auto items-center justify-center gap-8 relative">
        <Text as="h2" preset="subHeader" className="text-white">
          Ready for your next project?
        </Text>

        <Text as="p" preset="descriptionHeader" className="text-white">
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </Text>

        <GetInTouchForm />
      </div>
    </section>
  );
}
