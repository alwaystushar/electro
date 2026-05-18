"use client";

import { FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SiteImage } from "@/components/ui/site-image";
import { SITE_IMAGES } from "@/lib/site-images";

const VALUES = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We maintain transparency, accountability, and professionalism in every project and client relationship.",
  },
  {
    number: "02",
    title: "Reliability",
    description:
      "Our clients depend on us for consistent performance, timely execution, and dependable technical support.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "We embrace modern technologies and efficient engineering practices to deliver smarter and future-ready solutions.",
  },
] as const;

export function HomeValuesSection() {
  return (
    <section className="site-shell" aria-labelledby="values-heading">
      <div className="border-x-[0.07vw] border-x-[var(--e-border-soft)] py-[8vw] max-[900px]:py-[12vw]">
        <div className="relative overflow-hidden rounded-[0.62vw] bg-[url('/img/bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[rgba(0,33,73,0.28)]" aria-hidden />

          <div className="relative grid min-h-[36vw] grid-cols-12 gap-[var(--space-2xl)] px-[2.6vw] py-[5.5vw] max-[900px]:min-h-0 max-[900px]:px-[4vw] max-[900px]:py-[8vw]">
            <FadeUpBlurGroup className="col-span-4 flex flex-col justify-between gap-[var(--space-3xl)] max-[900px]:col-span-12">
              <FadeUpBlurItem>
                <SectionKicker tone="light">Our values</SectionKicker>
              </FadeUpBlurItem>
              <FadeUpBlurItem>
                <SiteImage
                  src={SITE_IMAGES.values.panel}
                  alt="Team collaborating in a modern office"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full rounded-[0.82vw] object-cover max-[900px]:rounded-[2vw]"
                />
              </FadeUpBlurItem>
            </FadeUpBlurGroup>

            <div className="col-span-7 col-start-6 flex flex-col gap-[var(--space-2xl)] max-[900px]:col-span-12">
              <FadeUpBlurGroup className="flex max-w-[40vw] flex-col gap-[var(--space-lg)] max-[900px]:max-w-none">
                <FadeUpBlurItem>
                  <h2
                    id="values-heading"
                    className="text-[4.2vw] font-medium leading-[1.14] tracking-[-0.08vw] text-[var(--e-white)] max-[900px]:text-[7vw]"
                  >
                    The principles that power every project.
                  </h2>
                </FadeUpBlurItem>
                <FadeUpBlurItem>
                  <p className="text-body leading-[1.65] text-[rgba(255,255,255,0.72)]">
                    Our dedication to quality, safety, and reliability ensures every
                    project is executed with precision and professionalism.
                  </p>
                </FadeUpBlurItem>
              </FadeUpBlurGroup>

              <FadeUpBlurGroup stagger={0.1} className="flex flex-col">
                {VALUES.map((value, index) => (
                  <FadeUpBlurItem key={value.number}>
                    <div className="py-[var(--space-2xl)]">
                      <div className="flex flex-wrap items-baseline gap-x-[3vw] gap-y-[0.26vw]">
                        <span className="text-[1.8vw] font-medium leading-none text-[var(--e-text-light-blue)] max-[900px]:text-[3.2vw]">
                          {value.number}
                        </span>
                        <h3 className="text-[1.8vw] font-medium leading-none text-[var(--e-white)] max-[900px]:text-[3.2vw]">
                          {value.title}
                        </h3>
                      </div>
                      <p className="mt-[var(--space-md)] max-w-[34vw] text-body leading-[1.65] text-[rgba(255,255,255,0.65)] max-[900px]:max-w-none">
                        {value.description}
                      </p>
                    </div>
                    {index < VALUES.length - 1 ? (
                      <div
                        className="h-[0.07vw] bg-[rgba(255,255,255,0.18)]"
                        aria-hidden
                      />
                    ) : null}
                  </FadeUpBlurItem>
                ))}
              </FadeUpBlurGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
