import Education from '@/components/sections/education'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import Coursework from '@/components/sections/coursework'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ContactDialog } from '@/components/contact-dialog'
import education from '@/data/education'

const strengths = [
  'Performance-first mindset (web + mobile)',
  'Pixel-perfect, responsive UI from Figma',
  'Clean, typed code (TypeScript, ESLint)',
  'State management with Redux and modern hooks',
  'Accessibility and UX details that matter',
]

const tooling = [
  'Vercel',
  'Figma',
  'Chrome DevTools',
  'WordPress',
  'Docker',
  'Git & PR reviews',
]

const learning = ['GraphQL', 'React Native patterns', 'CI/CD automation']

export default function About() {
  return (
    <div className="font-base">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">About</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardDescription className="text-base">
            I design and build fast, reliable interfaces for web and mobile. My
            focus is shipping production-quality UI that feels great and scales.
            I enjoy turning Figma designs into clean, accessible components and
            optimizing for performance from day one.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base">
            Specialized in {education.specialize?.toLowerCase()}, I care about
            readable code, thoughtful UX, and maintainable systems. I’m
            comfortable across React, Next.js, and React Native with TypeScript
            and Tailwind.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Strengths & values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              {strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tooling & workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tooling.map((t) => (
                <Badge key={t} variant="neutral">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 mb-16">
        <CardHeader>
          <CardTitle className="text-lg">Currently learning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {learning.map((l) => (
              <Badge key={l}>{l}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Education />

      <Skills />

      <Experience />

      <Coursework />

      {/* Contact Section */}
      <Card className="mt-16">
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl">
            Let&apos;s Work Together
          </CardTitle>
          <CardDescription className="text-base sm:text-lg">
            Ready to bring your project to life? I&apos;d love to hear about
            your ideas and how I can help.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <ContactDialog>
            <Button size="lg" className="min-w-[150px]">
              Get in Touch
            </Button>
          </ContactDialog>
        </CardContent>
      </Card>
    </div>
  )
}
