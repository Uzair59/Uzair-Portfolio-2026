export type Project = {
  slug: string;
  name: string;
  description: string;
  image?: string;
  tags: string[];
  year: string;
  links?: { label: string; href: string }[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "fba",
    name: "FBA",
    description: "Fulfillment by Amazon website project optimizing the user interface and integrating RTK Query APIs with Framer Motion animations.",
    image: "/images/fba.png",
    year: "Recent",
    tags: ["React.js", "RTK Query", "Framer Motion"],
    links: [
      { label: "Live Demo", href: "#" },
    ],
    highlights: [
      "Integrated API functionalities using RTK Query",
      "Created highly responsive design elements",
      "Added advanced fluid animations using Framer Motion",
    ],
  },
  {
    slug: "bsm",
    name: "Backstage Members (BSM)",
    description: "Admin panel focusing on creating a responsive UI and seamless management of user profiles, bookings, and data.",
    image: "/images/bsm.png",
    year: "Recent",
    tags: ["Next.js", "Admin Panel", "RTK Query"],
    links: [
      { label: "Live System", href: "#" },
    ],
    highlights: [
      "Developed comprehensive dashboard UI",
      "Integrated functionalities for efficient profile management",
      "Ensured data consistency across user bookings",
    ],
  },
  {
    slug: "onmine",
    name: "ONMINE",
    description: "A user profile and dashboard interface for an online project related to Bitcoin mining activities.",
    image: "/images/onmine.png",
    year: "Recent",
    tags: ["React.js", "Tailwind UI", "Dashboard"],
    links: [
      { label: "Live Frontend", href: "#" },
    ],
    highlights: [
      "Designed and implemented seamless user interface",
      "Monitored mining activities with real-time components",
      "Built visually appealing charts and stats panels",
    ],
  },
  {
    slug: "ejbni",
    name: "EJBNI",
    description: "Admin panel application handling complex integration tasks to ensure smooth communication between multiple architectural components.",
    image: "/images/ejbni.png",
    year: "Recent",
    tags: ["React", "API Integration"],
    links: [
      { label: "View Panel", href: "#" },
    ],
    highlights: [
      "Enhanced user experience within the interface",
      "Streamlined administrative internal processes",
      "Seamless REST integration tasks",
    ],
  },
  {
    slug: "learna",
    name: "LEARNA",
    description: "A Learning Management System for instructors and learners with complex and responsive UIs for both web and mobile.",
    image: "/images/learna.png",
    year: "Recent",
    tags: ["Next.js", "React Native", "RTK Query"],
    links: [
      { label: "Web Portal", href: "#" },
      { label: "App Link", href: "#" }
    ],
    highlights: [
      "Developed web app with Next.js and RTK Query",
      "Created accompanying mobile app with React Native & Axios",
      "Delivered a cross-platform user-friendly experience",
    ],
  },
  {
    slug: "premier-online",
    name: "PREMIER ONLINE",
    description: "Complete event management system allowing organizers to create events, manage venues, and users to discover tickets.",
    image: "/images/premier.png",
    year: "Recent",
    tags: ["Next.js", "RTK Query", "Event Management"],
    links: [
      { label: "Live Site", href: "#" }
    ],
    highlights: [
      "Built tools to create events and manage venues",
      "Added discount code mechanisms",
      "Enabled users to discover and book tickets easily",
    ],
  }
];

