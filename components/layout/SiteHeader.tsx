"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "rounded-[var(--radius-sm)] px-2 py-1 text-[length:var(--step--1)] font-medium transition-colors",
        active
          ? "text-accent"
          : "text-fg-muted hover:text-fg",
      )}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          href="/"
          className="font-display text-[length:var(--step-1)] font-semibold tracking-tight text-fg hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ring)]"
        >
          {site.name}
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1 sm:gap-x-3"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}
