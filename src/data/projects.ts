type Project = {
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
    name: 'TVE Technical',
    description:
      'High-performance freelance website with accessibility focus, multilingual support, and headless CMS architecture.',
    liveLink: 'https://iteddy1.vercel.app/work',
    previewImage: '/project1.png',
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
      'WordPress',
      'TanStack Query',
      'Vercel',
      'Render',
      'TiDB',
      'i18next',
      'shadcn/ui',
    ],
    highlights: [
      'Achieved 100/100 Lighthouse performance score and reduced First Contentful Paint by 40%',
      'Built headless WordPress CMS with 5+ custom content types for non-dev content management',
      'Implemented TanStack Query data-fetching strategy, reducing client-side API requests by 60%',
      'Designed CI/CD workflow across Vercel, Render, and TiDB for streamlined team deployment',
      'Built site-wide search system with <200ms response time',
      'Integrated i18next for multilingual support (EN & VN) with future scalability in mind',
    ],
  },
  {
    name: 'Laandlin Mobile App',
    description:
      'React Native e-commerce mobile application with optimized backend and modern UI patterns.',
    liveLink: '',
    previewImage: '/project2.png',
    repoUrl: '',
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
    liveLink: 'https://iteddy1.vercel.app',
    previewImage: '/preview.png',
    repoUrl: 'https://github.com/iTeddy1/neobrutalism-portfolio',
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
    liveLink: '',
    previewImage: '/project3.png',
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
