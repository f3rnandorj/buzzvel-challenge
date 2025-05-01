import { Button, Text, TextInput } from "@/components";

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

        <div className="flex flex-col gap-5">
          <TextInput
            label="Email"
            className="w-[31.25rem]"
            placeholder="Enter your email"
          />
          <TextInput
            as="textarea"
            label="Message"
            className="w-[31.25rem] h-[8.75rem]"
            placeholder="What are you say ?"
          />
        </div>

        <Button
          title="Request Demo"
          size="XL"
          className="w-[16.25rem] bg-[#111729] hover:bg-secondary-light"
        />
      </div>
    </section>
  );
}
