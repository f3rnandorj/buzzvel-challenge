import { Text } from "@/components";
import { GetInTouchForm } from "./components/GetInTouchForm";

interface Props {
  id: string;
}

export function GetInTouchSection({ id }: Props) {
  return (
    <section id={id} className="w-full bg-[#D9622B] py-12 md:py-22">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-20 flex  items-center flex-col justify-center gap-8 relative">
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
  );
}
