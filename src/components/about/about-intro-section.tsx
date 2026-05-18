"use client";

import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { SiteImage } from "@/components/ui/site-image";
import { SITE_IMAGES } from "@/lib/site-images";

export function AboutIntroSection() {
  return (
    <section
      className="site-shell border-y-[0.07vw] border-y-[var(--e-border-soft)]"
      aria-labelledby="about-intro-heading"
    >
      <div className="grid min-h-[30vw] grid-cols-12 items-stretch border-x-[0.07vw] border-[var(--e-border-soft)] max-[900px]:min-h-0">
        <FadeUpBlurGroup className="col-span-6 flex flex-col justify-center px-[var(--space-card-pad)] py-[5vw] max-[900px]:col-span-12 max-[900px]:py-[8vw]">
          <FadeUpBlurItem>
            <h2
              id="about-intro-heading"
              className="text-display font-medium leading-[0.95] tracking-[-0.28vw] text-[var(--e-text-primary)] max-[900px]:tracking-[-0.12vw]"
            >
              About Us
            </h2>
          </FadeUpBlurItem>
          <FadeUpBlurItem>
            <p className="mt-[var(--space-xl)] max-w-[34vw] text-body leading-[1.65] text-[var(--e-text-secondary)] max-[900px]:mt-[var(--space-lg)] max-[900px]:max-w-none">
              Electrotech specializes in delivering high-quality electrical and
              infrastructure solutions tailored to modern industrial and commercial
              needs. With a strong focus on precision, safety, and innovation, we
              help businesses build reliable systems that power long-term growth and
              operational excellence.
            </p>
          </FadeUpBlurItem>
        </FadeUpBlurGroup>

        <FadeUpBlur className="relative col-span-6 min-h-[30vw] max-[900px]:col-span-12 max-[900px]:min-h-[55vw]">
          <SiteImage
            src={SITE_IMAGES.about.team}
            alt="Team collaborating in a modern workspace"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </FadeUpBlur>
      </div>
    </section>
  );
}
