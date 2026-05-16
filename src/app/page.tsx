import { PageShell } from "@/components/layout/page-shell";
import { CtaSection } from "@/components/sections/cta-section";
import { HomeCoverSection } from "@/components/home/home-cover";
import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeMissionSection } from "@/components/home/home-mission-section";
import { HomeServicesSection } from "@/components/home/home-services-section";
import { HomeValuesSection } from "@/components/home/home-values-section";
import { HomeWhatWeDoSection } from "@/components/home/home-what-we-do-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <PageShell>
      <HomeHeroSection />
      <HomeCoverSection />
      <HomeWhatWeDoSection />
      <HomeServicesSection />
      <HomeMissionSection />
      <HomeValuesSection />
      <TestimonialsSection />
      <CtaSection />
    </PageShell>
  );
}
