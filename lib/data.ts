export type NavItem = { label: string; href: string };
export type HeroWord = { text: string; accent?: boolean };
export type Stat = { value: number | null; suffix?: string; label: string };
export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  icon: "arrow" | "github";
};
export type ProjectStatusTone = "warning" | "success" | "accent" | "neutral";
export type ProjectVisual = "lockedin" | "yuzyai" | "financeguard" | "doormed";
export type Project = {
  id: string;
  name: string;
  tag: string;
  description: string;
  status: string;
  statusTone: ProjectStatusTone;
  visual: ProjectVisual;
  links: ProjectLink[];
};
export type ContentTheme = { title: string; description: string };
export type NowItem = { text: string; href?: string };

export const siteConfig = {
  name: "Yuzy",
  // PLACEHOLDER: replace with the live portfolio URL once deployed to Vercel
  url: "https://yuzy-portfolio.vercel.app",
  description:
    "Yuzy builds AI products, automates real workflows, and documents the journey in public.",
  // PLACEHOLDER: replace with Yuzy's real email address
  email: "hello@yuzy.dev",
  social: {
    github: "https://github.com/Yuzy67",
    instagram: "https://www.instagram.com/yuzy.creates",
    // PLACEHOLDER: replace with Yuzy's real LinkedIn profile URL
    linkedin: "https://www.linkedin.com/in/yuzy",
  },
};

export const navLinks: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Content", href: "#content" },
  { label: "Contact", href: "#contact" },
];

export const marqueePhrases = [
  "AI PRODUCTS",
  "BUILDING IN PUBLIC",
  "LOCKED IN AI",
  "SECURE AGENTS",
  "DOORMED",
  "SHIP FAST",
  "YUZY.CREATES",
];

export const hero = {
  badge: "AI Product Builder · Content Creator · Founder",
  heading: "Building AI products that people actually use.",
  lines: [
    [
      { text: "Building" },
      { text: "AI" },
      { text: "products" },
    ],
    [
      { text: "that" },
      { text: "people" },
      { text: "actually", accent: true },
      { text: "use.", accent: true },
    ],
  ] as HeroWord[][],
  sub: "I build AI products, automate real workflows, and document the journey in public.",
  primaryCta: { label: "View Projects", href: "#work" },
  status: {
    label: "Currently building",
    highlight: "Locked In AI",
    href: "https://lockedn.in",
  },
};

export const about = {
  heading: "Built to ship.",
  paragraphs: [
    "I’m Yuzy, an AI product builder and founder. I like turning messy ideas into real products: apps people can use, agents that do useful work, and systems that make life simpler.",
    "I’m currently building Locked In AI, a stress-aware study and productivity app for students. I also build AI agents, experiment with secure MCP workflows, create content at @yuzy.creates, and work with the Doormed team.",
  ],
};

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Projects Built" },
  { value: 1, label: "Product in Microsoft Store Certification" },
  { value: 1, label: "Startup: Doormed" },
  { value: null, label: "Always Building" },
];

export const projectsSection = {
  heading: "Selected Work",
  description: "Products, agents, and systems I’ve built.",
};

export const projects: Project[] = [
  {
    id: "locked-in-ai",
    name: "Locked In AI",
    tag: "Product · AI · Productivity",
    description:
      "A stress-aware AI study planner for students. It generates study plans, tracks focus sessions, and helps users build consistent routines.",
    status: "Microsoft Store certification in progress",
    statusTone: "warning",
    visual: "lockedin",
    links: [
      { label: "Visit site", href: "https://lockedn.in", external: true, icon: "arrow" },
      { label: "GitHub", href: "https://github.com/Yuzy67", external: true, icon: "github" },
    ],
  },
  {
    id: "yuzy-ai",
    name: "Yuzy AI",
    tag: "Personal AI Assistant · Automation",
    description:
      "A terminal-activated personal assistant that opens apps, controls browser actions, and helps automate everyday tasks on my system.",
    status: "Personal build",
    statusTone: "neutral",
    visual: "yuzyai",
    links: [
      { label: "GitHub", href: "https://github.com/Yuzy67", external: true, icon: "github" },
    ],
  },
  {
    id: "financeguard",
    name: "FinanceGuard",
    tag: "MCP · AI Agents · Security",
    description:
      "A secure MCP-based finance agent that executes only approved actions. It summarizes overdue invoices while blocking unauthorized refund simulations through ArmorIQ intent verification.",
    status: "Working demo",
    statusTone: "success",
    visual: "financeguard",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Yuzy67/financeguard-armoriq",
        external: true,
        icon: "github",
      },
    ],
  },
  {
    id: "doormed",
    name: "Doormed",
    tag: "Startup · Health · Team Build",
    description:
      "A startup I’m building with Anuj Shetty and seven other team members, focused on creating a meaningful health-tech product.",
    status: "Startup",
    statusTone: "accent",
    visual: "doormed",
    links: [
      { label: "Visit site", href: "https://doormed.online", external: true, icon: "arrow" },
    ],
  },
];

export const contentSection = {
  heading: "Building in public.",
  description:
    "I share the real process behind building AI products—what I’m shipping, what breaks, what I learn, and what comes next.",
};

export const contentThemes: ContentTheme[] = [
  {
    title: "Product builds",
    description: "Behind the scenes of Locked In AI, Yuzy AI, and new experiments.",
  },
  {
    title: "AI agent systems",
    description: "MCP, automation, secure agents, and real technical lessons.",
  },
  {
    title: "Startup journey",
    description: "Building Doormed and learning how real products get made.",
  },
];

export const stackSection = {
  heading: "Tools I use",
};

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "AI Integrations",
  "MCP",
  "Vercel",
  "GitHub",
  "Product Design",
  "Automation",
  "Startup Building",
];

export const nowSection = {
  heading: "Now",
};

export const now = {
  updatedAt: "October 2026",
  items: [
    { text: "Building Locked In AI", href: "https://lockedn.in" },
    { text: "Exploring secure AI agent systems" },
    { text: "Creating content at @yuzy.creates", href: "https://www.instagram.com/yuzy.creates" },
    { text: "Helping build Doormed", href: "https://doormed.online" },
  ] as NowItem[],
  pull: "I care about shipping real products, not just making demos.",
};

export const contactSection = {
  heading: "Let’s build",
  headingAccent: "something.",
  description:
    "Open to collaborations, AI product ideas, internships, and interesting builder conversations.",
};

export const footer = {
  copyright: "© 2026 Yuzy",
  builtWith: "Built with Next.js, Tailwind, and too much coffee.",
};
