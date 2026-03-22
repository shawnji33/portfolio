import type { CaseStudyBlock } from "@/data/projects";
import { Container } from "@/components/ui/Container";

function Block({ block }: { block: CaseStudyBlock }) {
  return (
    <section
      id={block.id}
      aria-labelledby={`${block.id}-h`}
      className="scroll-mt-28 border-b border-border py-12 last:border-b-0 sm:py-16"
    >
      <Container>
        <p className="mb-2 text-[length:var(--step--1)] font-semibold uppercase tracking-widest text-accent">
          {block.label ?? block.heading}
        </p>
        <h2
          id={`${block.id}-h`}
          className="font-display text-[var(--step-3)] font-semibold tracking-tight text-fg"
        >
          {block.heading}
        </h2>
        <div className="prose-width mt-6 space-y-4 text-[length:var(--step-0)] text-fg">
          {block.body.map((p, i) => (
            <p key={`${block.id}-p-${i}`} className="text-pretty">
              {p}
            </p>
          ))}
        </div>
        {block.list && block.list.length > 0 ? (
          <ul className="prose-width mt-6 list-disc space-y-2 pl-5 text-[length:var(--step-0)] text-fg marker:text-accent">
            {block.list.map((item, i) => (
              <li key={`${block.id}-li-${i}`} className="text-pretty pl-1">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}

type CaseStudyBlocksProps = {
  blocks: CaseStudyBlock[];
};

export function CaseStudyBlocks({ blocks }: CaseStudyBlocksProps) {
  return (
    <div>
      {blocks.map((b) => (
        <Block key={b.id} block={b} />
      ))}
    </div>
  );
}
