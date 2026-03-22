import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="font-display text-[var(--step-4)] font-semibold text-fg">
        Page not found
      </h1>
      <p className="mt-4 text-[length:var(--step-1)] text-fg-muted">
        That URL doesn’t exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-[length:var(--step-0)] font-semibold text-accent underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </Container>
  );
}
