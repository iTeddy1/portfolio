'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { useEffect } from 'react'

interface RecaptchaProviderProps {
  children: React.ReactNode
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  useEffect(() => {
    console.log(
      'reCAPTCHA Site Key:',
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? 'Configured' : 'Missing',
    )
  }, [])

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      useRecaptchaNet={false}
      useEnterprise={false}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
