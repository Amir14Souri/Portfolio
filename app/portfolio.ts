import type { ComponentType } from "react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

import {
  Briefcase,
  FlaskConical,
  Github,
  Globe,
  Linkedin,
  Mail,
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
  featured?: boolean;
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

export type Manuscript = {
  title: string;
  year: string;
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
  icon: IconType | ComponentType<{ className?: string }> | null;
  color: string;
};

export const SITE = {
  brand: "Souri",
  fullName: "Amirhossein Souri",
  location: "Tehran, Iran",
  photoSrc: "/photo.jpg",
  resumeSrc: "/resume.pdf",
  footerLastUpdated: "September 2026",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Manuscript", href: "#manuscript" },
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
  { label: "Research", value: "Visual reasoning • RIML Lab" },
  { label: "Education", value: "Computer Science and Engineering • Sharif" },
];

export const ABOUT = {
  title: "About Me",
  subtitle: "Research and engineering at Sharif University of Technology",
  paragraphs: [
    "I'm a Computer Science and Engineering student at Sharif University of Technology and a research assistant at RIML Lab. I currently study visual reasoning in vision-language models, from question-conditioned visual grounding to evaluating whether model answers respond to visual evidence.",
    "My interests span machine and deep learning, computer vision and multimodal learning, language and vision-language models, ML systems, generative and trustworthy ML, reinforcement learning, multi-agent systems, and robotics. I also enjoy building software systems; at Hamravesh, I worked across APIs, interfaces, and Kubernetes integration for a cloud application marketplace.",
  ],
} as const;

export const PROJECTS: Project[] = [
  {
    title: "Question-Conditioned Visual Grounding",
    description:
      "Built question-conditioned grounding with CLIP patch and text features, converted heatmaps to boxes, and evaluated downstream VQA with Qwen2.5-VL-3B-Instruct.",
    tags: ["Python", "PyTorch", "Transformers"],
    github: "https://github.com/Amir14Souri/VisualReasoning/",
    live: "",
    featured: true,
  },
  {
    title: "DL Practical Assignments",
    description:
      "Completed 15 notebooks spanning neural networks, LoRA/QLoRA, RAG, generative models, and self-supervised vision methods.",
    tags: ["Python", "Jupyter", "PyTorch", "PEFT", "FAISS"],
    github: "https://github.com/Amir14Souri/DL-Exercises/",
    live: "",
    featured: true,
  },
  {
    title: "MIR Project",
    description:
      "Built a Goodreads search engine with BM25 and ranking evaluation, plus hybrid multimodal product search with dense and sparse retrieval and reranking.",
    tags: ["Python", "Jupyter", "PyTorch", "Transformers", "FAISS"],
    github: "https://github.com/Amir14Souri/MIR-Project/",
    live: "",
    featured: true,
  },
  {
    title: "ML Models Collection",
    description:
      "Implemented and explained supervised and unsupervised learning methods, with scikit-learn baselines for comparison.",
    tags: ["Python", "Jupyter", "Scikit-Learn"],
    github: "https://github.com/Amir14Souri/ML-Exercises/",
    live: "",
  },
  {
    title: "AI Practical Assignments",
    description:
      "Implemented search, constraint satisfaction, Bayesian inference, HMMs, and reinforcement learning algorithms for AI coursework.",
    tags: ["Python", "Jupyter", "NumPy", "PyTorch"],
    github: "https://github.com/Amir14Souri/AI-Exercises",
    live: "",
  },
  {
    title: "Machine Unlearning and Robustness Exercises",
    description:
      "Implemented class unlearning in a conditional VAE using Fisher information and evaluated recovery attacks.",
    tags: ["Python", "Jupyter", "PyTorch"],
    github: "https://github.com/Amir14Souri/LabTask",
    live: "",
    featured: true,
  },
  {
    title: "Hardwar Website",
    description: "Built frontend, backend, and infrastructure for the Hardwar event website at Sharif University of Technology.",
    tags: ["Python", "Django", "JavaScript", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/HardWar-Sharif",
    live: "https://hardwar-sharif.ir",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website highlighting my projects, experience, and skills in a clean and responsive design.",
    tags: ["TypeScript", "Next.js"],
    github: "https://github.com/Amir14Souri/Portfolio",
    live: "https://souuri.ir",
  },
  {
    title: "BugsBuzzy Website",
    description: "Contributed to backend development of the website of BugsBuzzy event, held on October 2025 at SUT.",
    tags: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com/Bugs-Buzzy/BugsBuzzy-Backend",
    live: "",
    featured: true,
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
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Sharif University of Technology",
    location: "Tehran, Iran",
    period: "2022 – Expected June 2027",
    gpa: "18.99/20",
    description: "Ranked 14th among 145,000+ participants in Iran's National University Entrance Examination.",
    logo: "/logos/sut.svg",
  },
  {
    degree: "Diploma of Mathematics and Physics",
    institution: "Shahid Beheshti High School",
    location: "Tehran, Iran",
    period: "2019 - 2022",
    gpa: "",
    description: "National Organization for Development of Exceptional Talents (NODET).",
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
    organization: "RIML Lab, Sharif University of Technology · Visual Reasoning",
    period: "Jul 2026 – Present",
    points: [
      "PI: Dr. Mohammad Hossein Rohban.",
      "Developed an initial question-conditioned visual-grounding study with CLIP features, heatmap-to-box conversion, and downstream evaluation with Qwen2.5-VL-3B-Instruct.",
      "Investigating training and evaluation methods for evidence-sensitive reasoning in vision-language models.",
    ],
  },
  {
    category: "research",
    title: "Research Assistant",
    organization: "RIML Lab, Sharif University of Technology · Diffusion Model Unlearning",
    period: "Dec 2025 – Mar 2026",
    points: [
      "PI: Dr. Mohammad Hossein Rohban.",
      "Investigated noise-robust concept unlearning for text-to-image diffusion models under adversarial and distributional variation.",
      "Contributed to adaptive noise sampling and experimental evaluation.",
    ],
  },
  {
    category: "technical",
    title: "Software Engineer",
    organization: "Hamravesh",
    period: "Oct 2024 – Sep 2025",
    points: [
      "Developed and deployed a marketplace service for one-click cloud applications across backend APIs, frontend interfaces, and Kubernetes integration.",
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
    course: "Probability and Statistics",
    organization: "SUT • Dr. Amir Najafi",
    period: "Spring 2024",
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

export const MANUSCRIPTS: Manuscript[] = [
  {
    title: "Weeding Out Bad Seeds: Noise-Robust Unlearning for Text-to-Image Diffusion Models",
    year: "2026",
    status: "Under review at ICLR 2027",
  },
];

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
    value: "souuri.ir",
    href: "https://souuri.ir",
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
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn", "Transformers", "Diffusers", "FAISS", "PEFT", "TRL", "Accelerate", "SentenceTransformers"],
  },
  {
    id: "data-science",
    title: "Data Science",
    skills: ["NumPy", "Pandas", "Matplotlib", "OpenCV", "Hugging Face Datasets", "Jupyter"],
  },
  {
    id: "back",
    title: "Backend Development",
    skills: ["Django", "Django REST Framework", "Flask", "Gunicorn", "Nginx", "PostgreSQL"],
  },
  {
    id: "front",
    title: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "Ant Design", "Zustand"],
  },
  {
    id: "infra",
    title: "DevOps & Infrastructure",
    skills: ["Linux", "Git", "GitHub", "GitLab", "Docker", "Kubernetes", "vLLM", "Postman"],
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

export const getSkillsMap = (): Record<string, Skill> => ({
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
    color: "currentColor",
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
    color: "currentColor",
  },
  Figma: { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  Linux: { name: "Linux", icon: DiLinux, color: "#FCC624" },
  Postman: { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  Django: { name: "Django", icon: SiDjango, color: "#092E20" },
  Flask: { name: "Flask", icon: SiFlask, color: "currentColor" },
  Gunicorn: { name: "Gunicorn", icon: SiGunicorn, color: "#499848" },
  Nginx: { name: "Nginx", icon: SiNginx, color: "#269539" },
  "Ant Design": { name: "Ant Design", icon: SiAntdesign, color: "#0170FE" },
  Zustand: { name: "Zustand", icon: null, color: "#000000" },
  GitLab: { name: "GitLab", icon: SiGitlab, color: "#FCA121" },
  Markdown: { name: "Markdown", icon: SiMarkdown, color: "currentColor" },
  LaTeX: { name: "LaTeX", icon: SiLatex, color: "#008080" },
});
