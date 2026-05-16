"use client";

import { ChevronsRight, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { ServiceCard } from "@/components/home/service-card";
import { FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { SectionPanel } from "@/components/ui/section-panel";
import { SITE_IMAGES } from "@/lib/site-images";

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Electrical Infrastructure",
    description:
      "We design and execute robust electrical infrastructure solutions tailored for industrial, commercial, and institutional environments.",
    href: "#services",
    icon: ChevronsRight,
    image: SITE_IMAGES.services.electrical,
    imageAlt: "Electrical infrastructure and power systems",
  },
  {
    number: "02",
    title: "Industrial Automation",
    description:
      "Our automation systems improve operational efficiency, reduce downtime, and enable smarter control across industrial processes.",
    href: "#services",
    icon: ChevronsRight,
    image: SITE_IMAGES.services.automation,
    imageAlt: "Industrial automation control systems",
  },
  {
    number: "03",
    title: "Maintenance & Support",
    description:
      "We provide ongoing maintenance, inspections, and technical support to ensure maximum system performance and reliability.",
    href: "#services",
    icon: ChevronsRight,
    image: SITE_IMAGES.services.maintenance,
    imageAlt: "Technician providing electrical maintenance support",
  },
];

export function HomeServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="site-shell border-y-[0.07vw] border-y-[var(--e-border-soft)]"
      aria-labelledby="services-heading"
    >
      <SectionPanel gridLines={false} tone="light">
        <div onMouseLeave={() => setActiveIndex(0)}>
          <FadeUpBlurGroup
            stagger={0.12}
            className="grid grid-cols-12 items-stretch gap-[0.65vw] p-[var(--space-card-pad)] max-[900px]:gap-[var(--space-md)]"
          >
            {SERVICES.map((service, index) => (
              <FadeUpBlurItem
                key={service.number}
                className="col-span-4 flex h-full max-[900px]:col-span-12"
                onMouseEnter={() => setActiveIndex(index)}
                onFocusCapture={() => setActiveIndex(index)}
              >
                <ServiceCard
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  icon={service.icon}
                  isActive={activeIndex === index}
                  headingId={
                    service.number === "01" ? "services-heading" : undefined
                  }
                />
              </FadeUpBlurItem>
            ))}
          </FadeUpBlurGroup>
        </div>
      </SectionPanel>
    </section>
  );
}
