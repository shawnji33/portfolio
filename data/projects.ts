/**
 * Portfolio projects and case studies.
 * Swap copy, slugs, and `caseStudy` blocks when you replace placeholders with real work.
 */

export type Outcome = { label: string; value: string };

export type CaseStudyBlock = {
  id: string;
  heading: string;
  body: string[];
  list?: string[];
  /** Short label for process rail (e.g. "Research") */
  label?: string;
};

export type CaseStudyDetail = {
  summary: string;
  team: string;
  timeline: string;
  myRole: string;
  problemGoals: CaseStudyBlock;
  research: CaseStudyBlock;
  ideation: CaseStudyBlock;
  solution: CaseStudyBlock;
  impact: CaseStudyBlock;
  reflection: CaseStudyBlock;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  role: string;
  timeline: string;
  collaborators: string;
  problem: string;
  solutionSummary: string;
  outcomes: Outcome[];
  /** Card / index: one-line problem */
  tagline: string;
  featured?: boolean;
  caseStudy?: CaseStudyDetail;
};

export const projects: Project[] = [
  {
    slug: "b2b-onboarding-redesign",
    title: "B2B onboarding that respects expert users",
    shortDescription:
      "Reduced time-to-first-value by restructuring setup around jobs-to-be-done, not empty states.",
    tagline:
      "New teams were abandoning setup because defaults didn’t match how power users actually work.",
    role: "Lead product designer",
    timeline: "10 weeks",
    collaborators: "PM, 2 engineers, researcher (part-time), CS lead",
    problem:
      "A complex B2B SaaS product required lengthy configuration before teams could see value. Drop-off spiked after account creation, and support tickets clustered around “where do I start?”",
    solutionSummary:
      "We reframed onboarding as a guided path with skippable branches, progressive disclosure, and a persistent “resume setup” entry point. Visual hierarchy aligned with the tasks admins said they came to complete first.",
    outcomes: [
      { label: "Completion", value: "+34% setup completion in 30 days" },
      { label: "Time", value: "−18% median time-to-first-project" },
      { label: "Support", value: "−22% onboarding-related tickets" },
    ],
    featured: true,
    caseStudy: {
      summary:
        "For a workflow-heavy B2B tool, onboarding was a list of empty forms. We validated that admins wanted to configure in a different order than our product assumed, then shipped a modular flow that matched their mental model.",
      team: "Cross-functional squad (PM, engineering, design, research)",
      timeline: "10 weeks (discovery → beta → GA)",
      myRole:
        "Lead product designer: discovery workshops, journey mapping, prototyping in Figma, usability tests, and design QA with engineering.",
      problemGoals: {
        id: "problem",
        label: "Problem",
        heading: "Problem & goals",
        body: [
          "New accounts stalled after signup. Analytics showed a sharp drop between “workspace created” and “first project shipped.” Interviews with admins and team leads revealed a mismatch: our default sequence was built for greenfield teams, but most customers were migrating from spreadsheets and needed to import and map fields first.",
          "The business goal was to reduce early churn and increase activation within the first 30 days without adding headcount to support.",
        ],
        list: [
          "Raise 30-day setup completion without lengthening the flow.",
          "Reduce redundant tickets and confusion around “where to click next.”",
          "Preserve flexibility for power users who skip steps.",
        ],
      },
      research: {
        id: "research",
        label: "Research",
        heading: "Research: methods & insights",
        body: [
          "We ran eight moderated sessions with admins and two with internal CS reps. I paired session recordings with a lightweight audit of the top 10 support macros tagged “onboarding.”",
          "Analytics showed users were opening the same help articles repeatedly—signs of a navigation problem, not a documentation problem.",
        ],
        list: [
          "Admins wanted to “see the shape of the work” before inviting users.",
          "Field mapping was the emotional peak: if it failed, trust dropped immediately.",
          "Empty states felt like a dead end; users wanted a checklist with progress, not a blank canvas.",
        ],
      },
      ideation: {
        id: "ideation",
        label: "Ideation",
        heading: "Ideation & concepts",
        body: [
          "We explored three directions: a single long wizard, a dashboard with cards, and a modular path with optional branches. The wizard tested best for first-time users but frustrated experts; the dashboard tested well for return visits but felt noisy on day one.",
          "We combined the best of both: a linear path for first-run with clear “skip” and “do this later,” plus a persistent “Finish setup” surface that mirrored the checklist mental model.",
        ],
        list: [
          "Low-fi prototypes in Figma for three core flows.",
          "Two rounds of usability tests (n=5 each) before high-fidelity polish.",
        ],
      },
      solution: {
        id: "solution",
        label: "Solution",
        heading: "Solution: flows, patterns, UI",
        body: [
          "The shipped experience uses a slim progress bar with named steps, not anonymous percentages. Each step opens with a one-sentence “why this matters” line to reduce anxiety. Skipped steps surface as inline reminders on the dashboard so nothing feels permanently lost.",
          "For field mapping, we added explicit error states and a side-by-side preview so users could validate before committing.",
        ],
        list: [
          "Primary: “Continue” / “Skip for now” — always visible, equal emphasis.",
          "Persistent entry: “Resume setup” in the workspace nav until complete.",
          "Responsive layouts: table-heavy mapping flows collapse to stacked cards on small screens.",
        ],
      },
      impact: {
        id: "impact",
        label: "Impact",
        heading: "Impact & outcomes",
        body: [
          "After GA, we tracked completion, time-to-first-project, and support volume for 30 days. Qualitatively, CS reported fewer “I’m stuck” threads in the first week.",
        ],
        list: [
          "+34% setup completion within 30 days of signup (cohort vs. prior quarter).",
          "−18% median time-to-first-project among completed setups.",
          "−22% onboarding-related support tickets in the first 30 days post-launch.",
        ],
      },
      reflection: {
        id: "reflection",
        label: "Reflection",
        heading: "Reflection & learnings",
        body: [
          "The biggest win was aligning the product’s sequence of steps with real admin workflows, not our internal data model. The hardest part was resisting feature creep: every stakeholder had a “must-have” for step one. A shared scorecard for activation metrics kept us honest.",
          "If I repeated the project, I would prototype the field-mapping flow earlier with real data samples—edge cases dominated the late-stage polish.",
        ],
      },
    },
  },
  {
    slug: "retail-checkout-mobile",
    title: "Mobile checkout that reduces second-guessing",
    shortDescription:
      "Clarified shipping and payment steps to cut cart abandonment on small screens.",
    tagline:
      "Customers were leaving at shipping because costs and timing appeared too late.",
    role: "Product designer",
    timeline: "6 weeks",
    collaborators: "PM, 3 engineers, analytics",
    problem:
      "Mobile checkout showed shipping and fees late in the flow, which increased abandonment and drove “unexpected total” complaints in user tests.",
    solutionSummary:
      "We surfaced shipping options and estimated delivery earlier, introduced a sticky order summary, and tightened copy for payment errors.",
    outcomes: [
      { label: "Abandonment", value: "−12% at shipping step" },
      { label: "CSAT", value: "+9 pts on mobile post-purchase survey" },
      { label: "Time", value: "−15s median checkout time" },
    ],
  },
  {
    slug: "healthcare-scheduling",
    title: "Scheduling for patients and front desk",
    shortDescription:
      "Unified booking rules so patients could self-serve without double-booking clinics.",
    tagline:
      "Self-serve booking conflicted with legacy scheduling rules at the front desk.",
    role: "UX/UI designer",
    timeline: "14 weeks",
    collaborators: "PM, 4 engineers, clinical SME, compliance",
    problem:
      "A new patient-facing booking flow didn’t respect clinic-specific exceptions, causing front-desk staff to reconcile conflicts manually.",
    solutionSummary:
      "We mapped rules into a single source of truth, exposed constraints in the UI, and added clear handoff states when human confirmation was required.",
    outcomes: [
      { label: "Conflicts", value: "−41% manual reschedules" },
      { label: "Booking", value: "+28% self-serve completions" },
      { label: "Time", value: "−3.2 min avg. front-desk handling" },
    ],
  },
  {
    slug: "internal-design-system",
    title: "Design system for internal tools",
    shortDescription:
      "Scaled consistent patterns across admin consoles so teams shipped faster with fewer one-offs.",
    tagline:
      "Dozens of admin surfaces had diverged, slowing delivery and accessibility fixes.",
    role: "Product designer (systems)",
    timeline: "Ongoing",
    collaborators: "2 designers, design engineer, 6+ product teams",
    problem:
      "Internal tools lacked shared primitives. Teams rebuilt similar tables, forms, and empty states, and accessibility issues repeated across products.",
    solutionSummary:
      "We defined tokens, core components, and documentation patterns, then partnered with teams to migrate high-traffic surfaces first.",
    outcomes: [
      { label: "Speed", value: "−30% avg. design time for new admin flows" },
      { label: "A11y", value: "100% WCAG AA on migrated routes" },
      { label: "Adoption", value: "8 teams on latest release" },
    ],
  },
  {
    slug: "content-platform-ia",
    title: "Information architecture for a content platform",
    shortDescription:
      "Tree testing and card sorting led to a flatter nav that matched how editors searched.",
    tagline:
      "Editors couldn’t find content in a nav that mirrored org structure, not tasks.",
    role: "UX researcher & designer",
    timeline: "8 weeks",
    collaborators: "PM, content lead, 2 engineers",
    problem:
      "A growing content library used a nav structure inherited from org charts. Editors relied on search because browsing failed.",
    solutionSummary:
      "We validated a task-oriented taxonomy with card sorting and tree tests, then redesigned browse and filters to match mental models.",
    outcomes: [
      { label: "Findability", value: "+46% success in tree tests" },
      { label: "Search", value: "−19% search-only sessions" },
      { label: "Time", value: "−24% time to locate a template" },
    ],
  },
  {
    slug: "public-sector-aa",
    title: "Accessibility uplift for a public-sector site",
    shortDescription:
      "Prioritized fixes that helped users with assistive tech without a full visual redesign.",
    tagline:
      "High traffic from assistive tech users, but critical flows failed keyboard and screen reader checks.",
    role: "Product designer",
    timeline: "12 weeks",
    collaborators: "PM, 3 engineers, accessibility vendor",
    problem:
      "Key forms and navigation patterns failed WCAG AA checks. Legal risk and user frustration were both rising.",
    solutionSummary:
      "We triaged by severity and traffic, fixed focus order and labels, and added a consistent error pattern across forms.",
    outcomes: [
      { label: "Issues", value: "−68% critical a11y violations" },
      { label: "Task success", value: "+22% form completion (AT users)" },
      { label: "Time", value: "−18% median task time in lab tests" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}
