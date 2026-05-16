export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  products: "/products",
  contact: "/contact",
} as const;

export const NAV_ITEMS = [
  { label: "About Us", href: ROUTES.about },
  { label: "Services", href: ROUTES.services },
  { label: "Products", href: ROUTES.products },
] as const;

export const FOOTER_DISCOVER_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "About Us", href: ROUTES.about },
  { label: "Products", href: ROUTES.products },
  { label: "Services", href: ROUTES.services },
  { label: "Contact Us", href: ROUTES.contact },
] as const;

export const FOOTER_INFO_LINKS = [
  { label: "Privacy & Policies", href: "#privacy" },
  { label: "Terms & Conditions", href: "#terms" },
] as const;
