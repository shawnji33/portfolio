import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Narrower readable column */
  narrow?: boolean;
};

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[min(100%,72rem)] px-4 sm:px-6 lg:px-8",
        narrow && "max-w-[min(100%,42rem)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
