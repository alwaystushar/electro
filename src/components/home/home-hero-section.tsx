"use client";

import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/site-routes";
import { SiteImage } from "@/components/ui/site-image";
import { SITE_IMAGES } from "@/lib/site-images";

export function HomeHeroSection() {
  return (
    <section className="site-shell border-b-[0.07vw] border-b-[var(--e-border-soft)]">
      <div className="overflow-hidden border-l-[0.07vw] border-l-[var(--e-border-soft)] border-r-[0.07vw] border-r-[var(--e-border-soft)] bg-(--e-bg-light)">
        <div className="grid grid-cols-12">
          <div className="col-span-8 border-r-[0.07vw] border-r-(--e-border-soft) p-[3vw] pt-[8vw] max-[900px]:col-span-12 max-[900px]:border-r-0 max-[900px]:border-b-[0.07vw] max-[900px]:p-[4vw] max-[900px]:pt-[10vw]">
            <FadeUpBlurGroup
              animateOnMount
              className="flex min-h-[20vw] flex-col justify-between gap-[6vw] max-[900px]:min-h-0 max-[900px]:gap-[8vw]"
            >
              <div className="flex flex-col gap-[2vw] max-[900px]:gap-[4vw]">
                <FadeUpBlurItem>
                  <h1 className="hero-split-target hero-balance text-display w-[40vw] font-medium text-foreground max-[900px]:w-full">
                    With Reliable
                    <br />
                    Electrical Solutions
                  </h1>
                </FadeUpBlurItem>

                <FadeUpBlurItem>
                  <p className="text-body w-[41vw] text-(--e-text-secondary) max-[900px]:w-full">
                    Electrotech delivers advanced electrical and infrastructure
                    solutions designed for modern industrial, commercial, and
                    large-scale development projects. From planning to execution,
                    we ensure every system operates with precision, safety, and
                    long-term reliability.
                  </p>
                </FadeUpBlurItem>
              </div>

              <FadeUpBlurItem>
                <Button
                  href="#services"
                  trailingIcon
                  variant="primary"
                  hoverLabel="Explore now"
                >
                  View Services
                </Button>
              </FadeUpBlurItem>
            </FadeUpBlurGroup>
          </div>

          <div className="col-span-4 flex items-end max-[900px]:col-span-12">
            <FadeUpBlur animateOnMount delay={0.2} className="ml-auto w-full">
              <div
                className="hero-sidebar-panel flex w-full flex-col gap-[7vw] bg-(--e-text-light-blue) p-[3vw] text-foreground max-[900px]:gap-[6vw] max-[900px]:p-[4vw]"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 6.2vw) 0, 100% 6.2vw, 100% 100%, 0 100%)",
                }}
              >
                <div className="flex w-full flex-col gap-(--space-lg)">
                  <div className="flex gap-[-1.5vw]">
                    {SITE_IMAGES.hero.avatars.map((src, index) => (
                      <SiteImage
                        key={src}
                        src={src}
                        alt=""
                        width={80}
                        height={80}
                        className={[
                          "h-[2.28vw] w-[2.28vw] min-h-[32px] min-w-[32px] rounded-full object-cover ring-[0.18vw] ring-(--e-text-light-blue)",
                          index > 0 ? "ml-[-0.52vw]" : "",
                        ].join(" ")}
                      />
                    ))}
                  </div>

                  <p className="max-w-[43vw] text-[1.7vw] leading-normal max-[900px]:max-w-none max-[900px]:text-[3.4vw]">
                    Our clients are ambitious businesses that understand the value
                    of efficiency.
                  </p>
                </div>

                <Button
                  href={ROUTES.about}
                  trailingIcon
                  variant="text"
                  hoverLabel="Learn more"
                  className="mt-(--space-sm)"
                >
                  About company
                </Button>
              </div>
            </FadeUpBlur>
          </div>
        </div>
      </div>
    </section>
  );
}
