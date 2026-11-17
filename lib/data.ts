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
export type ProjectStage = "Live" | "In progress" | "Prototype" | "Experiment";
export type ProjectVisual =
  | "lockedin"
  | "yuzyai"
  | "financeguard"
  | "doormed"
  | "handful";

export type ProjectMediaVideo = {
  src: string;
  poster: string;
  label: string;
  duration: string;
  width: number;
  height: number;
};

export type ProjectMedia =
  | { kind: "videos"; videos: ProjectMediaVideo[]; note?: string }
  | { kind: "screenshots"; shots: { src: string; alt: string }[] }
  | { kind: "placeholder"; title: string; note: string };

export type ProjectDetail = {
  /** One-line outcome / positioning statement. */
  positioning: string;
  problem: string;
  why: string;
  /** Actual, verifiable capabilities. */
  what: string[];
  /** How the system works. Optional for product-only projects. */
  how?: string[];
  audience?: string;
  role: string;
  /** Honest scope limits and open questions. */
  limits?: string[];
  /** Intended benefit, framed as intent rather than proof. */
  intended?: string;
  stack: string[];
  stage: ProjectStage;
  media?: ProjectMedia;
};

export type Project = {
  id: string;
  name: string;
  tag: string;
  description: string;
  status: string;
  statusTone: ProjectStatusTone;
  visual: ProjectVisual;
  links: ProjectLink[];
  /** Label for the secondary card action that opens the detail overlay. */
  detailCta: string;
  detail: ProjectDetail;
};
export type ContentTheme = { title: string; description: string };
export type NowItem = { text: string; href?: string };
export type ContactPod = {
  id: string;
  label: string;
  handle: string;
  href: string;
  icon: "mail" | "github" | "instagram" | "linkedin";
};

export const siteConfig = {
  name: "Yuzy",
  url: "https://yuzy-portfolio-udji.vercel.app",
  description:
    "Yuzy builds AI products, automates real workflows, and documents the journey in public.",
  tagline:
    "Building AI products, automating real workflows, and documenting the journey in public.",
  roles: ["AI Product Builder", "Content Creator", "Founder"],
  email: "yuzyisgreat@gmail.com",
  social: {
    github: "https://github.com/Yuzy67",
    instagram: "https://www.instagram.com/yuzy.creates",
    linkedin: "https://www.linkedin.com/in/yuvraj-singh-9828b2430",
  },
};

export const navLinks: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Content", href: "#content" },
  { label: "Contact", href: "#contact" },
];

export const marqueePhrases = [
  "AI PRODUCTS",
  "BUILDING IN PUBLIC",
  "LOCKED IN AI",
  "SECURE AGENTS",
  "DOORMED",
  "HANDFUL VR",
  "SHIP FAST",
  "YUZY.CREATES",
];

export const hero = {
  badge: "AI Product Builder · Content Creator · Founder",
  heading: "Building AI products that people actually use.",
  lines: [
    [{ text: "Building" }, { text: "AI" }, { text: "products" }],
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
  title: "Built to",
  titleAccent: "ship.",
  paragraphs: [
    "I’m Yuzy, an AI product builder and founder. I like turning messy ideas into real products: apps people can use, agents that do useful work, and systems that make life simpler.",
    "I’m currently building Locked In AI, a stress-aware study and productivity app for students. I also build AI agents, experiment with secure MCP workflows, create content at @yuzy.creates, and co-found Doormed with Anuj Shetty.",
  ],
};

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Projects Built" },
  { value: 1, label: "Product in Microsoft Store Certification" },
  { value: 1, label: "Startup: Doormed" },
  { value: null, label: "Always Building" },
];

export const projectsSection = {
  title: "Selected",
  titleAccent: "Work",
  description: "Products, agents, and systems I’ve built.",
};

