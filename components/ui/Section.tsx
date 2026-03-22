import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Vertical padding scale */
  pad?: "sm" | "md" | "lg";
};

const padMap = {
  sm: "py-10 sm:py-12",
  md: "py-14 sm:py-20",
  lg: "py-20 sm:py-28",
};

export function Section({ children, className, id, pad = "md" }: SectionProps) {
  return (
    <section id={id} className={cn(padMap[pad], className)}>
      {children}
    </section>
  );
}
