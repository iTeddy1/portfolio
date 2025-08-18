import {
  type IconType,
  SiCss,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiNativescript,
  SiRedux,
  SiFigma,
  SiOdoo,
  SiGooglechrome,
  SiWordpress,
  SiVercel,
  SiShadcnui,
  SiTypescript,
  SiPhp,
  SiGraphql,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'php', icon: SiPhp },
        { skill: 'react', icon: SiReact },
        { skill: 'react-native', icon: SiNativescript },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'redux', icon: SiRedux },
        { skill: 'shadcn/ui', icon: SiShadcnui },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'graphql',
          icon: SiGraphql,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'nginx',
          icon: SiNginx,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ],
    },
    {
      field: 'Tools & Others',
      skills: [
        { skill: 'figma', icon: SiFigma },
        { skill: 'odoo', icon: SiOdoo },
        { skill: 'chrome-devtools', icon: SiGooglechrome },
        { skill: 'wordpress', icon: SiWordpress },
        { skill: 'vercel', icon: SiVercel },
      ],
    },
  ]

export default SKILLS
