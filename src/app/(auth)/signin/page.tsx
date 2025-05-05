import { SignInForm, Text } from "@/components";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-secondary p-6">
      <div className="flex flex-col items-center gap-10 max-w-lg w-full">
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-100 focus:ring-offset-2 focus:ring-offset-secondary rounded"
        >
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
            Enter your credentials to access your account
          </Text>

          <SignInForm />
        </div>
      </div>
    </main>
  );
}
