"use client";

import { Hand } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import {
  SocialDribbble,
  SocialFacebook,
  SocialGitHub,
  SocialLinkedIn,
  SocialX,
} from "@/components/ui/social-icons";
import { useActivePath } from "@/lib/use-active-path";
import { FOOTER_DISCOVER_LINKS, FOOTER_INFO_LINKS, ROUTES } from "@/lib/site-routes";

const SOCIAL_LINKS = [
  { label: "X", href: "#", Icon: SocialX },
  { label: "LinkedIn", href: "#", Icon: SocialLinkedIn },
  { label: "Facebook", href: "#", Icon: SocialFacebook },
  { label: "GitHub", href: "#", Icon: SocialGitHub },
  { label: "Handshake", href: "#", Icon: Hand },
  { label: "Dribbble", href: "#", Icon: SocialDribbble },
] as const;

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  const { isActive } = useActivePath();

  return (
  <>
      <h3 className="text-body font-semibold text-[var(--e-text-primary)]">{title}</h3>
      <nav className="flex flex-col gap-[var(--space-sm)]">
        {links.map((link) => {
          const active = isActive(link.href);

          return (
            <Link
              key={link.label}
              href={link.href}
              aria-current={active ? "page" : undefined}
              data-nav-active={active ? "true" : "false"}
              className="footer-nav-link w-fit text-body text-[var(--e-text-secondary)] transition-colors hover:text-[var(--e-text-primary)]"
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--e-bg-light)]">
      <div className="site-shell pt-[4.5vw] pb-[2.2vw] max-[900px]:pt-[10vw] max-[900px]:pb-[6vw]">
        <FadeUpBlurGroup
          stagger={0.1}
          className="grid grid-cols-12 gap-[var(--space-3xl)] pb-[var(--space-3xl)] max-[900px]:gap-[var(--space-2xl)]"
        >
          <FadeUpBlurItem className="col-span-5 flex flex-col gap-[var(--space-lg)] max-[900px]:col-span-12">
            <Link href={ROUTES.home} className="w-fit">
              <Image
                src="/logo.svg"
                alt="Electrotech"
                width={55}
                height={59}
                className="h-[3.2vw] w-auto min-h-[40px] max-[900px]:h-[12vw]"
              />
            </Link>
            <p className="max-w-[22vw] text-body leading-[1.55] text-[var(--e-text-secondary)] max-[900px]:max-w-none">
              Focus on growing your business.
            </p>
          </FadeUpBlurItem>

          <FadeUpBlurItem className="col-span-3 flex flex-col gap-[var(--space-md)] max-[900px]:col-span-12">
            <FooterLinks title="Discover" links={FOOTER_DISCOVER_LINKS} />
          </FadeUpBlurItem>

          <FadeUpBlurItem className="col-span-4 flex flex-col gap-[var(--space-md)] max-[900px]:col-span-12">
            <FooterLinks title="Info" links={FOOTER_INFO_LINKS} />
          </FadeUpBlurItem>
        </FadeUpBlurGroup>

        <FadeUpBlur
          delay={0.15}
          className="flex flex-wrap items-center justify-between gap-[var(--space-lg)] border-t-[0.07vw] border-t-[var(--e-border-soft)] pt-[var(--space-xl)]"
        >
          <p className="text-card text-[var(--e-text-secondary)]">
            © Electrotech. All rights reserved.
          </p>
          <div className="flex items-center gap-[0.78vw] max-[900px]:gap-[3vw]">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-[var(--e-text-secondary)] transition-colors hover:text-[var(--e-primary)]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </FadeUpBlur>
      </div>
    </footer>
  );
}
