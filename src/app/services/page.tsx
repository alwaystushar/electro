import { PageShell } from "@/components/layout/page-shell";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCardsGrid } from "@/components/sections/feature-cards-grid";
import { PageCenteredHero } from "@/components/sections/page-centered-hero";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { SERVICES_CARDS } from "@/lib/services-data";

export const metadata = {
  title: "Services | Electrotech",
  description:
    "Electrical, mechanical, and automation solutions tailored to industrial needs from Electrotech International.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageCenteredHero
        id="services-hero-heading"
        title="Services"
        description="At Electrotech International, we deliver electrical, mechanical, and automation solutions tailored to industrial needs—combining quality products, technical expertise, and reliable service at every stage."
      />
      <FeatureCardsGrid
        kicker="Our services"
        heading="What We Offer"
        intro="We offer comprehensive administrative support to manage tasks like scheduling, data entry, and document handling."
        cards={SERVICES_CARDS}
        columns={4}
        variant="service"
        showImages={false}
      />
      <TestimonialsSection />
      <CtaSection />
    </PageShell>
  );
}
