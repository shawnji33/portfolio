import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Grid } from "@/components/ui/Grid";
import { ProjectCard } from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { focusAreas, hero, site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: hero.subcopy,
  openGraph: {
    title: `${site.name} — Product designer`,
    description: hero.subcopy,
  },
};

export default function HomePage() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => p.slug !== featured?.slug);
  const showcase = featured
    ? [featured, ...rest.slice(0, 2)]
    : projects.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 10%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 30%, color-mix(in oklab, var(--fg-muted) 18%, transparent), transparent 50%)",
          }}
        />
        <Container className="relative py-20 sm:py-28">
          <p className="text-[length:var(--step--1)] font-medium uppercase tracking-widest text-accent">
            {site.title}
          </p>
          <h1 className="font-display mt-4 max-w-[20ch] text-[var(--step-5)] font-semibold leading-[1.08] tracking-tight text-fg">
            {hero.headline}
          </h1>
          <p className="prose-width mt-6 text-pretty text-[length:var(--step-1)] text-fg-muted">
            {hero.subcopy}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </Container>
      </section>

      <Section id="focus" pad="lg">
        <Container>
          <h2 className="font-display text-[var(--step-4)] font-semibold tracking-tight text-fg">
            {focusAreas.heading}
          </h2>
          <p className="prose-width mt-4 text-pretty text-[length:var(--step-1)] text-fg-muted">
            {focusAreas.intro}
          </p>
          <Grid cols="2" className="mt-12">
            {focusAreas.areas.map((area) => (
              <div
                key={area.title}
                className="rounded-[var(--radius-lg)] border border-border bg-bg-muted/50 p-6"
              >
                <h3 className="font-display text-[var(--step-2)] font-semibold text-fg">
                  {area.title}
                </h3>
                <p className="mt-3 text-pretty text-[length:var(--step-0)] text-fg-muted">
                  {area.description}
                </p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section pad="lg" className="bg-bg-muted/30">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-[var(--step-4)] font-semibold tracking-tight text-fg">
                Selected work
              </h2>
              <p className="mt-2 max-w-xl text-pretty text-[length:var(--step-1)] text-fg-muted">
                Case studies with context, process, and outcomes — written for
                design and product partners.
              </p>
            </div>
            <Link
              href="/work"
              className="shrink-0 text-[length:var(--step--1)] font-semibold text-accent underline-offset-4 hover:underline"
            >
              View all projects
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {showcase.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </Section>

      <Section pad="md">
        <Container className="flex flex-col items-start gap-6 rounded-[var(--radius-lg)] border border-border bg-[color-mix(in_oklab,var(--bg-muted)_65%,transparent)] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-[var(--step-2)] font-semibold text-fg">
              Hiring or collaborating?
            </h2>
            <p className="mt-2 max-w-xl text-pretty text-[length:var(--step-0)] text-fg-muted">
              I’m open to senior product design roles and select contract work.
              Tell me what you’re building.
            </p>
          </div>
          <Button href="/contact" variant="primary">
            Get in touch
          </Button>
        </Container>
      </Section>
    </>
  );
}
