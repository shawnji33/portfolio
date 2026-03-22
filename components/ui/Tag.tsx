import { cn } from "@/lib/cn";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

/** Small label / pill for roles, categories, or metadata. */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-bg-muted px-2.5 py-0.5 text-[length:var(--step--1)] font-medium text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
