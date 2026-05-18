"use client";

import { ArrowUpRight, Check, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FeatureCardInquiryModal } from "@/components/sections/feature-card-inquiry-modal";
import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionPanel } from "@/components/ui/section-panel";
import { SiteImage } from "@/components/ui/site-image";

export type FeatureCard = {
  title: string;
  description: string;
  tag?: string;
  href?: string;
  image?: string;
};

type InquiryState = {
  title: string;
  service: string;
};

type FeatureCardsGridProps = {
  kicker: string;
  heading: string;
  intro: string;
  cards: readonly FeatureCard[];
  columns?: 2 | 3 | 4;
  variant?: "service" | "product";
  /** Hide card images (services grid in screenshot) */
  showImages?: boolean;
  /** Open inquiry form modal with selected card title */
  inquiryOnClick?: boolean;
};

function ServiceCardAction() {
  return (
    <span
      className="mt-auto inline-flex size-[2.9vw] min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-[0.42vw] border-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-white)] text-[var(--e-primary)] transition-[border-color,background-color] duration-300 group-hover:border-[var(--e-primary)] group-hover:bg-[var(--e-bg-light)] max-[900px]:size-[11vw]"
      aria-hidden
    >
      <ChevronsRight
        className="size-[1.1vw] min-h-[14px] min-w-[14px] max-[900px]:size-[4vw]"
        strokeWidth={1.75}
      />
    </span>
  );
}

function ProductCardAction() {
  return (
    <span
      className="inline-flex size-[2.9vw] min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-[0.42vw] border-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-white)] text-[var(--e-primary)] transition-[border-color,background-color] duration-300 group-hover:border-[var(--e-primary)] group-hover:bg-[var(--e-bg-light)] max-[900px]:size-[11vw]"
      aria-hidden
    >
      <ArrowUpRight
        className="size-[1.1vw] min-h-[14px] min-w-[14px] max-[900px]:size-[4vw]"
        strokeWidth={1.75}
      />
    </span>
  );
}

function ProductCardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mb-[var(--space-md)] overflow-hidden rounded-[0.62vw] max-[900px]:mb-[3vw] max-[900px]:rounded-[2vw]">
      <SiteImage
        src={src}
        alt={alt}
        width={800}
        height={520}
        className="h-[12.5vw] min-h-[150px] w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 max-[900px]:h-[42vw]"
      />
    </div>
  );
}

