import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { aboutPage, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, values, and how I collaborate with product and engineering.",
  openGraph: {
    title: `About — ${site.name}`,
    description: aboutPage.bio[0],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        description="A concise snapshot of how I think and collaborate — tune this page to your voice."
      />
      <Section pad="lg">
        <Container className="max-w-[42rem] space-y-6">
          {aboutPage.bio.map((p) => (
            <p key={p.slice(0, 32)} className="text-pretty text-[length:var(--step-1)] text-fg">
              {p}
            </p>
          ))}
        </Container>
      </Section>
      <Section pad="lg" className="border-t border-border bg-bg-muted/25">
        <Container>
          <h2 className="font-display text-[var(--step-3)] font-semibold text-fg">
            Values
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {aboutPage.values.map((v) => (
              <li
                key={v.title}
                className="rounded-[var(--radius-lg)] border border-border bg-bg p-6"
              >
                <h3 className="font-display text-[var(--step-1)] font-semibold text-fg">
                  {v.title}
                </h3>
                <p className="mt-3 text-pretty text-[length:var(--step-0)] text-fg-muted">
                  {v.text}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section pad="lg">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[var(--step-3)] font-semibold text-fg">
              How I work
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-[length:var(--step-0)] text-fg marker:text-accent">
              {aboutPage.howIWork.map((item) => (
                <li key={item.slice(0, 40)} className="text-pretty pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-[var(--step-3)] font-semibold text-fg">
              Tools
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {aboutPage.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-border bg-bg-muted px-3 py-1 text-[length:var(--step--1)] font-medium text-fg"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
