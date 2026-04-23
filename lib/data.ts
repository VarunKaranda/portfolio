// ============================================================
// lib/data.ts — All portfolio content typed and structured
// ============================================================

export const personalInfo = {
  name: "Varun Karanda",
  title: "Software Engineer 2",
  taglines: [
    "Software Engineer 2",
    "React & Redux Specialist",
    "5 Years Production Experience",
    "AI-Augmented Developer",
    "Open to Opportunities",
  ],
  email: "varunkaranda@gmail.com",
  phone: "+91 80759 72279",
  location: "Kannur, Kerala, India",
  linkedin: "https://www.linkedin.com/in/varun-karanda/",
  summary:
    "Frontend Engineer with 5 years of experience building scalable web applications using React.js, TypeScript, and modern JavaScript (ES6+). Skilled in state management (Redux, Redux-Saga), RESTful API integration, and performance optimization. Core contributor to K-SMART, a state-scale platform supporting 35M+ users. Experienced in complex form workflows, asynchronous data handling, and production debugging. Exploring AI applications using LangChain.",
};

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Users Supported", value: 35, suffix: "M+" },
  { label: "REST APIs Integrated", value: 150, suffix: "+" },
  { label: "Service Modules", value: 15, suffix: "" },
];

export const skills = {
  Frontend: [
    "React.js",
    "JavaScript",
    "TypeScript",
    "React Hooks",
    "Redux Toolkit",
    "Redux Saga",
    "React Hook Form",
    "Tailwind CSS",
    "Chakra UI",
    "Styled Components",
    "HTML5",
    "CSS3",
  ],
  "Backend & APIs": ["Python", "Flask", "Django", "Node.js", "SQL", "REST APIs", "API Integration"],
  Tools: ["Git", "GitHub", "Redis", "AWS S3", "Puppeteer", "K9s"],
  Testing: ["Vitest", "Unit Testing", "Component Testing", "Test-Driven Debugging"],
  "AI & Emerging": ["LangChain", "LLM Concepts", "Agentic AI"],
  Practices: [
    "Agile",
    "Code Review",
    "Responsive Design",
    "Accessibility",
    "Debugging",
    "Problem Solving",
  ],
};

export type SkillCategory = keyof typeof skills;