export function FeatureCardsGrid({
  kicker,
  heading,
  intro,
  cards,
  columns = 4,
  variant = "service",
  showImages = variant === "product",
  inquiryOnClick = variant === "service" || variant === "product",
}: FeatureCardsGridProps) {
  const [inquiry, setInquiry] = useState<InquiryState | null>(null);

  const colSpan =
    columns === 2 ? "col-span-6" : columns === 3 ? "col-span-4" : "col-span-3";

  const totalRows = Math.ceil(cards.length / columns);
  const isServiceGrid = variant === "service" && !showImages;
  const isProductGrid = variant === "product" && showImages;
  const isStackedHeader = isServiceGrid || isProductGrid;

  const openInquiry = (card: FeatureCard) => {
    setInquiry({
      title: card.title,
      service: card.tag ?? card.title,
    });
  };

  return (
    <section
      className="site-shell pb-[var(--space-hero-y)]"
      aria-labelledby="feature-grid-heading"
    >
      <SectionPanel
        gridLines={false}
        tone={isProductGrid ? "white" : "light"}
      >
        {isStackedHeader ? (
          <FadeUpBlurGroup className="border-b-[0.07vw] border-b-[var(--e-border-soft)] px-[var(--space-card-pad)] py-[3.65vw] max-[900px]:py-[8vw]">
            <FadeUpBlurItem>
              <SectionKicker tone="muted">{kicker}</SectionKicker>
            </FadeUpBlurItem>
            <FadeUpBlurItem>
              <h2
                id="feature-grid-heading"
                className="mt-[1.56vw] text-[2.8vw] font-medium leading-[1.12] tracking-[-0.04vw] text-[var(--e-text-primary)] max-[900px]:mt-[4vw] max-[900px]:text-[5.5vw]"
              >
                {heading}
              </h2>
            </FadeUpBlurItem>
            <FadeUpBlurItem>
              <p className="mt-[var(--space-md)] max-w-[42vw] text-body leading-[1.65] text-[var(--e-text-secondary)] max-[900px]:max-w-none">
                {intro}
              </p>
            </FadeUpBlurItem>
          </FadeUpBlurGroup>
        ) : (
          <div className="grid grid-cols-12 border-b-[0.07vw] border-b-[var(--e-border-soft)]">
            <FadeUpBlur className="col-span-4 border-r-[0.07vw] border-r-[var(--e-border-soft)] px-[var(--space-card-pad)] py-[3.65vw] max-[900px]:col-span-12 max-[900px]:border-r-0 max-[900px]:border-b-[0.07vw]">
              <SectionKicker>{kicker}</SectionKicker>
            </FadeUpBlur>
            <FadeUpBlurGroup className="col-span-8 px-[var(--space-card-pad)] py-[3.65vw] max-[900px]:col-span-12">
              <FadeUpBlurItem>
                <h2
                  id="feature-grid-heading"
                  className="text-[2.8vw] font-medium leading-[1.12] tracking-[-0.04vw] text-[var(--e-text-primary)] max-[900px]:text-[5.5vw]"
                >
                  {heading}
                </h2>
              </FadeUpBlurItem>
              <FadeUpBlurItem>
                <p className="mt-[var(--space-md)] max-w-[38vw] text-body leading-[1.65] text-[var(--e-text-secondary)] max-[900px]:max-w-none">
                  {intro}
                </p>
              </FadeUpBlurItem>
            </FadeUpBlurGroup>
          </div>
        )}

        <FadeUpBlurGroup stagger={0.06} className="grid grid-cols-12">
          {cards.map((card, index) => {
            const colIndex = index % columns;
            const rowIndex = Math.floor(index / columns);
            const isLastCol = colIndex === columns - 1;
            const isLastRow = rowIndex === totalRows - 1;

            const borderClass = [
              !isLastCol ? "border-r-[0.07vw] border-r-[var(--e-border-soft)]" : "",
              !isLastRow ? "border-b-[0.07vw] border-b-[var(--e-border-soft)]" : "",
            ]
              .filter(Boolean)
              .join(" ");

            const content = isProductGrid ? (
              <>
                {card.image ? (
                  <ProductCardImage src={card.image} alt={card.title} />
                ) : null}
                <div className="flex flex-1 flex-col gap-[0.78vw]">
                  <h3 className="text-[1.35vw] font-medium leading-snug text-[var(--e-text-primary)] max-[900px]:text-[3.2vw]">
                    {card.title}
                  </h3>
                  <p className="text-body leading-[1.6] text-[var(--e-text-secondary)]">
                    {card.description}
                  </p>
                </div>
                <div className="mt-auto flex items-end justify-between gap-[var(--space-md)] pt-[var(--space-lg)]">
                  {card.tag ? (
                    <div>
                      <p className="text-body font-medium text-[var(--e-text-primary)]">
                        Service:
                      </p>
                      <p className="mt-[0.52vw] flex items-center gap-[0.52vw] text-body leading-snug text-[var(--e-text-secondary)] max-[900px]:mt-[1.5vw] max-[900px]:gap-[1.5vw]">
                        <Check
                          className="size-[1vw] min-h-[14px] min-w-[14px] shrink-0 text-[var(--e-primary)] max-[900px]:size-[3.5vw]"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        {card.tag}
                      </p>
                    </div>
                  ) : (
                    <span />
                  )}
                  <ProductCardAction />
                </div>
              </>
            ) : (
              <>
                {showImages && card.image ? (
                  <SiteImage
                    src={card.image}
                    alt=""
                    width={600}
                    height={400}
                    className="mb-[var(--space-md)] h-[10vw] min-h-[120px] w-full object-cover"
                  />
                ) : null}
                <div className={isServiceGrid ? "flex flex-1 flex-col gap-[0.78vw]" : "stack-md"}>
                  <h3
                    className={
                      isServiceGrid
                        ? "text-[1.35vw] font-medium leading-snug text-[var(--e-text-primary)] max-[900px]:text-[3.2vw]"
                        : "text-[1.35vw] font-medium leading-snug text-[var(--e-text-primary)] max-[900px]:text-[3vw]"
                    }
                  >
                    {card.title}
                  </h3>
                  <p className="text-body leading-[1.6] text-[var(--e-text-secondary)]">
                    {card.description}
                  </p>
                  {card.tag && !isServiceGrid ? (
                    <p className="text-kicker text-[var(--e-primary)]">{card.tag}</p>
                  ) : null}
                </div>
                {variant === "service" ? <ServiceCardAction /> : null}
              </>
            );

            const cellClass = [
              colSpan,
              borderClass,
              "group flex min-h-[14vw] flex-col p-[var(--space-card-pad)] transition-colors hover:bg-[var(--e-white)] max-[900px]:col-span-12 max-[900px]:min-h-0",
              isServiceGrid ? "bg-[var(--e-bg-light)]" : "bg-[var(--e-white)]",
              isProductGrid ? "min-h-[28vw] max-[900px]:min-h-0" : "",
              inquiryOnClick ? "cursor-pointer" : "",
            ].join(" ");

            const cardBodyClass = "flex h-full min-h-[12vw] w-full flex-col text-left";

            return (
              <FadeUpBlurItem key={card.title} className={cellClass}>
                {inquiryOnClick ? (
                  <button
                    type="button"
                    className={`${cardBodyClass} border-0 bg-transparent p-0`}
                    onClick={() => openInquiry(card)}
                    aria-label={`Inquire about ${card.title}`}
                  >
                    {content}
                  </button>
                ) : card.href ? (
                  <Link href={card.href} className={cardBodyClass}>
                    {content}
                  </Link>
                ) : (
                  <article className={cardBodyClass}>{content}</article>
                )}
              </FadeUpBlurItem>
            );
          })}
        </FadeUpBlurGroup>
      </SectionPanel>

      <FeatureCardInquiryModal
        open={inquiry !== null}
        inquiryTitle={inquiry?.title ?? null}
        service={inquiry?.service ?? null}
        onClose={() => setInquiry(null)}
      />
    </section>
  );
}
