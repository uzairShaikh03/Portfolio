export const player = {
  name: "UZAIR SHAIKH",
  title: "SOFTWARE ENGINEER",
  tagline: "BUILDING DIGITAL WORLDS ONE LINE AT A TIME",
  location: "EARTH, SECTOR 7",
  bio: [
    "PLAYER 1 READY.",
    "Full-stack developer passionate about clean code,",
    "clever UX, and shipping products that matter.",
    "Currently seeking new quests and co-op opportunities.",
  ],
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "hello@example.com",
  },
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  score: number;
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "QUEST LOG ALPHA",
    subtitle: "E-Commerce Platform",
    description:
      "Built a full-stack marketplace with real-time inventory, payments, and admin dashboard. Reduced checkout friction by 40%.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    score: 98500,
    demo: "#",
    repo: "#",
  },
  {
    id: "proj-2",
    title: "BOSS RUSH API",
    subtitle: "Microservices Backend",
    description:
      "Designed event-driven architecture handling 10K+ req/min. Auth, caching, and observability baked in from day one.",
    tech: ["Node.js", "Redis", "Docker", "AWS"],
    score: 87200,
    demo: "#",
    repo: "#",
  },
  {
    id: "proj-3",
    title: "PIXEL DASH",
    subtitle: "Real-Time Collaboration App",
    description:
      "WebSocket-powered workspace with live cursors, CRDT sync, and sub-100ms updates across 50+ concurrent users.",
    tech: ["React", "WebSockets", "Yjs", "Tailwind"],
    score: 94100,
    demo: "#",
    repo: "#",
  },
];

export type Skill = {
  name: string;
  initials: string;
  score: number;
  rank: number;
};

export const skills: Skill[] = [
  { name: "TypeScript", initials: "TS", score: 99990, rank: 1 },
  { name: "React / Next.js", initials: "RX", score: 98500, rank: 2 },
  { name: "Node.js", initials: "ND", score: 97200, rank: 3 },
  { name: "Python", initials: "PY", score: 91000, rank: 4 },
  { name: "PostgreSQL", initials: "PG", score: 89500, rank: 5 },
  { name: "AWS / Cloud", initials: "CL", score: 86000, rank: 6 },
  { name: "Docker", initials: "DK", score: 84000, rank: 7 },
  { name: "Git", initials: "GT", score: 99000, rank: 8 },
];

export type MenuItem = {
  id: "projects" | "skills" | "about" | "contact";
  label: string;
  icon: string;
};

export const menuItems: MenuItem[] = [
  { id: "projects", label: "SELECT GAME", icon: "▶" },
  { id: "skills", label: "HIGH SCORES", icon: "★" },
  { id: "about", label: "PLAYER INFO", icon: "?" },
  { id: "contact", label: "CREDITS", icon: "@" },
];
