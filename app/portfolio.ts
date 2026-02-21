import type { ComponentType } from "react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

import {
  Award,
  BookOpen,
  Briefcase,
  FlaskConical,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Star,
  Trophy,
} from "lucide-react";

import {
  DiDocker,
  DiGit,
  DiGithubBadge,
  DiJava,
  DiJavascript1,
  DiLinux,
  DiPostgresql,
  DiPython,
  DiReact,
} from "react-icons/di";
import {
  SiAntdesign,
  SiC,
  SiCplusplus,
  SiDjango,
  SiFigma,
  SiFlask,
  SiGitlab,
  SiGunicorn,
  SiHuggingface,
  SiKubernetes,
  SiLatex,
  SiLinux,
  SiMarkdown,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiPytorch,
  SiR,
  SiScikitlearn,
  SiTensorflow,
  SiTailwindcss,
  SiTypescript,
  SiTelegram,
} from "react-icons/si";
import { RiTelegram2Line } from "react-icons/ri";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type QuickFact = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  description: string;
  logo?: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link: string;
  status: string;
};

export type Honor = {
  icon: LucideIcon;
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export type AcademicService = {
  logo: string;
  role: string;
  event: string;
  period: string;
};

export type ExperienceCategory = "technical" | "research";

export type Experience = {
  category: ExperienceCategory;
  title: string;
  organization: string;
  period: string;
  points: string[];
};

export type TAExperience = {
  course: string;
  organization: string;
  period: string;
};

export type ContactLink = {
  icon: LucideIcon | IconType;
  label: string;
  value: string;
  href: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
  count?: boolean;
};

export type Skill = {
  name: string;
  icon: IconType | ComponentType<any> | null;
  color: string;
};

export const SITE = {
  brand: "Souri",
  fullName: "Amirhossein Souri",
  location: "Tehran, Iran",
  photoSrc: "/photo.jpg",
  resumeSrc: "/resume.pdf",
  footerLastUpdated: "February 2026",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
];

export const HERO_SOCIAL_LINKS: SocialLink[] = [
  { label: "Email", href: "mailto:amir@souuri.ir", icon: Mail },
  { label: "GitHub", href: "https://github.com/Amir14Souri", icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/amirhossein-souri",
    icon: Linkedin,
  },
];

export const HERO_QUICK_FACTS: QuickFact[] = [
  { label: "Major", value: "B.Sc • Computer Engineering" },
  { label: "University", value: "Sharif University of Technology" },
  { label: "Focus", value: "AI & ML • Software Development • Research" },
];

export const ABOUT = {
  title: "About Me",
  subtitle: "A concise overview of my journey, motivations, and values",
  paragraphs: [
    "I'm a Computer Engineering student at Sharif University of Technology, ranked 14th among more than 145,000 participants in Iran's national university entrance exam. Alongside my academic studies, I've worked on collaborative software projects, strengthening my skills in backend systems, infrastructure, and problem-solving.",
    "I'm particularly interested in Artificial Intelligence, especially areas like machine learning, generative models, and applying AI to real-world systems, and I enjoy exploring new topics and approaches within AI and related fields. I enjoy building practical solutions that bridge theory and application. Beyond academics, I enjoy reading across a range of topics, particularly in science, technology, and self-development. I'm always looking for opportunities to collaborate, learn, and contribute to impactful projects.",
  ],
} as const;

export const PROJECTS: Project[] = [
  {
    title: "ML Models Collection",
    description:
      "Collection of some Machine Learning models, including explanation, formulas, and examples in jupyter notebooks. Both Implementation and Scikit-Learn usage are provided.",
    tags: ["Python", "Jupyter", "Scikit-Learn"],
    github: "https://github.com/ML-Exercises/",
    live: "",
  },
  {
    title: "AI Practical Exercises",
    description:
      "Practical assignments of Artificial Intelligence course, containing implementations of various AI algorithms.",
    tags: ["Python", "Jupyter", "NumPy", "PyTorch"],
    github: "https://github.com/Amir14Souri/AI-Exercises",
    live: "",
  },
  {
    title: "AI Security Exercises",
    description:
      "Practical tasks completed for research project applications at the RIML lab, containing basic attacks to unlearned models.",
    tags: ["Python", "Jupyter", "PyTorch"],
    github: "https://github.com/Amir14Souri/LabTask",
    live: "",
  },
  {
    title: "Hardwar Website",
    description: "Frontend, backend, and infrastructure of the website of Hardwar event, held on May 2025 at SUT.",
    tags: ["Python", "Django", "JavaScript", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/HardWar-Sharif",
    live: "https://hardwar-sharif.ir",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website highlighting my projects, experience, and skills in a clean and responsive design.",
    tags: ["JavaScript", "Next.js"],
    github: "https://github.com/Amir14Souri/Portfolio",
    live: "https://amir.souuri.ir",
  },
  {
    title: "BugsBuzzy Website",
    description: "Contributed to backend development of the website of BugsBuzzy event, held on October 2025 at SUT.",
    tags: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com/Bugs-Buzzy/BugsBuzzy-Backend",
    live: "",
  },
  {
    title: "Vim (Clone)",
    description:
      "Project of Fundamentals of Programming course, implementing most of the important commands of Vim editor.",
    tags: ["C", "Vim", "Ncurses"],
    github: "https://github.com/Amir14Souri/Vim-simulator",
    live: "",
  },
  {
    title: "Stronghold: Crusader (Clone)",
    description:
      "Project of Advanced Programming course, implementing a real-time simple version of the game with some extra functionalities.",
    tags: ["Java", "JavaFX", "Git"],
    github: "https://github.com/Amir14Souri/project-group-09",
    live: "",
  },
  {
    title: "aa Game",
    description:
      "Practical assignment of Advanced Programming course, implementing a version of aa game.",
    tags: ["Java", "JavaFX"],
    github: "https://github.com/Amir14Souri/AA",
    live: "",
  },
  {
    title: "Todo List",
    description: "A simple todo list with persistent local storage",
    tags: ["Python", "Flask", "HTML", "CSS"],
    github: "https://github.com/Amir14Souri/Todo-List",
    live: "",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. in Computer Engineering",
    institution: "Sharif University of Technology",
    location: "Tehran Iran",
    period: "2022 - Present",
    gpa: "",
    description: "Started with basics like programming, Focus on AI an ML",
    logo: "/logos/sut.svg",
  },
  {
    degree: "Diploma of Mathematics and Physics",
    institution: "Shahid Beheshti High School",
    location: "Tehran, Iran",
    period: "2019 - 2022",
    gpa: "",
    description: "",
    logo: "/logos/sampad.svg",
  },
];

export const EXPERIENCE_CATEGORY_CONFIG: Record<
  ExperienceCategory,
  { label: string; icon: LucideIcon; color: string; bg: string }
> = {
  technical: {
    label: "Technical",
    icon: Briefcase,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  research: {
    label: "Research",
    icon: FlaskConical,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
  },
};

export const EXPERIENCES: Experience[] = [
  {
    category: "research",
    title: "Research Assistant",
    organization: "RIML Lab, Sharif University of Technology",
    period: "Dec 2025 - Present",
    points: [
      "Robust and Interpretable Machine Learning (PI: Dr.Rohban)",
      "Conducted research on machine unlearning and attacking methods",
      "Worked on unlearning methods for Text-to-Image diffusion models",
    ],
  },
  {
    category: "technical",
    title: "Software Engineer",
    organization: "Hamravesh",
    period: "Oct 2024 - Sep 2025",
    points: [
      "Hamravesh: Managed Kubernetes platform serving business clients and customers",
      "Developed and deployed a microservice, including backend APIs, frontend UI, and Kubernetes deployment",
      "Microservice considered as a marketplace for the oneclick services, deployed on the company's infrastructure",
    ],
  },
];

export const TA_EXPERIENCES: TAExperience[] = [
  {
    course: "Artificial Intelligence",
    organization: "SUT • Dr. Mahdieh Soleymani",
    period: "Fall 2025",
  },
  {
    course: "Artificial Intelligence",
    organization: "SUT • Mr. Samiei • Mr. Fereydooni",
    period: "Spring 2025",
  },
  {
    course: "Machine Learning",
    organization: "SUT • Dr. Abolfazl Motahari",
    period: "Spring 2025",
  },
  {
    course: "Probabillity and Statistics",
    organization: "SUT • Dr. Amir Najafi",
    period: "Spring 2024 • Spring 2026",
  },
  {
    course: "Advanced Programming (Java)",
    organization: "SUT • Dr. MohammadAmin Fazli",
    period: "Spring 2024 • Spring 2026",
  },
  {
    course: "Fundamentals of Programming (Python)",
    organization: "SUT • Mr. Kazemi",
    period: "Spring 2024",
  },
  {
    course: "Fundamentals of Programming (Python)",
    organization: "Sharif MicroMaster • Dr. Hamid Zarrabi-Zadeh",
    period: "Winter 2024 • Summer 2024 • Winter 2025 • Summer 2025 • Winter 2026",
  },
  {
    course: "Programming for Data Analysis",
    organization: "Sharif MicroMaster • Dr. AmirMahdi Sadeghzadeh",
    period: "Winter 2024",
  },
  {
    course: "Data Structures and Algorithms",
    organization: "Sharif MicroMaster • Dr. MohammadAli Abam",
    period: "Winter 2024",
  },
  {
    course: "Fundamentals of Programming (C)",
    organization: "SUT • Dr. MohammadAmin Fazli",
    period: "Fall 2023 • Fall 2024 • Fall 2025",
  },
  {
    course: "Fundamentals of Programming (Python)",
    organization: "SUT • Mr. Malekzadeh",
    period: "Fall 2023",
  },
];

export const ACADEMIC_SERVICES: AcademicService[] = [
  {
    logo: "/logos/ssc.svg",
    role: "Public Relations Officer",
    event: "Student's Scientific Chapter • CE, SUT",
    period: "Jul 2025 - Present",
  },
  {
    logo: "/logos/byte.svg",
    role: "Senior Editor",
    event: "Byte Publication • CE, SUT",
    period: "May 2025 - Present",
  },
  {
    logo: "/logos/guild.svg",
    role: "President of CE Department • University Media Lead",
    event: "Student's Guild Council • SUT",
    period: "Jul 2024 - June 2025",
  },
  {
    logo: "/logos/bugsbuzzy.svg",
    role: "Technical Staff",
    event: "BugsBuzzy • CE, SUT",
    period: "Oct 2025",
  },
  {
    logo: "/logos/emeet.svg",
    role: "Technical & Graphical Design Staff",
    event: "Emeet • EE, SUT",
    period: "Aug 2025 - Oct 2025",
  },
  {
    logo: "/logos/hardwar.svg",
    role: "Vice President & Technical Lead",
    event: "Hardwar • CE, SUT",
    period: "Feb 2025 - May 2025",
  },
  {
    logo: "/logos/icpc.svg",
    role: "Technical Staff",
    event: "ICPC • CE, SUT",
    period: "Dec 2024",
  },
  {
    logo: "/logos/codocodile.svg",
    role: "Executive Staff",
    event: "CodoCodile • CE, SUT",
    period: "Nov 2024",
  },
  {
    logo: "/logos/rayan.svg",
    role: "Social Media Lead",
    event: "Rayan AI Contest • CE, SUT",
    period: "Aug 2024 - Oct 2024",
  },
  {
    logo: "/logos/s4.svg",
    role: "Marketing & Executive Staff",
    event: "S4 • CE, SUT",
    period: "May 2024",
  },
  {
    logo: "/logos/wss.svg",
    role: "Content Lead & Social Media Staff",
    event: "WSS • CE, SUT",
    period: "Nov 2023 - Mar 2024",
  },
  {
    logo: "/logos/codocodile.svg",
    role: "Social Media Staff",
    event: "CodoCodile • CE, SUT",
    period: "Sep 2023 - Nov 2023",
  },
  {
    logo: "/logos/icpc.svg",
    role: "Executive Staff",
    event: "ICPC • CE, SUT",
    period: "Apr 2023 - May 2023",
  },
];

export const PUBLICATIONS: Publication[] = [];
// export const PUBLICATIONS: Publication[] = [
//   {
//     title: "A Novel Approach to [Research Topic]",
//     authors: "Your Name, Co-Author A, Co-Author B",
//     venue: "Proceedings of the International Conference on XYZ (ICXYZ 2025)",
//     year: "2025",
//     link: "https://doi.org/10.xxxx/xxxxx",
//     status: "Published",
//   },
//   {
//     title: "Improving Performance of [Method] Using [Technique]",
//     authors: "Your Name, Advisor Name",
//     venue: "Journal of Computational Science, Vol. XX, No. X",
//     year: "2024",
//     link: "",
//     status: "Under Review",
//   },
// ];

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "amir@souuri.ir",
    href: "mailto:amir@souuri.ir",
  },
  {
    icon: Mail,
    label: "Institutional Email",
    value: "amirhossein.souri01@sharif.edu",
    href: "mailto:amirhossein.souri01@sharif.edu",
  },
  {
    icon: Globe,
    label: "Website",
    value: "amir.souuri.ir",
    href: "https://amir.souuri.ir",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/amirhossein-souri",
    href: "https://linkedin.com/in/amirhossein-souri",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/Amir14Souri",
    href: "https://github.com/Amir14Souri",
  },
  {
    icon: RiTelegram2Line,
    label: "Telegram",
    value: "t.me/Amir14Souri",
    href: "https://t.me/Amir14Souri",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "soft",
    title: "Soft Skills",
    skills: ["Accountability", "Critical Thinking", "Collaboration", "Leadership", "Adaptability"],
    count: false
  },
  {
    id: "languages",
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "R", "SQL"],
  },
  {
    id: "ml",
    title: "Machine Learning & GenAI",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn"],
  },
  {
    id: "data-science",
    title: "Data Science",
    skills: ["NumPy", "Pandas", "Matplotlib"],
  },
  {
    id: "back",
    title: "Backend Development",
    skills: ["Django", "Flask", "Gunicorn", "Nginx", "PostgreSQL"],
  },
  {
    id: "front",
    title: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "Ant Design", "Zustand"],
  },
  {
    id: "infra",
    title: "DevOps & Infrastructure",
    skills: ["Linux", "Git", "GitHub", "GitLab", "Docker", "Kubernetes", "Postman"],
  },
  {
    id: "others",
    title: "Other Technical",
    skills: ["Figma", "Markdown", "LaTeX"],
  },
];

