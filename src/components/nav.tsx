'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from './ui/button'
import { ContactDialog } from './contact-dialog'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/work',
      text: 'Work',
    },
  ]

  return (
    <div className="fixed left-0 z-50 w-full md:top-5">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base mx-auto flex w-max max-w-[calc(100vw-1rem)] gap-2 overflow-hidden border-2 p-2 px-3 text-xs sm:gap-5 sm:p-2.5 sm:px-6 sm:text-base">
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'hover:border-border rounded-base border-2 px-1 py-1 text-xs whitespace-nowrap transition-colors sm:px-2 sm:text-base',
                path === link.path ? 'border-border' : 'border-transparent',
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          )
        })}

        <ContactDialog />
        <ThemeSwitcher />
      </nav>
    </div>
  )
}
