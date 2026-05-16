import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[#F7F7F7] pt-[var(--header-height,4.5rem)]">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
