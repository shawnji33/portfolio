"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";

const BODY_CLASS = "claude-home-body";

export function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (isHome) {
      document.body.classList.add(BODY_CLASS);
      return () => document.body.classList.remove(BODY_CLASS);
    }
    document.body.classList.remove(BODY_CLASS);
  }, [isHome]);

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
