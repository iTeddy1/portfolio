import { IconType, SiGithub, SiGmail } from '@icons-pack/react-simple-icons'
import { Linkedin } from 'lucide-react'

const links: { title: string; icon: IconType; href: string }[] = [
  {
    title: 'gmail',
    icon: SiGmail,
    href: 'mailto:duytrung.ng1@gmail.com',
  },
  {
    title: 'github',
    icon: SiGithub,
    href: 'https://github.com/iTeddy1',
  },
  {
    title: 'linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/duytrungnguyen1/',
  },
]

export default links
