export const player = {
  name: "UZAIR SHAIKH",
  title: "SOFTWARE ENGINEER",
  tagline: "BUILDING DIGITAL WORLDS ONE LINE AT A TIME",
  location: "Toronto, ON",
  education: "Student at McMaster University — Computer Science",
  hobbies: ["Table Tennis", "Socializing", "Brawl Stars", "Building things"],
  bio: [
    "PLAYER 1 READY.",
    "Computer science student who loves building things,",
    "from full-stack apps to side projects that solve real problems.",
    "Always down for a new quest or co-op opportunity.",
  ],
  links: {
    github: "https://github.com/uzairShaikh03",
    linkedin: "https://www.linkedin.com/in/uzairshaikh07/",
    email: "uzair.shaikh1207@gmail.com",
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
    title: "UNCLUTTER",
    subtitle: "Smart Gmail Workspace",
    description:
      "Built an AI-powered Gmail organization platform using React, Node.js, Google OAuth, Gmail API, and Gemini. UnClutter automatically categorizes emails, generates summaries, and transforms cluttered inboxes into an intelligent card-based experience.",
    tech: ["React", "Node.js", "Gmail API", "Gemini", "Supabase"],
    score: 99500,
    demo: "https://un-clutter.vercel.app/",
    repo: "https://github.com/uzairShaikh03/UnClutter",
  },
];

export const projectsComingSoon = "MORE PROJECTS GETTING ADDED...";

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
