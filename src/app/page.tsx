import {
  ClientReviewCarouselSection,
  Header,
  HeroSection,
  SubHeroSection,
  CommunitySection,
  MetricsSection,
  TestimonialsSection,
  FeaturesSection,
  SignUpSection,
  GetInTouchSection,
  FooterSection,
} from "@/components";

export default function Home() {
  return (
    <div>
      <Header />

      <HeroSection />

      <SubHeroSection />

      <ClientReviewCarouselSection />

      <CommunitySection />

      <MetricsSection />

      <TestimonialsSection />

      <FeaturesSection />

      <SignUpSection />

      <GetInTouchSection />

      <FooterSection />
    </div>
  );
}

export const metadata = {
  title: "Uteach - A plataforma para ensinar de forma inteligente",
  description:
    "Conecte-se com alunos, organize seu conteúdo e compartilhe conhecimento com a melhor experiência possível. Descubra como a Uteach pode transformar seu ensino.",
  keywords: [
    "uteach",
    "educação online",
    "plataforma de ensino",
    "professores",
    "aulas online",
  ],
  authors: [{ name: "Fernando Henrique" }],
};
