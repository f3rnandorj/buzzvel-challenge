import { Header } from "@/components";
import {
  ClientReviewCarouselSection,
  CommunitySection,
  FeaturesSection,
  FooterSection,
  GetInTouchSection,
  HeroSection,
  MetricsSection,
  SignUpSection,
  SubHeroSection,
  TestimonialsSection,
} from "./components";

export default function Home() {
  return (
    <div>
      <Header />

      <HeroSection />

      <SubHeroSection id="products" />

      <ClientReviewCarouselSection />

      <CommunitySection />

      <MetricsSection />

      <TestimonialsSection />

      <FeaturesSection id="solutions" />

      <SignUpSection />

      <GetInTouchSection id="pricing" />

      <FooterSection id="contact-us" />
    </div>
  );
}

export const metadata = {
  title: "Uteach - The platform for intelligent teaching",
  description:
    "Connect with students, organize your content and share knowledge with the best possible experience. Discover how Uteach can transform your teaching.",
  keywords: [
    "uteach",
    "online education",
    "teaching platform",
    "teachers",
    "online classes",
  ],
  authors: [{ name: "Fernando Henrique" }],
};
