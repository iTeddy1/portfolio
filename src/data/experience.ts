const PAST_ROLES: {
  company: string
  role: string
  description: string | string[]
  startDate: string
  endDate: string
  location?: string
  type?: string
  achievements?: string[]
}[] = [
  {
    company: 'TVE Technique Company Limited',
    role: 'Software Engineer Intern',
    location: 'Vietnam',
    type: 'Internship',
    description: [
      'Built reusable frontends with custom validation, shared layouts, table wrappers, standardizing data workflows.',
      'Architected a reusable backend framework based on Layered Architecture,enabling standardized, scalable solutions across ERP applications and successfully applied to 2 company projects.',
      'Deployed the containerized app on-site using Docker,delivering real-time reporting & reducing manual work.',
      'Focused on performance optimization, accessibility standards, and clean code practices (ESLint/TypeScript)',
    ],
    startDate: 'July 2025',
    endDate: 'December 2025',
    achievements: [
      'Successfully delivered pixel-perfect UI components',
      'Improved code quality through TypeScript implementation',
      'Contributed to team agile development processes',
    ],
  },
  {
    company: 'Atom Solution',
    role: 'Frontend Developer Intern',
    location: 'Vietnam',
    type: 'Internship',
    description: [
      'Built responsive Next.js interfaces from Figma designs using Tailwind CSS and TypeScript',
      'Implemented reusable components with shadcn/ui and managed state with Redux',
      'Collaborated in agile sprints with code reviews and Git workflows',
      'Focused on performance optimization, accessibility standards, and clean code practices (ESLint/TypeScript)',
    ],
    startDate: 'March 2025',
    endDate: 'March 2025',
    achievements: [
      'Successfully delivered pixel-perfect UI components',
      'Improved code quality through TypeScript implementation',
      'Contributed to team agile development processes',
    ],
  },
  {
    company: 'Personal Projects & Freelance',
    role: 'Frontend Developer',
    location: 'Remote',
    type: 'Freelance & Open Source',
    description: [
      'Delivered multiple React/Next.js projects with modern UI patterns, API integrations, and state management',
      'Translated Figma designs into pixel-perfect, mobile-first user interfaces',
      'Deployed applications to Vercel with environment-aware configurations and CI/CD workflows',
      'Practiced component composition, custom hooks, and performance optimization best practices',
      'Built high-performance websites with 100/100 Lighthouse scores and accessibility compliance',
    ],
    startDate: '2023',
    endDate: 'Present',
    achievements: [
      'Achieved 100/100 Lighthouse performance scores',
      'Reduced First Contentful Paint by 40% through optimization',
      'Built multilingual support with i18next integration',
      'Implemented robust data-fetching strategies with 60% reduction in API requests',
    ],
  },
]

export default PAST_ROLES
