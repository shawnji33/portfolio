import { cn } from "@/lib/cn";

type GridProps = {
  children: React.ReactNode;
  className?: string;
  /** Default 1 col mobile, 2 tablet, 3 desktop */
  cols?: "2" | "3";
};

export function Grid({ children, className, cols = "3" }: GridProps) {
  const colClass =
    cols === "2"
      ? "grid gap-6 sm:grid-cols-2"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";
  return <div className={cn(colClass, className)}>{children}</div>;
}
