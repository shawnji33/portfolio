/**
 * Design tokens (mirror of CSS variables in app/globals.css).
 * Use for programmatic access; styling prefers Tailwind + CSS vars.
 */
export const theme = {
  colors: {
    bg: "var(--bg)",
    bgMuted: "var(--bg-muted)",
    fg: "var(--fg)",
    fgMuted: "var(--fg-muted)",
    accent: "var(--accent)",
    accentFg: "var(--accent-fg)",
    border: "var(--border)",
    ring: "var(--ring)",
  },
  space: {
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
  },
  radii: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
  },
  maxWidth: {
    prose: "42rem",
    content: "72rem",
    narrow: "40rem",
  },
} as const;
