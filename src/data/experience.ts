export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Sigma Digital Solutions",
    role: "Mid Level Frontend Developer",
    start: "May 2025",
    end: "Present",
    summary: "Led the development of responsive user interfaces globally for various web applications.",
    bullets: [
      "Integrated and optimized APIs using RTK Query for efficient data handling.",
      "Collaborated with cross-functional teams to align frontend and backend functionalities.",
      "Implemented cutting-edge UI/UX designs using React.js, Next.js, and Tailwind CSS.",
    ]
  },
  {
    company: "Code Experts",
    role: "Frontend Developer",
    start: "Jan 2023",
    end: "May 2025",
    summary: "Contributed to the full development cycle of high-traffic administrative panels and SaaS platforms.",
    bullets: [
      "Led UI development for projects like FBA website and Backstage Members.",
      "Collaborated with QA engineers to ensure iterative enhancements and best practices.",
      "Worked on mobile development with React Native, Tailwind, and Axios.",
    ]
  },
  {
    company: "Elitechain LLC",
    role: "Frontend Developer",
    start: "Jun 2024",
    end: "Nov 2024",
    summary: "Focused on SaaS platforms, AI-based applications, and SMM panels.",
    bullets: [
      "Utilized Vanilla JavaScript and React JS to build dynamic interfaces.",
      "Optimized performance and scalability across various applications.",
    ]
  },
  {
    company: "Muscled Inc",
    role: "Frontend Developer",
    start: "Sep 2024",
    end: "Feb 2025",
    summary: "Worked with React JS, Tailwind CSS, and Remix JS on platforms like Unpuzzle.",
    bullets: [
      "Focused on building fast, scalable, and interactive user interfaces.",
      "Leveraged modern frontend technologies for optimized user experiences.",
    ]
  }
];