export const projects: Project[] = [
  {
    id: "locked-in-ai",
    name: "Locked In AI",
    tag: "Product · AI · Productivity",
    description:
      "A stress-aware AI study planner for students. It generates deadline-paced study plans, runs focus sessions, and helps users build routines that survive a missed day.",
    status: "Microsoft Store certification in progress",
    statusTone: "warning",
    visual: "lockedin",
    detailCta: "Why I built it",
    links: [
      {
        label: "Visit Locked In AI",
        href: "https://lockedn.in",
        external: true,
        icon: "arrow",
      },
    ],
    detail: {
      positioning:
        "A study planner that turns a stressful deadline into one five-minute first step.",
      problem:
        "When an exam is close, the hard part usually isn’t knowing what to study. It’s starting. Plans get made in notes apps, abandoned after a missed day, and the next decision becomes harder than the work itself.",
      why: "I wanted to see whether AI could do more than generate a to-do list: pace a plan against real deadlines, notice when someone is falling behind, and make the next step small enough to actually start.",
      what: [
        "Exam Mode builds a countdown schedule around school hours and re-paces it when a day gets missed.",
        "Start Now picks one task and opens a single five-minute block, so the first action is already decided.",
        "Deadline-paced goals advance through daily plan blocks instead of one long backlog.",
        "Four planning voices — Study, Chill, Crunch and Roast — change how the plan is framed.",
        "Streaks can be protected with earned freezes instead of resetting to zero.",
        "A Cortisol Meter estimates stress and readiness from seven-day completion, streak health and idle days.",
        "An optional read-only calendar connection plans focus blocks around existing commitments.",
        "Core planning, the focus timer and streaks are free; Pro and Founder passes add monthly AI credits. Guest mode works without an account.",
      ],
      intended:
        "Designed to lower the cost of starting and keep the plan honest when a day goes wrong. Those are design intentions, not measured outcomes.",
      audience: "Students managing exams, deadlines and inconsistent routines.",
      role: "Solo builder — product, design and build.",
      limits: [
        "The Cortisol Meter is a readiness estimate, not a clinical or medical measure.",
        "Calendar awareness is opt-in and read-only.",
      ],
      stack: ["Next.js", "Web app", "PWA", "AI planning", "Read-only calendar"],
      stage: "Live",
      media: {
        kind: "videos",
        note: "Two short walkthroughs of the live product, with sound. They load only when you press play.",
        videos: [
          {
            src: "/projects/locked-in-ai-walkthrough.mp4",
            poster: "/projects/locked-in-ai-walkthrough.jpg",
            label: "From a deadline to a focus block",
            duration: "29s",
            width: 720,
            height: 1280,
          },
          {
            src: "/projects/locked-in-ai-focus-loop.mp4",
            poster: "/projects/locked-in-ai-focus-loop.jpg",
            label: "The 25-minute focus session",
            duration: "21s",
            width: 720,
            height: 1280,
          },
        ],
      },
    },
  },
  {
    id: "yuzy-ai",
    name: "Yuzy AI",
    tag: "Personal AI Assistant · Automation",
    description:
      "A local, terminal- and voice-activated assistant that opens apps, runs routine actions and keeps short-term context on my own machine.",
    status: "Personal build",
    statusTone: "neutral",
    visual: "yuzyai",
    detailCta: "How it works",
    links: [
      {
        label: "View GitHub",
        href: "https://github.com/Yuzy67",
        external: true,
        icon: "github",
      },
    ],
    detail: {
      positioning:
        "A Jarvis-style personal AI agent that automates everyday tasks on my own machine.",
      problem:
        "Small tasks — opening the right apps, running a routine, finding context from earlier — break focus because each one means switching tools. Individually they are trivial; together they add up.",
      why: "Built as a personal experiment: how much of my daily workflow can one assistant handle without giving it broad, unchecked permissions?",
      what: [
        "Terminal- and voice-activated entry points.",
        "Opens apps and runs routine actions on my machine.",
        "Performs browser actions through a companion extension.",
        "Keeps short-term context in a local database.",
        "Speaks replies through a voice layer.",
      ],
      how: [
        "A local Python server receives commands from the terminal, the voice listener or the browser extension.",
        "Each command is routed to the matching action, with context stored locally between requests.",
        "Text-to-speech returns the result; the assistant is not exposed as a public multi-user service.",
      ],
      intended:
        "Designed to reduce context switching on repetitive tasks. It is a personal tool, and the usefulness described here is my own experience rather than a measured study.",
      role: "Solo builder — assistant, voice layer and browser extension.",
      limits: [
        "Single-user and tied to my machine and local setup.",
        "Not hardened for other users or untrusted input.",
        "Limited integrations; unfamiliar commands can fail.",
        "The repository isn’t public yet, so the GitHub link goes to my profile.",
        "No public hosted demo.",
      ],
      stack: ["Python", "JavaScript", "ElevenLabs", "Browser extension", "SQLite"],
      stage: "Prototype",
    },
  },
  {
    id: "financeguard",
    name: "FinanceGuard",
    tag: "MCP · AI Agents · Security",
    description:
      "A secure MCP finance assistant that reads and summarizes invoices, but can only execute actions inside an explicitly approved plan.",
    status: "Working demo",
    statusTone: "success",
    visual: "financeguard",
    detailCta: "How it works",
    links: [
      {
        label: "View GitHub",
        href: "https://github.com/Yuzy67/financeguard-armoriq",
        external: true,
        icon: "github",
      },
      {
        label: "Live demo",
        href: "https://financeguard-armoriq.vercel.app",
        external: true,
        icon: "arrow",
      },
    ],
    detail: {
      positioning:
        "Approved actions execute. Everything else gets blocked before it runs.",
      problem:
        "An AI agent with valid credentials can still attempt an action nobody approved. Reviewing an invoice should never quietly become a refund or a transfer.",
      why: "Built as a hackathon project for ArmorIQ. The goal was to protect invoice workflows and other money-related actions from an agent doing something that wasn’t approved.",
      what: [
        "Reads a workspace of invoices and identifies overdue records.",
        "Summarizes overdue invoices and prepares reminder drafts.",
        "Exports reports and CSV under an explicitly approved plan.",
        "Blocks actions outside that plan — a refund attempt under a summary plan is rejected.",
        "Never moves money or sends email; no payment or email execution is connected.",
      ],
      how: [
        "The user chooses a source, selects one action and approves a five-minute plan.",
        "In ArmorIQ mode the backend creates an SDK session, captures the plan and obtains an intent token.",
        "Permission is checked, then the MCP tool is invoked through ArmorIQ rather than directly.",
        "Anything outside the approved intent is rejected by SDK intent binding before the proxy call happens.",
        "The conversation assistant uses OpenRouter tool calling with server-owned history and inline human approval.",
        "The interface reports connection and verification status instead of implying a live payment integration.",
      ],
      intended:
        "Designed so an agent can be useful on financial workflows without being trusted with unrestricted authority. This is a working prototype, not a production finance system.",
      audience:
        "Small businesses and accountants who want agent help with receivables without handing over payment authority.",
      role: "Co-built with Anuj A Shetty.",
      limits: [
        "Zoho OAuth and test-only Razorpay/Stripe invoice adapters exist locally; real provider verification is still pending.",
        "A fresh real-provider ArmorIQ trace check is still required after hosting variables are imported.",
      ],
      stack: ["Python", "FastAPI", "MCP", "ArmorIQ SDK", "OpenRouter", "Firebase", "SQLite", "HTML/CSS/JS"],
      stage: "Prototype",
      media: {
        kind: "placeholder",
        title: "Product screenshots coming soon",
        note: "This space is reserved for the workspace and approval-flow screenshots. No mockups or invented UI are shown in the meantime.",
      },
    },
  },
  {
    id: "doormed",
    name: "Doormed",
    tag: "Startup · Health · Team Build",
    description:
      "A health startup I co-founded with Anuj Shetty: condition-aware dashboards for sleep, hydration, nutrition, workouts, medication and symptoms.",
    status: "Live site · early access",
    statusTone: "accent",
    visual: "doormed",
    detailCta: "Why I built it",
    links: [
      {
        label: "Visit Doormed",
        href: "https://doormed.online",
        external: true,
        icon: "arrow",
      },
    ],
    detail: {
      positioning:
        "One condition-aware health dashboard instead of ten disconnected apps.",
      problem:
        "Managing a chronic condition means tracking sleep, food, water, movement, medication and symptoms across notes, chat threads and apps that don’t talk to each other. The picture stays incomplete, and the daily work becomes a second job.",
      why: "I co-founded Doormed with Anuj A Shetty, who leads the product as founder. The product starts from a simple idea: the system should fit the condition, not the other way round.",
      what: [
        "A health dashboard built around a specific condition, covering sleep, hydration, nutrition and workouts.",
        "A dedicated module for the condition itself, including medication and symptom tracking.",
        "A private Android vault for organizing medical documents.",
        "An AI scanner and AI insights that surface patterns across daily inputs.",
        "A health score that ties the tracked signals together.",
      ],
      how: [
        "Daily inputs feed one dashboard instead of separate apps.",
        "Symptom and habit data are correlated so patterns become visible.",
        "Guidance and routines are adjusted from those patterns.",
        "Early access runs through the site while the beta rolls out.",
      ],
      intended:
        "Designed to give people managing a condition one place that connects daily inputs and symptom history, instead of a stack of separate apps. It is an early product, not a clinical tool.",
      audience:
        "People managing a chronic condition, plus families and caregivers coordinating care.",
      role:
        "Co-founder. Founder and product lead: Anuj A Shetty. I build alongside the Doormed team.",
      stack: ["React", "Vite", "Web", "Android"],
      stage: "Live",
    },
  },
  {
    id: "handful",
    name: "Handful",
    tag: "VR Game · Interactive · Shipped",
    description:
      "A camera-based 3D playground you play with your hands — sculpt particles, draw in AR and slice fruit straight from the browser.",
    status: "Live on Vercel",
    statusTone: "success",
    visual: "handful",
    detailCta: "How it works",
    links: [
      {
        label: "Play Handful",
        href: "https://handful-iota.vercel.app/",
        external: true,
        icon: "arrow",
      },
      {
        label: "View GitHub",
        href: "https://github.com/Yuzy67/Handful",
        external: true,
        icon: "github",
      },
    ],
    detail: {
      positioning:
        "A hand-gesture playground in the browser — no headset, no install.",
      problem:
        "Most focus and productivity tools are passive and screen-bound. I wanted to test whether moving your hands could make a short session feel more engaging.",
      why: "Built to explore camera-based interaction: what changes when your webcam becomes the controller?",
      what: [
        "Particles: a fist collapses the cloud, finger counts morph it through five shapes, a pinch resizes it, and two hands stretch it.",
        "AR drawing: point an index finger to paint a glowing 3D tube, switch brushes with two to five fingers, and grab the whole drawing with a fist.",
        "Slice fruit: eleven procedurally textured fruits arc under gravity and can be cut with a hand gesture.",
      ],
      how: [
        "MediaPipe HandLandmarker tracks up to two hands from the webcam, using the GPU with an automatic CPU fallback.",
        "Landmarks are smoothed, then mapped to gestures such as fist, pinch and extended fingers.",
        "Three.js renders the particle cloud, the extruded drawing geometry and the fruit meshes.",
        "Everything runs client-side: no accounts, API keys or paid services.",
      ],
      intended:
        "Intended to make a short break feel active and playful. Whether that improves focus or wellbeing is a hypothesis, not a proven outcome.",
      audience: "Anyone with a webcam who wants to try hand-tracked 3D interaction.",
      role: "Solo builder — interaction design, hand tracking and 3D implementation.",
      stack: ["JavaScript", "Three.js", "MediaPipe", "WebGL / GLSL"],
      stage: "Live",
    },
  },
];

