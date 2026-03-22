/**
 * Placeholder for case study hero imagery.
 * Replace with next/image when you have exported frames.
 */
export function CaseStudyHeroImage({
  label = "Placeholder: high-fidelity screen or flow diagram",
}: {
  label?: string;
}) {
  return (
    <figure className="mx-auto max-w-[72rem] px-4 sm:px-6 lg:px-8">
      <div
        role="img"
        aria-label={label}
        className="flex aspect-[21/9] max-h-[min(420px,50vh)] w-full items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-border bg-bg-muted/80 text-center text-[length:var(--step--1)] text-fg-muted"
      >
        <span className="max-w-md px-4">
          Image placeholder — swap for project visuals (screens, diagrams, or
          prototypes).
        </span>
      </div>
      <figcaption className="mt-3 text-center text-[length:var(--step--1)] text-fg-muted">
        Add meaningful alt text on real assets for screen reader users.
      </figcaption>
    </figure>
  );
}
