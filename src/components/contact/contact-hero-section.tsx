import { PageHeroSection } from "@/components/sections/page-hero-section";
import { SITE_IMAGES } from "@/lib/site-images";

export function ContactHeroSection() {
  return (
    <PageHeroSection
      id="contact-hero-heading"
      title="Contact Us"
      description="Efficient office support that lets you focus on what matters. We handle everything from administrative tasks to technical assistance, allowing you to advance your business."
      image={SITE_IMAGES.contact.hero}
      imageAlt="Team collaborating in a modern office"
    />
  );
}
