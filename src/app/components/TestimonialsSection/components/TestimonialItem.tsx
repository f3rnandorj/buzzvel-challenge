import { Text } from "@/components";
import Image, { StaticImageData } from "next/image";

export interface TestimonialItemProps {
  testimonial: string;
  name: string;
  role: string;
  imageUri: StaticImageData;
}

export function TestimonialItem({
  testimonial,
  name,
  role,
  imageUri,
}: TestimonialItemProps) {
  return (
    <div className="flex flex-col items-center h-[21.25rem] w-[19.375rem] md:h-[19.06rem] md:w-[25.75rem] p-4 md:p-8 shadow-lg gap-8 rounded-2xl">
      <Text as="p" preset="paragraphSmall">
        {testimonial}
      </Text>

      <div className="flex w-full items-center">
        <Image
          src={imageUri}
          alt="Image of witness"
          height={64}
          width={64}
          className="h-16 w-16 rounded-full object-cover mr-4"
        />

        <div className="flex flex-col ">
          <Text as="span" preset="paragraphSmall" className="text-black">
            {name}
          </Text>

          <Text as="span" preset="itemNormal" className="text-gray-light">
            {role}
          </Text>
        </div>
      </div>
    </div>
  );
}
