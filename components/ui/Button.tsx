import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-accent text-accent-fg shadow-sm hover:bg-[var(--accent-hover)] border border-transparent",
  secondary:
    "bg-bg-muted text-fg border border-border hover:bg-[color-mix(in_oklab,var(--bg-muted)_85%,var(--fg)_15%)]",
  ghost:
    "text-fg border border-transparent hover:bg-bg-muted underline-offset-4 hover:underline",
};

type BaseProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
    className?: string;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & {
    className?: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className, children } = props;
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-[var(--step--1)] font-medium transition-colors duration-150 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          rel="noopener noreferrer"
          target="_blank"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={styles} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
