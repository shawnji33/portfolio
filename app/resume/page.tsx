import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { resume, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: resume.summary,
  openGraph: {
    title: `Resume — ${site.name}`,
    description: resume.summary,
  },
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        title="Resume"
        description="High-level experience — export a PDF from your own file when applying."
      />
      <Section pad="lg">
        <Container className="max-w-[42rem]">
          <p className="text-pretty text-[length:var(--step-1)] text-fg">
            {resume.summary}
          </p>
        </Container>
      </Section>
      <Section pad="lg" className="border-t border-border">
        <Container className="max-w-[48rem] space-y-16">
          {resume.roles.map((role) => (
            <article key={`${role.company}-${role.start}`}>
              <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h2 className="font-display text-[var(--step-2)] font-semibold text-fg">
                    {role.title}
                  </h2>
                  <p className="text-[length:var(--step-0)] text-fg-muted">
                    {role.company} · {role.location}
                  </p>
                </div>
                <p className="text-[length:var(--step--1)] font-medium tabular-nums text-fg-muted">
                  {role.start} — {role.end}
                </p>
              </header>
              <p className="mt-4 text-pretty text-[length:var(--step-0)] text-fg">
                {role.summary}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[length:var(--step-0)] text-fg marker:text-accent">
                {role.highlights.map((h) => (
                  <li key={h.slice(0, 48)} className="text-pretty pl-1">
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </Section>
      <Section pad="lg" className="bg-bg-muted/25">
        <Container className="max-w-[42rem]">
          <h2 className="font-display text-[var(--step-2)] font-semibold text-fg">
            Education
          </h2>
          <ul className="mt-4 space-y-2 text-[length:var(--step-0)] text-fg">
            {resume.education.map((e) => (
              <li key={e.school}>
                <span className="font-medium">{e.school}</span>
                <span className="text-fg-muted"> — {e.detail}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
