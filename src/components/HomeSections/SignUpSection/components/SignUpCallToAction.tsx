import { Button, Text } from "@/components";

export function SignUpCallToAction() {
  return (
    <div className="flex flex-col items-center gap-8 w-[37.5rem] text-center">
      <Text as="h2" preset="subHeader">
        Join a world of learning
      </Text>

      <Text as="p" preset="paragraphNormal">
        Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
        elit et fringilla habitant ut facilisi.
      </Text>

      <Button title="Sign Up Now" className="w-[15rem]" size="XL" />
    </div>
  );
}
