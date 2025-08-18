import { contactSchema } from '@/schema/contact'
import { NextRequest, NextResponse } from 'next/server'

async function verifyRecaptcha(
  token: string,
): Promise<{ success: boolean; score?: number; error?: string }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set')
    return { success: false, error: 'Server configuration error' }
  }

  if (!token) {
    console.error('No reCAPTCHA token provided')
    return { success: false, error: 'No reCAPTCHA token provided' }
  }

  try {
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${secretKey}&response=${token}`,
      },
    )

    const data = await response.json()
    console.log('reCAPTCHA verification response:', {
      success: data.success,
      score: data.score,
      action: data.action,
      challenge_ts: data.challenge_ts,
      hostname: data.hostname,
      'error-codes': data['error-codes'],
    })

    if (!data.success) {
      const errorCodes = data['error-codes'] || []
      let errorMessage = 'reCAPTCHA verification failed'

      if (errorCodes.includes('browser-error')) {
        errorMessage =
          'reCAPTCHA browser error. Please refresh the page and try again.'
      } else if (errorCodes.includes('timeout-or-duplicate')) {
        errorMessage = 'reCAPTCHA token expired. Please try again.'
      } else if (errorCodes.includes('invalid-input-secret')) {
        errorMessage = 'reCAPTCHA configuration error'
      } else if (errorCodes.includes('invalid-input-response')) {
        errorMessage = 'Invalid reCAPTCHA token'
      } else if (errorCodes.length > 0) {
        errorMessage = `reCAPTCHA error: ${errorCodes.join(', ')}`
      }

      return {
        success: false,
        error: errorMessage,
      }
    }

    // For v3, check score (0.0 = bot, 1.0 = human)
    if (data.score < 0.5) {
      return {
        success: false,
        score: data.score,
        error: `Low reCAPTCHA score: ${data.score}`,
      }
    }

    return { success: true, score: data.score }
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error)
    return { success: false, error: 'reCAPTCHA verification request failed' }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: result.error,
        },
        { status: 400 },
      )
    }

    const { name, email, subject, message, recaptchaToken } = result.data

    console.log('Contact form submission received:', {
      name,
      email,
      subject,
      hasMessage: !!message,
      hasToken: !!recaptchaToken,
      tokenLength: recaptchaToken?.length || 0,
    })

    // Verify reCAPTCHA token
    const recaptchaResult = await verifyRecaptcha(recaptchaToken)

    if (!recaptchaResult.success) {
      console.error('reCAPTCHA verification failed:', recaptchaResult.error)

      // In development, allow bypass if it's a browser-error (common in localhost)
      if (
        process.env.NODE_ENV === 'development' &&
        recaptchaResult.error?.includes('browser error')
      ) {
        console.warn(
          '⚠️  Bypassing reCAPTCHA in development due to browser-error',
        )
      } else {
        return NextResponse.json(
          { error: recaptchaResult.error || 'reCAPTCHA verification failed' },
          { status: 400 },
        )
      }
    } else {
      console.log(
        'reCAPTCHA verified successfully with score:',
        recaptchaResult.score,
      )
    }

    // TODO: Implement your email sending logic here
    // Options include:
    // - Nodemailer with SMTP
    // - SendGrid API
    // - Resend API
    // - AWS SES
    // - Mailgun API

    // Example with console logging for development
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Here you would typically:
    // 1. Send email to yourself with the contact details
    // 2. Send confirmation email to the user
    // 3. Store in database if needed
    // 4. Send notification to Slack/Discord if desired

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact form error:', error)

    return NextResponse.json(
      {
        error: 'Failed to process contact form',
        message: 'Internal server error',
      },
      { status: 500 },
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
