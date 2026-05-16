"use client";

import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { SectionPanel } from "@/components/ui/section-panel";
import { SiteImage } from "@/components/ui/site-image";

type PageHeroSectionProps = {
  title: string;
  description: string;
  id?: string;
  image?: string;
  imageAlt?: string;
};

export function PageHeroSection({
  title,
  description,
  id,
  image,
  imageAlt = "",
}: PageHeroSectionProps) {
  return (
    <section
      className="site-shell pb-[var(--space-hero-y)]"
      aria-labelledby={id ?? "page-hero-heading"}
    >
      <SectionPanel>
        <div className="grid grid-cols-12">
          <FadeUpBlurGroup
            className={[
              "px-[var(--space-card-pad)] py-[4vw] max-[900px]:py-[6vw]",
              image
                ? "col-span-6 border-r-[0.07vw] border-r-[var(--e-border-soft)] max-[900px]:col-span-12 max-[900px]:border-r-0 max-[900px]:border-b-[0.07vw]"
                : "col-span-12",
            ].join(" ")}
          >
            <FadeUpBlurItem>
              <h1
                id={id ?? "page-hero-heading"}
                className="text-display max-w-[48vw] font-medium text-[var(--e-text-primary)] max-[900px]:max-w-none"
              >
                {title}
              </h1>
            </FadeUpBlurItem>
            <FadeUpBlurItem>
              <p className="mt-[var(--space-lg)] max-w-[42vw] text-body text-[var(--e-text-secondary)] max-[900px]:max-w-none">
                {description}
              </p>
            </FadeUpBlurItem>
          </FadeUpBlurGroup>
          {image ? (
            <FadeUpBlur className="col-span-6 max-[900px]:col-span-12">
              <SiteImage
                src={image}
                alt={imageAlt}
                width={1200}
                height={800}
                className="h-full min-h-[20vw] w-full object-cover"
              />
            </FadeUpBlur>
          ) : null}
        </div>
      </SectionPanel>
    </section>
  );
}
