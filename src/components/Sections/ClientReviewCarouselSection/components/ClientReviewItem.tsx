import { images } from "@/assets";
import { Text } from "@/components";
import { tailwindUtils } from "@/utils";
import Image from "next/image";

export interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  className?: string;
}

export function ClientReviewItem({
  text,
  author,
  role,
  className,
}: TestimonialCardProps) {
  const { cn } = tailwindUtils;

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-[36rem_1fr] h-full w-full max-w-[90rem] mx-auto p-6 items-center",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <Text as="p">{text}</Text>

        <Text as="p">
          {author},
          <br />
          <Text as="span" preset="paragraph" className="font-bold ">
            {role}
          </Text>
        </Text>
      </div>

      <div className="flex flex-row-reverse">
        <Image
          src={images.clientReviewImage}
          alt="Imagem de fundo mostrando um desktop"
          width={700}
          height={570}
          className="w-[650px] h-[670px]"
        />
      </div>
    </div>
  );
}
