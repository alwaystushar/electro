"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, ROUTES } from "@/lib/site-routes";

const EASE = [0.22, 1, 0.36, 1] as const;

type MobileNavDrawerProps = {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
};

export function MobileNavDrawer({ open, onClose, isActive }: MobileNavDrawerProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: EASE };

  const itemTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: EASE };

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.aside
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="mobile-nav-drawer fixed inset-0 z-[60] flex h-[100dvh] w-full flex-col bg-[#F7F7F7]"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={panelTransition}
        >
          <div className="flex items-center justify-between border-b-[0.07vw] border-b-[var(--e-border-soft)] px-[var(--space-shell-x)] pb-[var(--space-lg)] pt-[max(0.75rem,env(safe-area-inset-top))]">
            <Link href={ROUTES.home} onClick={onClose} aria-label="Electrotech home">
              <Image
                src="/logo.svg"
                alt="Electrotech"
                width={55}
                height={59}
                className="h-[10vw] min-h-[40px] w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-[11vw] min-h-[44px] min-w-[44px] items-center justify-center rounded-[1.2vw] border-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-white)] text-[var(--e-text-primary)]"
              aria-label="Close menu"
            >
              <X className="size-[5vw] min-h-[22px] min-w-[22px]" strokeWidth={1.75} aria-hidden />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center overflow-y-auto px-[var(--space-shell-x)] pb-[max(2rem,env(safe-area-inset-bottom))]">
            <motion.nav
              className="flex flex-col gap-[2rem]"
              aria-label="Mobile navigation"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: reduceMotion
                    ? { duration: 0 }
                    : { staggerChildren: 0.1, delayChildren: 0.12 },
                },
                closed: {
                  transition: reduceMotion
                    ? { duration: 0 }
                    : { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);

                return (
                  <motion.div
                    key={item.label}
                    variants={{
                      closed: { opacity: 0, x: 40 },
                      open: { opacity: 1, x: 0 },
                    }}
                    transition={itemTransition}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      data-nav-active={active ? "true" : "false"}
                      className="header-nav-link block text-[2rem] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[2.35rem]"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={{
                  closed: { opacity: 0, x: 40 },
                  open: { opacity: 1, x: 0 },
                }}
                transition={itemTransition}
                className="pt-[1rem]"
              >
                <Button
                  href={ROUTES.contact}
                  size="sm"
                  variant="primary"
                  hoverLabel="Let's talk"
                  className="w-full justify-center !min-h-[3.25rem] !text-[1.05rem]"
                >
                  Contact us
                </Button>
              </motion.div>
            </motion.nav>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
