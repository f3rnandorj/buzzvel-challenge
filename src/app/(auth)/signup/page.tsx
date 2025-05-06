import { Text } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { SignUpForm } from "./components/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-secondary p-6">
      <div className="flex flex-col items-center gap-10 max-w-lg w-full">
        <Link href="/" className="focus-outline-primary">
          <Image
            src="/logoWhite.svg"
            alt="Uteach Logo"
            width={100}
            height={40}
            className="h-10 w-24"
            priority
          />
        </Link>

        <div className="w-full flex flex-col items-center gap-6">
          <Text
            as="p"
            preset="interParagraphNormal"
            className="text-gray-200 text-center mb-4"
          >
            Create your account to get started
          </Text>

          <SignUpForm />
        </div>
      </div>
    </main>
  );
}
