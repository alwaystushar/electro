"use client";

import { FadeUpBlur } from "@/components/motion/fade-up-blur";
import { SiteImage } from "@/components/ui/site-image";
import { SITE_IMAGES } from "@/lib/site-images";

export function HomeCoverSection() {
  return (
    <>
      <div className="site-shell">
        <div className="h-[7vw] border-x-[0.07vw] border-x-(--e-border-soft) max-[900px]:h-[4vw]" />
      </div>

      <FadeUpBlur className="border-t-[0.07vw] border-t-(--e-border-soft) bg-(--e-white)">
        <SiteImage
          src={SITE_IMAGES.hero.main}
          alt="Team discussing electrical project plans in a modern office."
          width={1920}
          height={1080}
          priority
          className="hero-photo-shadow h-[37vw] w-full object-cover max-[900px]:h-[52vw]"
        />
      </FadeUpBlur>
    </>
  );
}