export const SPOKEN_LANGUAGES: Record<string, string> = {
  Persian: "Native Proficiency",
  English: "Professional Working Proficiency",
  // German: "Elementary Proficiency",
};

export const getSkillsMap = (isDark: boolean): Record<string, Skill> => ({
  Python: { name: "Python", icon: DiPython, color: "#3776AB" },
  TypeScript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  JavaScript: { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
  Java: { name: "Java", icon: DiJava, color: "#007396" },
  R: { name: "R", icon: SiR, color: "#2763A5" },
  C: { name: "C", icon: SiC, color: "#A8B9CC" },
  "C++": { name: "C++", icon: SiCplusplus, color: "#00599C" },
  SQL: { name: "SQL", icon: SiMysql, color: "#4479A1" },
  React: { name: "React", icon: DiReact, color: "#61DAFB" },
  "Next.js": {
    name: "Next.js",
    icon: SiNextdotjs,
    color: isDark ? "#ffffff" : "#000000",
  },
  PyTorch: { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  TensorFlow: { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  "Hugging Face": { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
  "Scikit-Learn": { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
  NumPy: { name: "NumPy", icon: SiNumpy, color: "#013243" },
  Pandas: { name: "Pandas", icon: SiPandas, color: "#150458" },
  Matplotlib: { name: "Matplotlib", icon: null, color: "#11557c" },
  "Tailwind CSS": { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  PostgreSQL: { name: "PostgreSQL", icon: DiPostgresql, color: "#4169E1" },
  Docker: { name: "Docker", icon: DiDocker, color: "#2496ED" },
  Kubernetes: { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  Git: { name: "Git", icon: DiGit, color: "#F05032" },
  GitHub: {
    name: "GitHub",
    icon: DiGithubBadge,
    color: isDark ? "#e7e8e8" : "#181717",
  },
  Figma: { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  Linux: { name: "Linux", icon: DiLinux, color: "#FCC624" },
  Postman: { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  Django: { name: "Django", icon: SiDjango, color: "#092E20" },
  Flask: { name: "Flask", icon: SiFlask, color: isDark ? "#ffffff" : "#000000" },
  Gunicorn: { name: "Gunicorn", icon: SiGunicorn, color: "#499848" },
  Nginx: { name: "Nginx", icon: SiNginx, color: "#269539" },
  "Ant Design": { name: "Ant Design", icon: SiAntdesign, color: "#0170FE" },
  Zustand: { name: "Zustand", icon: null, color: "#000000" },
  GitLab: { name: "GitLab", icon: SiGitlab, color: "#FCA121" },
  Markdown: { name: "Markdown", icon: SiMarkdown, color: isDark ? "#ffffff" : "#000000" },
  LaTeX: { name: "LaTeX", icon: SiLatex, color: "#008080" },
});
