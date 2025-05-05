import Link from "next/link";
import { Text, Button } from "@/components";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen" role="alert" aria-live="polite">
      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-8 lg:px-20 py-12 text-center">
        <div className="max-w-[90rem] mx-auto flex flex-col items-center gap-8">
          <Text as="h1" preset="header" className="text-primary">
            404
          </Text>

          <Text as="h2" preset="subHeader">
            Page Not Found
          </Text>

          <Text as="p" preset="paragraphNormal" className="max-w-[600px]">
            Oops! The page you are looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </Text>

          <div className="mt-8">
            <Link href="/" tabIndex={-1}>
              <Button
                title="Back to Home"
                size="XL"
                aria-label="Navigate back to homepage"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Page Not Found - Uteach",
  description: "The page you are looking for doesn't exist or has been moved.",
};
