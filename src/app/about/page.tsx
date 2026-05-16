import { AboutContactSection } from "@/components/about/about-contact-section";
import { AboutHistorySection } from "@/components/about/about-history-section";
import { AboutIntroSection } from "@/components/about/about-intro-section";
import { AboutSpecializeSection } from "@/components/about/about-specialize-section";
import { PageShell } from "@/components/layout/page-shell";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export const metadata = {
  title: "About Us | Electrotech",
  description:
    "Learn about Electrotech's history, expertise, and commitment to reliable electrical infrastructure solutions.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutIntroSection />
      <AboutSpecializeSection />
      <AboutHistorySection />
      <TestimonialsSection backgroundColor="#EBEDFF" />
      <AboutContactSection />
    </PageShell>
  );
}
