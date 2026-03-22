import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

type CardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: CardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-[color-mix(in_oklab,var(--bg)_92%,var(--fg-muted)_8%)] p-6 shadow-sm transition-[box-shadow,transform] duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      <article className="flex h-full flex-col">
        <div className="mb-4 flex flex-wrap gap-2">
          <Tag>{project.role}</Tag>
          <Tag>{project.timeline}</Tag>
        </div>
        <h3 className="font-display text-[var(--step-2)] font-semibold tracking-tight text-fg group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-pretty text-[length:var(--step--1)] text-fg-muted">
          {project.tagline}
        </p>
        <p className="mt-4 line-clamp-2 flex-1 text-[length:var(--step--1)] text-fg">
          {project.shortDescription}
        </p>
        <dl className="mt-6 space-y-2 border-t border-border pt-4 text-[length:var(--step--1)]">
          <div className="flex flex-wrap gap-x-2">
            <dt className="text-fg-muted">With</dt>
            <dd className="text-fg">{project.collaborators}</dd>
          </div>
          <div className="flex flex-wrap gap-x-2">
            <dt className="text-fg-muted">Outcome</dt>
            <dd className="font-medium text-fg">{project.outcomes[0]?.value}</dd>
          </div>
        </dl>
      </article>
    </Link>
  );
}
