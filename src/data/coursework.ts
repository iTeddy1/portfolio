export interface Coursework {
  title: string
  institution: string
  period: string
  description: string | string[]
  skills?: string[]
  grade?: string
}

const COURSEWORK: Coursework[] = [
  {
    title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    institution: 'Udemy',
    period: '2023',
    description: [
      'Comprehensive JavaScript course covering fundamentals to advanced concepts',
      'Modern ES6+ features, async/await, promises, and DOM manipulation',
      'Real-world projects including web applications and interactive games',
    ],
    skills: [
      'JavaScript ES6+',
      'DOM Manipulation',
      'Async/Await',
      'Promises',
      'OOP',
      'Functional Programming',
      'API Integration',
      'Error Handling',
    ],
    grade: 'Certificate of Completion',
  },
  {
    title: 'The Ultimate React Course 2024: React, Next.js, Redux & More',
    institution: 'Udemy',
    period: '2024',
    description: [
      'Complete React ecosystem from fundamentals to Next.js 14+ with App Router',
      'Modern React with hooks, context API, and performance optimization',
      'Real-world projects including e-commerce and SaaS applications',
    ],
    skills: [
      'React.js',
      'Next.js 14+',
      'Redux Toolkit',
      'React Hooks',
      'Context API',
      'Server Components',
      'App Router',
      'Performance Optimization',
    ],
    grade: 'Certificate of Completion',
  },
  {
    title: 'React Foundations for Next.js',
    institution: 'Next.js Official Course',
    period: '2025',
    description: [
      'Official Next.js course covering React fundamentals and Next.js integration',
      'Server-side rendering (SSR), static generation (SSG), and API routes',
      'Performance optimization and production deployment strategies',
    ],
    skills: [
      'Next.js',
      'React Fundamentals',
      'SSR/SSG',
      'API Routes',
      'Middleware',
      'Performance Optimization',
    ],
    grade: 'Certificate of Completion',
  },
  {
    title: 'Next.js SEO Fundamentals',
    institution: 'Next.js Official Course',
    period: '2025',
    description: [
      'SEO best practices for Next.js applications with meta tags and structured data',
      'Core Web Vitals optimization and performance monitoring',
      'Advanced SEO techniques for dynamic content and internationalization',
    ],
    skills: [
      'SEO Optimization',
      'Meta Tags',
      'Structured Data',
      'Core Web Vitals',
      'Performance Monitoring',
      'Semantic HTML',
    ],
    grade: 'Certificate of Completion',
  },
  {
    title: 'Google Agile Essentials',
    institution: 'Google',
    period: '2025',
    description: [
      'Fundamental principles of Agile methodology and Scrum framework',
      'Sprint planning, daily standups, and retrospective meetings',
      'User story creation, backlog management, and team collaboration',
    ],
    skills: [
      'Agile Methodology',
      'Scrum Framework',
      'Sprint Planning',
      'User Stories',
      'Backlog Management',
      'Team Collaboration',
    ],
    grade: 'Google Certificate',
  },
  {
    title: 'Google AI Essentials',
    institution: 'Google',
    period: '2025',
    description: [
      'AI fundamentals and machine learning concepts for developers',
      'AI tools integration in web development workflows',
      'Ethical AI practices and responsible development principles',
    ],
    skills: [
      'AI Fundamentals',
      'Machine Learning Basics',
      'AI Tools Integration',
      'Ethical AI',
      'Productivity Enhancement',
    ],
    grade: 'Google Certificate',
  },
  {
    title: 'TOEIC English Proficiency',
    institution: 'Educational Testing Service (ETS)',
    period: '2022',
    description: [
      'International English proficiency certification for workplace communication',
      'Professional business English and technical documentation skills',
      'Cross-cultural collaboration and international communication proficiency',
    ],
    skills: [
      'Business English',
      'Technical Documentation',
      'International Communication',
      'Professional Writing',
      'Cross-cultural Collaboration',
    ],
    grade: '820/990 Score',
  },
]

export default COURSEWORK
