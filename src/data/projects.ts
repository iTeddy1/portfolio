export type Project = {
  name: string
  description: string
  previewImage: string
  repoUrl: string
  liveLink: string
  role?: string
  stack?: string[]
  highlights?: string[]
  category?: string
  status?: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    name: 'Money Management',
    highlights: [
      `Engineered an end-to-end Project Financial Management System using React 19, TypeScript, and Fastify, successfully migrating the company's manual Excel-based workflow to a centralized PostgreSQL database, establishing a "Single Source of Truth" for all financial data.`,
      'Architected a scalable Backend based on Layered Architecture and Dependency Injection, utilizing Prisma ORM and Materialized Views to handle complex financial reporting queries with real-time performance instead of batch processing.',
      'Deployed and Delivered a containerized solution using Docker & Docker Compose for on-premise infrastructure, achieving 100% delivery of MVP features and automated database backup mechanisms.',
      'Built a highly accessible and responsive UI system with shadcn/ui and Tailwind CSS. Developed complex financial forms integrated with React Hook Form and Zod schema validation, ensuring 100% data accuracy on the client side before submission.',
    ],
    description:
      'A comprehensive Project Financial Management System designed to streamline and automate financial workflows, replacing manual Excel processes with a centralized, efficient solution.',
    liveLink: '',
    previewImage: '/projects/money-management.png',
    repoUrl: 'https://github.com/iTeddy1/money-management',
    category: 'Web Development',
    status: 'Live',
    featured: true,
    role: 'Full-Stack Developer',
    stack: [
      'React 19',
      'TypeScript',
      'Fastify',
      'PostgreSQL',
      'Prisma ORM',
      'Docker',
      'shadcn/ui',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    name: 'TVE Technical',
    description:
      'Company website with accessibility focus, multilingual support, and headless CMS architecture.',
    liveLink: 'https://tve-website.vercel.app/',
    previewImage: '/projects/tve.png',
    repoUrl: '',
    category: 'Web Development',
    status: 'Live',
    featured: true,
    role: 'Full-Stack Developer',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'GraphQL',
      'Vercel',
      'WordPress',
      'TanStack Query',
      'i18next',
      'shadcn/ui',
    ],
    highlights: [
      'Achieved 100/100 Lighthouse performance score and reduced First Contentful Paint by 40% through optimization',
      'Built headless WordPress CMS with 5+ custom content types for non-dev content management and flexibility',
      'Implemented TanStack Query data-fetching strategy, reducing client-side API requests by 60% for better performance',
      'Designed CI/CD workflow across Vercel, Render, and TiDB for streamlined team deployment and automated testing',
      'Built site-wide search system with <200ms response time and enhanced user experience features',
      'Integrated i18next for multilingual support (EN & VN) with future scalability in mind and SEO benefits',
    ],
  },
  {
    name: 'Laandlin Mobile App',
    description:
      'React Native e-commerce mobile application with Node.js/Express backend and modern UI patterns for seamless shopping.',
    liveLink: '',
    previewImage: '/projects/laandlin-app.png',
    repoUrl: 'https://github.com/iTeddy1/laandlin-app',
    category: 'Mobile Development',
    status: 'Completed',
    featured: true,
    role: 'Mobile Developer',
    stack: [
      'React Native',
      'Node.js',
      'Express',
      'MongoDB',
      'Vercel',
      'Expo',
      'TypeScript',
    ],
    highlights: [
      'Implemented JWT authentication and secure user management',
      'Built product filtering & recommendation algorithms',
      'Optimized API response time from 800ms to 210ms (73% improvement)',
      'Deployed scalable backend infrastructure on Vercel',
      'Cross-platform compatibility for iOS and Android',
    ],
  },
  {
    name: 'Personal Portfolio Website',
    description:
      'Modern portfolio website showcasing projects and skills with neobrutalism design and interactive features.',
    liveLink: 'https://teddy.is-a.dev',
    previewImage: '/projects/portfolio.png',
    repoUrl: 'https://github.com/iTeddy1/portfolio',
    category: 'Web Development',
    status: 'Live',
    featured: true,
    role: 'Frontend Developer',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Framer Motion',
      'reCAPTCHA v3',
    ],
    highlights: [
      'Responsive neobrutalism design with dark/light theme support',
      'Interactive contact form with reCAPTCHA v3 integration',
      'Performance-optimized with Next.js 15 and modern React patterns',
      'Accessibility-compliant components using shadcn/ui',
      'Deployed on Vercel with automatic CI/CD integration',
    ],
  },
  {
    name: 'Laandlin E-Commerce Website',
    description:
      'Full-featured e-commerce website with performance optimization and modern React architecture.',
    liveLink: 'https://laandlin.com/',
    previewImage: '/projects/laandlin.png',
    repoUrl: '',
    category: 'Web Development',
    status: 'Completed',
    featured: false,
    role: 'Frontend Developer',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'Redux', 'Vite'],
    highlights: [
      'Complete e-commerce functionality: catalog, search, cart, checkout',
      'Consistent design system with unified color palette across 25+ pages',
      'Bundle size optimization from 20MB to 2MB (90% reduction)',
      'Improved load performance by 90% through code splitting and lazy loading',
      'State management with Redux for complex user interactions',
    ],
  },
]

export default PROJECTS