export const experience = [
  {
    company: "Edstem Technologies Pvt. Ltd.",
    location: "Kochi, Kerala, India",
    roles: [
      {
        title: "Software Engineer 2",
        period: "May 2024 – Present",
        current: true,
        bullets: [
          "Led end-to-end frontend delivery for K-SMART’s Hindu Marriage (Civil Registration) and Rent Module (Property Tax), contributing to design decisions for scalable multi-step workflows.",
          "Drove integration and enhancement of civil registration workflows (Birth, Death & Marriage), supporting 35M+ users.",
          "Contributed to the integration of 150+ REST APIs across large-scale service modules, implementing centralized error handling and diagnosing production issues using K9s and Kubernetes logs.",
          "Partnered on building a document generation service using Puppeteer, Redis, and AWS S3, contributing to Redis-based job deduplication and S3 caching to reduce certificate retrieval time from multi-second rendering to sub-second responses under peak traffic.",
          "Led and mentored a frontend team of 8, conducting structured code reviews with 24–48 hour turnaround, and collaborating with backend and QA teams to maintain release quality.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Jun 2022 – Apr 2024",
        current: false,
        bullets: [
          "Developed and maintained the shared React component library used across K-SMART modules, establishing reusable UI patterns that improved consistency and reduced duplication across the platform.",
          "Initiated development of core civil registration workflows (Birth, Death & Marriage), establishing the foundation for multi-step forms with dynamic validation and role-based access.",
          "Implemented complex registration flows using React Hook Form and Redux-Saga, improving data consistency and reducing validation errors by ~20% across citizen-facing modules.",
          "Integrated REST APIs across multiple service modules, managing asynchronous state using Redux-Saga and contributing to centralized error handling patterns across the platform.",
        ],
      },
      {
        title: "Junior Software Engineer",
        period: "Jun 2021 – May 2022",
        current: false,
        bullets: [
          "Built a feature-rich expert marketplace (RecSperts – USA) using React, implementing multi-criteria search, real-time booking workflows, and provider analytics dashboards.",
          "Built compliance and risk visualisation dashboards for Crown Jewel – an Australian enterprise cybersecurity platform – translating complex asset-protection data into interactive panels for non-technical stakeholders.",
        ],
      },
    ],
  },
  {
    company: "My Softnet",
    location: "Kerala, India",
    roles: [
      {
        title: "Frontend Intern",
        period: "Nov 2020 – May 2021",
        current: false,
        bullets: [
          "Developed responsive and accessible UI components using React.js, and contributed to identifying and resolving API integration issues in a production environment.",
          "Gained hands-on experience across the frontend development lifecycle, including translating design mockups into pixel-accurate UI and contributing to feature releases in a collaborative team environment.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: "K-SMART Civil Registration Platform",
    tag: "Government of Kerala",
    tech: ["React", "Tailwind", "Redux Saga", "React Hook Form", "REST APIs", "Chakra-UI"],
    description:
      "State-wide e-governance platform unifying 15+ modules for Local Self Government Institutions, covering civil registration, property tax, building permits, pensions, finance, and more, with real-time tracking and digital certificate issuance, supporting 35M+ users.",
    featured: true,
    icon: "🏛️",
    color: "from-blue-600/20 to-cyan-600/20",
    borderColor: "border-blue-500/30",
  },
  {
    name: "PDF & Certificate Generation Service",
    tag: "Infrastructure",
    tech: ["Node.js", "Puppeteer", "Redis", "AWS S3"],
    description:
      "Asynchronous document generation pipeline using Puppeteer, Redis, and AWS S3, designed for high-volume certificate processing, optimizing performance through caching and request deduplication.",
    featured: false,
    icon: "📄",
    color: "from-purple-600/20 to-pink-600/20",
    borderColor: "border-purple-500/30",
  },
  {
    name: "RecSperts – Expert Marketplace",
    tag: "USA",
    tech: ["React", "Redux", "REST APIs", "Tailwind"],
    description:
      "Marketplace platform connecting service providers with users across multiple categories, featuring authentication, booking workflows, reviews, and analytics dashboards, with reusable UI components for scalability and a consistent, responsive design.",
    featured: false,
    icon: "🌐",
    color: "from-green-600/20 to-teal-600/20",
    borderColor: "border-green-500/30",
  },
  {
    name: "Crown Jewel – Cyber Resilience System",
    tag: "Australia",
    tech: ["React", "Redux", "Styled Components", "REST APIs"],
    description:
      "Enterprise cybersecurity platform providing compliance and risk visualization through interactive dashboards, translating complex asset-protection data into actionable insights for non-technical stakeholders, with real-time monitoring and exportable reports.",
    featured: false,
    icon: "🛡️",
    color: "from-amber-600/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
  },
];

export const certifications = [
  {
    name: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/varunkaranda/34BE79F88F323A65?sharingId=8ABD49D609BE9A1B",
    icon: "☁️",
    color: "from-blue-500/20 to-sky-500/20",
    verified: true,
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    link: "https://verify.skilljar.com/c/58wqspn5esze",
    icon: "🤖",
    color: "from-orange-500/20 to-amber-500/20",
    verified: true,
  },
  {
    name: "Gemini CLI: Code & Create with an Open-Source Agent",
    issuer: "Google",
    link: "",
    icon: "✨",
    color: "from-teal-500/20 to-cyan-500/20",
    verified: false,
  },
  {
    name: "Agent Skills with Anthropic",
    issuer: "Anthropic",
    link: "",
    icon: "🧠",
    color: "from-purple-500/20 to-violet-500/20",
    verified: false,
  },
  {
    name: "Agentic AI",
    issuer: "DeepLearning.AI",
    link: "https://learn.deeplearning.ai/certificates/70d5085a-8f64-4675-9151-9f87d6aab875?usp=sharing",
    icon: "⚡",
    color: "from-yellow-500/20 to-orange-500/20",
    verified: true,
  },
  {
    name: "LangChain for LLM Application Development",
    issuer: "DeepLearning.AI / Andrew Ng",
    link: "",
    icon: "🔗",
    color: "from-green-500/20 to-emerald-500/20",
    verified: false,
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  college: "College of Engineering Trikaripur",
  location: "Kerala, India",
  years: "2010 – 2014",
};
