import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Grid } from "@/components/ui/Grid";
import { ProjectCard } from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in UX, UI, and research — structured for design managers and product partners.",
  openGraph: {
    title: `Work — ${site.name}`,
    description:
      "Case studies in UX, UI, and research — structured for design managers and product partners.",
  },
};

export default function WorkIndexPage() {
  return (
    <>
      <PageHeader
        title="Work"
        description="Structured case studies: context, process, decisions, and measurable outcomes. Replace placeholder copy with your shipped projects."
      />
      <Section pad="lg">
        <Container>
          <Grid>
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
