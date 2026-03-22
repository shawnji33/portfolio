/** Global site copy — replace with your name, links, and story. */

export const site = {
  name: "Alex Morgan",
  title: "Product designer",
  tagline:
    "I design clear, humane software for complex workflows — from research and framing to shipped UI.",
  email: "hello@example.com",
  location: "San Francisco · open to remote",
  social: {
    linkedin: "https://www.linkedin.com",
    readcv: "https://read.cv",
  },
};

export const hero = {
  headline: "Product design for clarity under complexity",
  subcopy:
    "I partner with product and engineering to turn messy problems into focused flows — research when it matters, craft when it counts, and delivery you can measure.",
  primaryCta: { label: "View work", href: "/work" },
  secondaryCta: { label: "About me", href: "/about" },
};

export const focusAreas = {
  heading: "How I work",
  intro:
    "I sit closest to product strategy and execution: framing problems with evidence, exploring concepts quickly, and shipping with engineering without losing the details.",
  areas: [
    {
      title: "Discovery & framing",
      description:
        "Interviews, journey maps, and light analytics to align on the real job-to-be-done before pixels.",
    },
    {
      title: "UX & UI craft",
      description:
        "Flows, interaction patterns, and visual systems that scale — not one-off screens.",
    },
    {
      title: "Research & validation",
      description:
        "When risk is high, structured tests; when time is short, targeted critique and heuristic passes.",
    },
    {
      title: "Systems & collaboration",
      description:
        "Design systems, specs, and handoff that reduce back-and-forth and keep quality in production.",
    },
  ],
};

export const aboutPage = {
  bio: [
    "I’m a product designer with a bias for clarity. Most of my work sits in B2B and regulated spaces where the interface has to earn trust fast — through predictable behavior, honest copy, and respect for expert users.",
    "Before design, I spent time on cross-functional teams where “design” was often the last mile. That pushed me to get sharp on problem framing, metrics, and how decisions actually ship.",
  ],
  values: [
    {
      title: "Clarity over novelty",
      text: "The best pattern is the one people can complete without guessing.",
    },
    {
      title: "Evidence, proportionally",
      text: "Enough research to reduce risk; not research theater to delay decisions.",
    },
    {
      title: "Kind collaboration",
      text: "Good handoff is a product: specs, edge cases, and follow-through.",
    },
  ],
  howIWork: [
    "Start from outcomes and constraints — what must be true in 6 weeks, not just what looks good in Figma.",
    "Prototype early for high-risk flows; use workshops when alignment is the bottleneck.",
    "Stay in the loop with engineering through QA so accessibility and states don’t erode at the finish line.",
  ],
  tools: [
    "Figma",
    "FigJam / Maze / UserTesting",
    "Notion / Linear / Jira",
    "HTML/CSS literacy",
    "WCAG-minded patterns",
  ],
};

export type ResumeRole = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
};

export const resume: {
  summary: string;
  roles: ResumeRole[];
  education: { school: string; detail: string }[];
} = {
  summary:
    "Product designer with 6+ years shipping B2B and consumer experiences end-to-end — discovery, UX/UI, validation, and systems thinking alongside engineering.",
  roles: [
    {
      title: "Senior Product Designer",
      company: "Northline Software",
      location: "Remote",
      start: "2022",
      end: "Present",
      summary:
        "Lead designer for core workflow products used by operations teams in logistics.",
      highlights: [
        "Owned onboarding and setup for a multi-tenant platform; raised activation and cut support load.",
        "Partnered with research on quarterly usability studies; turned findings into a prioritized backlog.",
        "Contributed to the internal design system: patterns for data-dense tables, forms, and permissions.",
      ],
    },
    {
      title: "Product Designer",
      company: "Harbor Health",
      location: "San Francisco, CA",
      start: "2019",
      end: "2022",
      summary:
        "Designed patient- and staff-facing tools in a regulated healthcare environment.",
      highlights: [
        "Redesigned scheduling flows to reduce double-booking and manual reconciliation.",
        "Led accessibility remediation on high-traffic forms with engineering and a third-party audit.",
        "Facilitated journey mapping workshops with clinical SMEs to align on edge cases.",
      ],
    },
    {
      title: "UX Designer",
      company: "Copper Studio",
      location: "Oakland, CA",
      start: "2017",
      end: "2019",
      summary:
        "Agency work across e-commerce and productivity clients; rapid prototyping and client workshops.",
      highlights: [
        "Shipped responsive marketing and checkout improvements with measurable conversion lifts.",
        "Introduced lightweight usability tests into the delivery cycle for two anchor accounts.",
      ],
    },
  ],
  education: [
    {
      school: "BFA Communication Design",
      detail: "Pacific Northwest College of Art",
    },
  ],
};

export const contactCopy = {
  heading: "Say hello",
  body:
    "If you’re hiring, exploring a project, or want to swap notes on design ops and systems, send a message. I read everything and reply within a few business days.",
};
