import type { LucideIcon } from "lucide-react";
import Link from "next/link";

export type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  headingId?: string;
  isActive?: boolean;
};

export function ServiceCard({
  number,
  title,
  description,
  href,
  icon: Icon,
  headingId,
  isActive = false,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`relative flex h-full min-h-[20vw] w-full flex-col overflow-hidden rounded-[0.62vw] border-[0.07vw] bg-[var(--e-white)] no-underline transition-[border-color,box-shadow] duration-300 max-[900px]:min-h-0 ${
        isActive
          ? "border-[var(--e-primary)] shadow-[0_0_0_0.07vw_var(--e-primary)]"
          : "border-[var(--e-border-soft)]"
      }`}
    >
      <div className="flex flex-1 flex-col p-[1.82vw] pb-[1.35vw] max-[900px]:p-[4vw] max-[900px]:pb-[3.5vw]">
        <p className="text-kicker text-[var(--e-text-secondary)]">{number}</p>
        <h3
          id={headingId}
          className="mt-[1.04vw] max-w-[14vw] text-[2.8vw] font-medium leading-[1.12] tracking-[-0.03em] text-[var(--e-text-primary)] max-[900px]:mt-[2vw] max-[900px]:max-w-none max-[900px]:text-[4.2vw]"
        >
          {title}
        </h3>
        <p className="mt-[0.78vw] max-w-[26vw] flex-1 text-body text-[var(--e-text-secondary)] max-[900px]:mt-[2vw] max-[900px]:max-w-none">
          {description}
        </p>
        <div className="mt-auto pt-[1.56vw] max-[900px]:pt-[4vw]">
          <span
            className="flex size-[2.9vw] min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-[0.42vw] border-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-white)] leading-none text-[var(--e-primary)] transition-[border-color,background-color] duration-300 hover:border-[var(--e-primary)] hover:bg-[var(--e-bg-light)] max-[900px]:size-[11vw]"
            aria-hidden
          >
            <Icon
              className="block size-[1.1vw] min-h-[14px] min-w-[14px] shrink-0 max-[900px]:size-[4vw]"
              strokeWidth={1.75}
            />
          </span>
        </div>
      </div>
      <span
        className="absolute inset-x-0 bottom-0 h-[0.42vw] bg-[var(--e-primary)]"
        aria-hidden
      />
    </Link>
  );
}
