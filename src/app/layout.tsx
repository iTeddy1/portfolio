import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'
import { RecaptchaProvider } from '@/components/recaptcha-provider'
import { Toaster } from '@/components/ui/sonner'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Duy Trung | Frontend Developer',
  description:
    'Nguyen Duy Trung is a Frontend Developer specializing in building scalable, high-performance web and mobile interfaces using React, Next.js, TypeScript.',
  alternates: {
    canonical: 'https://teddy.is-a.dev',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={montserrat.className}>
        <RecaptchaProvider>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-foreground mx-auto w-full max-w-screen-lg px-4 pt-28 pb-10 sm:px-6 md:px-8">
              {children}
            </div>
            <Toaster />
          </ThemeProvider>
        </RecaptchaProvider>
      </body>
    </html>
  )
}
