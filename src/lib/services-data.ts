import type { FeatureCard } from "@/components/sections/feature-cards-grid";
import { SITE_IMAGES } from "@/lib/site-images";

export const SERVICES_CARDS: readonly FeatureCard[] = [
  {
    title: "Electrical Supply",
    description:
      "Quality electrical, mechanical, valve, and instrumentation products from trusted sources.",
    image: SITE_IMAGES.services.electrical,
    href: "#services",
  },
  {
    title: "Technical Support",
    description:
      "Expert guidance to help you choose the right solutions for your needs.",
    image: SITE_IMAGES.services.technical,
    href: "#services",
  },
  {
    title: "Pricing & Quotes",
    description: "Clear, competitive pricing with detailed quotations.",
    image: SITE_IMAGES.services.inventory,
    href: "#services",
  },
  {
    title: "Packaging & Docs",
    description:
      "Custom invoicing, delivery notes, and packaging for smooth logistics.",
    image: SITE_IMAGES.services.delivery,
    href: "#services",
  },
  {
    title: "Product Sourcing",
    description:
      "Quick sourcing of specialized products through our global network.",
    image: SITE_IMAGES.services.electrical,
    href: "#services",
  },
  {
    title: "Inventory (SMI)",
    description: "Smart inventory solutions to keep your supply consistent.",
    image: SITE_IMAGES.services.inventory,
    href: "#services",
  },
  {
    title: "On-Time Delivery",
    description: "Fast, reliable delivery to keep your project on track.",
    image: SITE_IMAGES.services.delivery,
    href: "#services",
  },
  {
    title: "Local Support",
    description: "Strong local expertise with globally aligned standards.",
    image: SITE_IMAGES.services.technical,
    href: "#services",
  },
] as const;
