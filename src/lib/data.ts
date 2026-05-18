import type { WorkExperience, Project, Certificate, SkillGroup } from '@/type'

export const WORK: WorkExperience[] = [
  {
    id: 'w1',
    role: 'Senior Product Designer',
    company: 'Company Name',
    period: '2023 — Present',
    type: 'Full-time',
    description:
      'Led end-to-end design for the core product suite. Worked closely with engineering and product to ship features used by 200k+ users. Established a design system that reduced component build time by 40%.',
    tags: ['Figma', 'Design Systems', 'User Research'],
  },
  {
    id: 'w2',
    role: 'Frontend Developer',
    company: 'Another Company',
    period: '2021 — 2023',
    type: 'Full-time',
    description:
      'Built and maintained React-based web applications. Collaborated with designers to implement pixel-perfect interfaces and led migration from a legacy codebase to a modern stack.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: 'w3',
    role: 'UI/UX Designer',
    company: 'Freelance',
    period: '2020 — 2021',
    type: 'Contract',
    description:
      'Delivered brand identities, mobile app designs, and marketing websites for startups across Southeast Asia. Managed client relationships from brief to final handoff.',
    tags: ['Branding', 'Mobile Design', 'Prototyping'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'AI Writing Assistant',
    description:
      'A browser extension that uses LLMs to help writers improve clarity, tone, and style in real-time. Built with TypeScript and integrated with the OpenAI API.',
    icon: '🧠',
    tags: ['TypeScript', 'OpenAI', 'Chrome API'],
    url: 'https://github.com',
    featured: true,
  },
  {
    id: 'p2',
    name: 'Analytics Dashboard',
    description:
      'Real-time analytics platform for e-commerce teams. Features live data visualizations, cohort analysis, and automated reporting.',
    icon: '📊',
    tags: ['React', 'D3.js', 'Python'],
    url: 'https://github.com',
    featured: true,
  },
  {
    id: 'p3',
    name: 'Sustainable Living App',
    description:
      'Mobile app helping users track their carbon footprint and discover eco-friendly alternatives. Over 5,000 downloads in the first month.',
    icon: '🌿',
    tags: ['React Native', 'Firebase', 'Figma'],
    url: 'https://github.com',
  },
  {
    id: 'p4',
    name: 'Auth Microservice',
    description:
      'Open-source authentication microservice with OAuth2, JWT, and role-based access control. 300+ GitHub stars.',
    icon: '🔐',
    tags: ['Node.js', 'PostgreSQL', 'Docker'],
    url: 'https://github.com',
    github: 'https://github.com',
  },
]

export const CERTIFICATES: Certificate[] = [
  { id: 'c1', name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: 'Jan 2024' },
  { id: 'c2', name: 'Google UX Design Professional Certificate', issuer: 'Google / Coursera', date: 'Aug 2023' },
  { id: 'c3', name: 'Meta Front-End Developer Certificate', issuer: 'Meta / Coursera', date: 'Mar 2023' },
  { id: 'c4', name: 'Machine Learning Specialization', issuer: 'Stanford / Coursera', date: 'Nov 2022' },
  { id: 'c5', name: 'Figma Advanced Design Systems', issuer: 'Figma Community', date: 'Jun 2022' },
  { id: 'c6', name: 'Professional Scrum Master I', issuer: 'Scrum.org', date: 'Feb 2022' },
]

export const SKILLS: SkillGroup[] = [
  {
    category: 'Design',
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'UI/UX Design', level: 90 },
      { name: 'Design Systems', level: 85 },
      { name: 'Prototyping', level: 88 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'CSS / Tailwind', level: 92 },
      { name: 'HTML5', level: 95 },
    ],
  },
  {
    category: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Python', level: 72 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Docker / AWS', level: 65 },
    ],
  },
]