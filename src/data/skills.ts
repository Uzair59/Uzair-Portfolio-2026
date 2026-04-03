export type Skill = {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
  summary: string;
};

export const skills: Skill[] = [
  {
    name: "React.js & Next.js",
    level: "Expert",
    summary: "2.5+ years building dynamic, responsive, and highly performant web applications.",
  },
  {
    name: "Redux & RTK Query",
    level: "Expert",
    summary: "Integrated and optimized APIs resulting in more efficient data handling.",
  },
  {
    name: "React Native",
    level: "Proficient",
    summary: "Mobile development experience utilizing Tailwind for UI and Axios for APIs.",
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    summary: "Implemented cutting-edge UI/UX designs seamlessly across all projects.",
  },
  {
    name: "TypeScript & JavaScript",
    level: "Advanced",
    summary: "Extensive experience using Vanilla JS and modern ES+ features.",
  },
  {
    name: "Git & Jira",
    level: "Advanced",
    summary: "Collaborated with cross-functional teams in agile environments.",
  },
];

