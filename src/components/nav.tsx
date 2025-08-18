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
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base mx-auto flex w-max gap-5 border-2 p-2.5 px-6 text-sm sm:text-base">
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'hover:border-border rounded-base border-2 px-2 py-1 whitespace-nowrap transition-colors',
                path === link.path ? 'border-border' : 'border-transparent',
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          )
        })}
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          useRecaptchaNet={false}
          useEnterprise={false}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: 'head',
            nonce: undefined,
          }}
        >
          <ContactDialog />
        </GoogleReCaptchaProvider>
        <ThemeSwitcher />
      </nav>
    </div>
  )
}
