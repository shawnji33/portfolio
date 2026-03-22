import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  title: string;
  description?: string;
  /** Optional eyebrow above title */
  eyebrow?: string;
};

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-bg-muted/40">
      <Container className="py-12 sm:py-16">
        {eyebrow ? (
          <p className="mb-3 text-[length:var(--step--1)] font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display text-[var(--step-5)] font-semibold tracking-tight text-fg">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-[42rem] text-pretty text-[length:var(--step-1)] text-fg-muted">
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
