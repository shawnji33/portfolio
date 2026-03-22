import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { focusAreas, hero, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description: hero.subcopy,
  openGraph: {
    title: `${site.name} — Product designer`,
    description: hero.subcopy,
  },
};

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Claude.ai–inspired marketing layout: dark canvas, warm coral CTA, Inter,
 * centered hero, prompt-style field. Visual reference only — not Anthropic IP.
 */
export default function HomePage() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => p.slug !== featured?.slug);
  const showcase = featured
    ? [featured, ...rest.slice(0, 2)]
    : projects.slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#141413] text-[#eceae3]">
      {/* Ambient glow — similar to marketing gradient mesh */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute -left-[20%] top-0 h-[min(70vh,560px)] w-[min(90vw,700px)] rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(204,120,92,0.35), transparent 70%)",
          }}
        />
        <div
          className="absolute -right-[10%] top-[20%] h-[min(50vh,420px)] w-[min(70vw,520px)] rounded-full opacity-25 blur-[90px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(180,160,140,0.2), transparent 70%)",
          }}
        />
      </div>

      {/* Top bar — Claude-style: logo left, links, ghost + primary right */}
      <header className="relative z-20 border-b border-white/[0.06] bg-[#141413]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[#eceae3] transition-opacity hover:opacity-90"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3d3a36] to-[#252422] text-sm font-bold text-[#f0ebe4]"
              aria-hidden
            >
              {site.name.charAt(0)}
            </span>
            <span>{site.name}</span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-[14px] font-medium text-[#a8a29a] transition-colors hover:text-[#eceae3]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full border border-white/[0.12] px-4 py-2 text-[14px] font-medium text-[#eceae3] transition-colors hover:bg-white/[0.06] sm:inline-flex"
            >
              Contact
            </Link>
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#d97757] px-4 py-2 text-[14px] font-semibold text-[#1a1816] shadow-[0_1px_0_rgba(255,255,255,0.12)_inset] transition-colors hover:bg-[#e08f73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d97757]"
            >
              {hero.primaryCta.label}
            </Link>
          </div>
        </div>
        <nav
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 border-t border-white/[0.04] px-4 py-3 md:hidden"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-[#a8a29a] hover:text-[#eceae3]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main id="main-content">
        {/* Hero — centered stack like claude.ai */}
        <section className="relative z-10 px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#a8a29a]">
              {site.title}
            </p>
            <h1 className="mt-5 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#f5f3ef]">
              {hero.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-[540px] text-pretty text-[17px] leading-relaxed text-[#a8a29a]">
              {hero.subcopy}
            </p>

            {/* Prompt row — evokes Claude chat input */}
            <div className="mx-auto mt-10 max-w-[560px]">
              <div className="flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-[#1a1918] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:flex-row sm:items-center">
                <div className="min-h-[48px] flex-1 px-3 py-3 text-left text-[15px] text-[#6b6560] sm:py-2">
                  Ask about my process, case studies, or availability…
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#2a2928] px-5 py-3 text-[14px] font-semibold text-[#eceae3] transition-colors hover:bg-[#353432]"
                >
                  Send a message
                </Link>
              </div>
              <p className="mt-3 text-[12px] text-[#6b6560]">
                Portfolio site — not affiliated with Anthropic or Claude.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#d97757] px-6 py-3 text-[15px] font-semibold text-[#1a1816] transition-colors hover:bg-[#e08f73]"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/[0.14] px-6 py-3 text-[15px] font-medium text-[#eceae3] transition-colors hover:bg-white/[0.06]"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* Feature grid — card row */}
        <section className="relative z-10 border-t border-white/[0.06] bg-[#0f0f0e]/80 py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight text-[#f5f3ef]">
              {focusAreas.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-center text-[16px] leading-relaxed text-[#a8a29a]">
              {focusAreas.intro}
            </p>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.areas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
                >
                  <h3 className="text-[17px] font-semibold text-[#eceae3]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#a8a29a]">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section className="relative z-10 border-t border-white/[0.06] py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight text-[#f5f3ef]">
                  Selected work
                </h2>
                <p className="mt-2 max-w-xl text-[16px] text-[#a8a29a]">
                  Case studies with context, process, and outcomes.
                </p>
              </div>
              <Link
                href="/work"
                className="shrink-0 text-[15px] font-semibold text-[#d97757] hover:underline"
              >
                View all projects
              </Link>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {showcase.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.1] hover:bg-white/[0.04]"
                >
                  <p className="text-[12px] font-medium uppercase tracking-wider text-[#6b6560]">
                    {p.role} · {p.timeline}
                  </p>
                  <h3 className="mt-3 text-[18px] font-semibold text-[#eceae3] group-hover:text-[#d97757]">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#a8a29a]">
                    {p.tagline}
                  </p>
                  <p className="mt-4 border-t border-white/[0.06] pt-4 text-[13px] text-[#8c857c]">
                    <span className="text-[#6b6560]">Outcome — </span>
                    {p.outcomes[0]?.value}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="relative z-10 border-t border-white/[0.06] bg-[#0f0f0e]/90 py-16">
          <div className="mx-auto max-w-[720px] px-4 text-center sm:px-6">
            <h2 className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold text-[#f5f3ef]">
              Hiring or collaborating?
            </h2>
            <p className="mt-3 text-[16px] text-[#a8a29a]">
              Open to senior product design roles and select contract work.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d97757] px-8 py-3 text-[15px] font-semibold text-[#1a1816] transition-colors hover:bg-[#e08f73]"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      {/* Footer — marketing-style minimal strip */}
      <footer className="relative z-10 border-t border-white/[0.06] bg-[#0c0c0b] py-10">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-6 px-4 text-[13px] text-[#6b6560] sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.location}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="text-[#a8a29a] transition-colors hover:text-[#eceae3]"
            >
              {site.email}
            </a>
            <Link
              href="/contact"
              className="text-[#a8a29a] transition-colors hover:text-[#eceae3]"
            >
              Contact
            </Link>
            <Link
              href="/work"
              className="text-[#a8a29a] transition-colors hover:text-[#eceae3]"
            >
              Work
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
