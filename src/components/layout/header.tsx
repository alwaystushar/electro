"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MobileNavDrawer } from "@/components/layout/mobile-nav-drawer";
import { Button } from "@/components/ui/button";
import { SplitTextLabel } from "@/components/ui/split-text-label";
import { useActivePath } from "@/lib/use-active-path";
import { NAV_ITEMS, ROUTES } from "@/lib/site-routes";

const SCROLL_THRESHOLD = 10;
const TOP_REVEAL_OFFSET = 64;

function BrandMark() {
  return (
    <Image
      src="/logo.svg"
      alt="Electrotech"
      width={100}
      height={100}
      className="h-[3vw] w-auto max-[900px]:h-[10vw]"
    />
  );
}

function useHeaderScrollVisibility() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (currentY <= TOP_REVEAL_OFFSET) {
          setVisible(true);
        } else if (delta > SCROLL_THRESHOLD) {
          setVisible(false);
        } else if (delta < -SCROLL_THRESHOLD) {
          setVisible(true);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible;
}

export function Header() {
  const { pathname, isActive } = useActivePath();
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [dot, setDot] = useState({ left: 0, visible: false });
  const [menuOpen, setMenuOpen] = useState(false);
  const headerScrollVisible = useHeaderScrollVisibility();
  const headerVisible = headerScrollVisible || menuOpen;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`,
      );
    };

    syncHeight();
    window.addEventListener("resize", syncHeight);

    const observer = new ResizeObserver(syncHeight);
    observer.observe(header);

    return () => {
      window.removeEventListener("resize", syncHeight);
      observer.disconnect();
    };
  }, [menuOpen]);

  useLayoutEffect(() => {
    const updateDot = () => {
      if (window.innerWidth <= 900) {
        setDot((current) => ({ ...current, visible: false }));
        return;
      }

      const activeIndex = NAV_ITEMS.findIndex((item) => isActive(item.href));
      const activeEl = linkRefs.current[activeIndex];
      const navEl = navRef.current;

      if (activeIndex < 0 || !activeEl || !navEl) {
        setDot((current) => ({ ...current, visible: false }));
        return;
      }

      const navRect = navEl.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();

      setDot({
        left: linkRect.left - navRect.left + linkRect.width / 2,
        visible: true,
      });
    };

    updateDot();
    const raf = requestAnimationFrame(updateDot);
    window.addEventListener("resize", updateDot);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateDot);
    };
  }, [pathname, isActive, menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={[
          "site-header fixed inset-x-0 top-0 z-50 border-b-[0.07vw] border-b-[var(--e-border-soft)] bg-[#F7F7F7]",
          "transition-transform duration-300 ease-out motion-reduce:transition-none",
          headerVisible ? "translate-y-0" : "-translate-y-full",
        ].join(" ")}
      >
        <div className="site-shell flex items-center justify-between py-[var(--space-shell-y)]">
          <Link href={ROUTES.home} className="cluster-md" aria-label="Electrotech home">
            <BrandMark />
          </Link>

          <nav
            ref={navRef}
            className="relative hidden nav-gap text-nav min-[901px]:flex"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  ref={(node) => {
                    linkRefs.current[index] = node;
                  }}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  data-nav-active={active ? "true" : "false"}
                  className="header-nav-link relative inline-block pb-[0.7vw] transition-colors duration-300"
                  data-split-hover-target
                >
                  <SplitTextLabel text={item.label} />
                </Link>
              );
            })}

            <span
              aria-hidden
              className={["header-nav-dot", dot.visible ? "opacity-100" : "opacity-0"].join(
                " ",
              )}
              style={{
                left: dot.left,
                transform: "translateX(-50%)",
              }}
            />
          </nav>

          <Button
            href={ROUTES.contact}
            size="sm"
            variant="primary"
            hoverLabel="Let's talk"
            className={[
              "hidden min-[901px]:inline-flex",
              isActive(ROUTES.contact) ? "ring-[0.14vw] ring-[var(--e-text-light-blue)]" : "",
            ].join(" ")}
            aria-current={isActive(ROUTES.contact) ? "page" : undefined}
          >
            Contact us
          </Button>

          <button
            type="button"
            className="relative z-[70] inline-flex size-[11vw] min-h-[44px] min-w-[44px] items-center justify-center rounded-[1.2vw] border-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-white)] text-[var(--e-text-primary)] min-[901px]:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="size-[5vw] min-h-[22px] min-w-[22px]" strokeWidth={1.75} aria-hidden />
            ) : (
              <Menu className="size-[5vw] min-h-[22px] min-w-[22px]" strokeWidth={1.75} aria-hidden />
            )}
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </header>

      <MobileNavDrawer open={menuOpen} onClose={() => setMenuOpen(false)} isActive={isActive} />
    </>
  );
}
