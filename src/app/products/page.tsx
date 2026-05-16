import { PageShell } from "@/components/layout/page-shell";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCardsGrid } from "@/components/sections/feature-cards-grid";
import { PageCenteredHero } from "@/components/sections/page-centered-hero";
import { PRODUCTS_CARDS } from "@/lib/products-data";

export const metadata = {
  title: "Products | Electrotech",
  description:
    "Explore Electrotech products and see how we help businesses streamline operations and achieve their goals.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <PageCenteredHero
        id="products-hero-heading"
        title="Our Products"
        description="Explore how Electrotech has helped businesses like yours streamline operations, boost efficiency, and achieve their goals."
      />
      <FeatureCardsGrid
        kicker="Our Products"
        heading="See our impact."
        intro="We offer comprehensive administrative support to manage tasks like scheduling, data entry, and document handling."
        cards={PRODUCTS_CARDS}
        columns={2}
        variant="product"
      />
      <CtaSection />
    </PageShell>
  );
}
