import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { CaseStudyBlocks } from "@/components/case-study/CaseStudyBlocks";
import { CaseStudyHeroImage } from "@/components/case-study/CaseStudyHeroImage";
import { getProjectBySlug, projects } from "@/data/projects";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.shortDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  if (cs) {
    const blocks = [
      cs.problemGoals,
      cs.research,
      cs.ideation,
      cs.solution,
      cs.impact,
      cs.reflection,
    ];

    return (
      <>
        <PageHeader
          title={project.title}
          description={project.tagline}
          eyebrow="Case study"
        />
        <CaseStudyHeroImage />
        <Section pad="sm" className="border-b border-border bg-bg-muted/25">
          <Container className="py-8">
            <div className="flex flex-wrap gap-2">
              <Tag>{project.role}</Tag>
              <Tag>{project.timeline}</Tag>
              <Tag>{project.collaborators}</Tag>
            </div>
            <p className="prose-width mt-6 text-pretty text-[length:var(--step-1)] text-fg">
              {cs.summary}
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-[length:var(--step--1)] font-medium text-fg-muted">
                  Team
                </dt>
                <dd className="mt-1 text-[length:var(--step-0)] text-fg">
                  {cs.team}
                </dd>
              </div>
              <div>
                <dt className="text-[length:var(--step--1)] font-medium text-fg-muted">
                  Timeline
                </dt>
                <dd className="mt-1 text-[length:var(--step-0)] text-fg">
                  {cs.timeline}
                </dd>
              </div>
              <div>
                <dt className="text-[length:var(--step--1)] font-medium text-fg-muted">
                  My role
                </dt>
                <dd className="mt-1 text-[length:var(--step-0)] text-fg">
                  {cs.myRole}
                </dd>
              </div>
            </dl>
          </Container>
        </Section>
        <CaseStudyBlocks blocks={blocks} />
      </>
    );
  }

  return (
    <>
      <PageHeader title={project.title} description={project.tagline} />
      <Section pad="md">
        <Container className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-8">
            <section aria-labelledby="problem-h">
              <h2
                id="problem-h"
                className="font-display text-[var(--step-3)] font-semibold text-fg"
              >
                Problem
              </h2>
              <p className="prose-width mt-4 text-pretty text-[length:var(--step-0)] text-fg">
                {project.problem}
              </p>
            </section>
            <section aria-labelledby="solution-h">
              <h2
                id="solution-h"
                className="font-display text-[var(--step-3)] font-semibold text-fg"
              >
                Approach & solution
              </h2>
              <p className="prose-width mt-4 text-pretty text-[length:var(--step-0)] text-fg">
                {project.solutionSummary}
              </p>
            </section>
          </div>
          <aside className="h-fit space-y-4 rounded-[var(--radius-lg)] border border-border bg-bg-muted/40 p-6">
            <h3 className="text-[length:var(--step--1)] font-semibold uppercase tracking-widest text-fg-muted">
              At a glance
            </h3>
            <ul className="space-y-3 text-[length:var(--step--1)] text-fg">
              <li>
                <span className="text-fg-muted">Role — </span>
                {project.role}
              </li>
              <li>
                <span className="text-fg-muted">Timeline — </span>
                {project.timeline}
              </li>
              <li>
                <span className="text-fg-muted">Collaborators — </span>
                {project.collaborators}
              </li>
            </ul>
            <CaseStudyHeroImage label="Placeholder: key screen or flow for this project" />
          </aside>
        </Container>
      </Section>
      <Section pad="md" className="border-t border-border bg-bg-muted/20">
        <Container>
          <h2 className="font-display text-[var(--step-3)] font-semibold text-fg">
            Outcomes
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {project.outcomes.map((o) => (
              <li
                key={o.label}
                className="rounded-[var(--radius-md)] border border-border bg-bg p-4"
              >
                <p className="text-[length:var(--step--1)] font-medium text-fg-muted">
                  {o.label}
                </p>
                <p className="mt-1 font-display text-[var(--step-1)] font-semibold text-fg">
                  {o.value}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
