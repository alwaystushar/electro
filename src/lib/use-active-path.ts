"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";

export function useActivePath() {
  const pathname = usePathname();

  const isActive = useCallback(
    (href: string) => {
      if (href.startsWith("#")) {
        return false;
      }

      if (href === "/") {
        return pathname === "/";
      }

      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname],
  );

  return { pathname, isActive };
}
