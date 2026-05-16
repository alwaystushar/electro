import type { FeatureCard } from "@/components/sections/feature-cards-grid";
import { SITE_IMAGES } from "@/lib/site-images";

export const PRODUCTS_CARDS: readonly FeatureCard[] = [
  {
    title: "Optimizing HR Processes",
    description:
      "Electrotech's HR support services brought much-needed efficiency and consistency to the retail chain's HR operations.",
    tag: "Human Resources Support",
    image: SITE_IMAGES.products.caseStudy1,
  },
  {
    title: "Enhancing Customer Experience",
    description:
      "Electrotech's customer service solution transformed the e-commerce company's approach to customer interactions.",
    tag: "Customer Service",
    image: SITE_IMAGES.products.caseStudy2,
  },
  {
    title: "Efficient Admin Operations",
    description:
      "By streamlining administrative processes, Electrotech enabled this tech startup to regain control over their operations, allowing them to focus on growth.",
    tag: "Administrative Support",
    image: SITE_IMAGES.products.caseStudy3,
  },
  {
    title: "Streamlining Operations",
    description:
      "For InnovateTech, a rapidly expanding tech startup, managing administrative tasks became a significant hurdle.",
    tag: "Administrative Support",
    image: SITE_IMAGES.products.caseStudy4,
  },
  {
    title: "Enhancing HR Processes",
    description:
      "Human Resources is the backbone of any organization, playing a crucial role in talent acquisition, employee onboarding, and payroll management.",
    tag: "Human Resources Support",
    image: SITE_IMAGES.products.caseStudy5,
  },
  {
    title: "Improving Customer Service",
    description:
      "In today's competitive market, exceptional customer service can be the difference between retaining a customer and losing one.",
    tag: "Customer Service",
    image: SITE_IMAGES.products.caseStudy6,
  },
] as const;
