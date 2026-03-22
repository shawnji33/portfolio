import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border py-10 text-[length:var(--step--1)] text-fg-muted">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. {site.location}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${site.email}`}
            className="text-fg underline-offset-4 hover:text-accent hover:underline"
          >
            {site.email}
          </a>
          <Link
            href="/contact"
            className="text-fg underline-offset-4 hover:text-accent hover:underline"
          >
            Contact form
          </Link>
        </div>
      </Container>
    </footer>
  );
}
