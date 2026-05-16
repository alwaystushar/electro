import { ContactMainSection } from "@/components/contact/contact-main-section";
import { PageShell } from "@/components/layout/page-shell";
import { PageCenteredHero } from "@/components/sections/page-centered-hero";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export const metadata = {
  title: "Contact Us | Electrotech",
  description:
    "Get in touch with Electrotech for electrical and infrastructure solutions tailored to your business.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageCenteredHero
        id="contact-hero-heading"
        title="Contact Us"
        description="Efficient office support that lets you focus on what matters. We handle everything from administrative tasks to technical assistance, allowing you to advance your business."
      />
      <ContactMainSection />
      <TestimonialsSection backgroundColor="#EBEDFF"/>
    </PageShell>
  );
}