export const contentSection = {
  title: "Building in",
  titleAccent: "public.",
  description:
    "I share the real process behind building AI products—what I’m shipping, what breaks, what I learn, and what comes next.",
};

export const contentThemes: ContentTheme[] = [
  {
    title: "Product builds",
    description:
      "Behind the scenes of Locked In AI, Yuzy AI, and new experiments.",
  },
  {
    title: "AI agent systems",
    description: "MCP, automation, secure agents, and real technical lessons.",
  },
  {
    title: "Startup journey",
    description:
      "Building Doormed and learning how real products get made.",
  },
];

export const stackSection = {
  title: "Tools I",
  titleAccent: "use",
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
  title: "Now",
};

export const now = {
  updatedAt: "November 2026",
  items: [
    { text: "Building Locked In AI", href: "https://lockedn.in" },
    { text: "Exploring secure AI agent systems" },
    {
      text: "Creating content at @yuzy.creates",
      href: siteConfig.social.instagram,
    },
    { text: "Helping build Doormed", href: "https://doormed.online" },
  ] as NowItem[],
  pull: "I care about shipping real products, not just making demos.",
};

export const contactSection = {
  title: "Let’s build",
  titleAccent: "something.",
  description:
    "Open to collaborations, AI product ideas, internships, and interesting builder conversations.",
};

export const contactPods: ContactPod[] = [
  {
    id: "email",
    label: "Email",
    handle: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@Yuzy67",
    href: siteConfig.social.github,
    icon: "github",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@yuzy.creates",
    href: siteConfig.social.instagram,
    icon: "instagram",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Yuvraj Singh",
    href: siteConfig.social.linkedin,
    icon: "linkedin",
  },
];

export const footer = {
  copyright: "© 2026 Yuzy",
  builtWith: "Built with Next.js, Tailwind, and too much coffee.",
};
