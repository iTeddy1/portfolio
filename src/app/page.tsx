'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import links from '@/data/links'
import PROJECTS from '@/data/projects'
import education from '@/data/education'
import Link from 'next/link'

const resumeHref = '/Frontend%20Developer.pdf'

export default function Home() {
  return (
    <div className="font-base">
      {/* Hero */}
      <Card className="mb-12 overflow-hidden">
        <CardHeader className="from-background via-background/95 to-muted/30 relative bg-gradient-to-br p-0">
          <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
            <div className="relative shrink-0">
              <Avatar className="size-24 sm:size-32 lg:size-40">
                <AvatarImage
                  className="object-contain"
                  src="/avatar.webp"
                  alt="Nguyen Duy Trung"
                />
                <AvatarFallback className="text-lg sm:text-xl">
                  Teddy
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1 space-y-3 text-center sm:text-left">
              <div className="space-y-2">
                <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  Nguyen Duy Trung
                </CardTitle>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <CardDescription className="text-primary text-lg font-medium sm:text-xl">
                    {'<Frontend Developer />'}
                  </CardDescription>
                  <Badge variant="neutral" className="mx-auto w-fit sm:mx-0">
                    Available for work
                  </Badge>
                </div>
              </div>
              <CardDescription className="text-muted-foreground text-base leading-relaxed sm:text-lg lg:max-w-2xl">
                Frontend Developer with hands-on experience building scalable,
                high-performance web and mobile interfaces using React, Next.js,
                and React Native. Converts Figma designs into responsive,
                production-ready UIs with Tailwind CSS and TypeScript;
                experienced with Redux and modern tooling.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Quick facts */}
          <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card className="bg-secondary-background">
              <CardHeader>
                <CardTitle className="text-base">Projects</CardTitle>
                <CardDescription className="text-sm">
                  {PROJECTS.length}+ shipped and showcased
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-secondary-background">
              <CardHeader>
                <CardTitle className="text-base">Education</CardTitle>
                <CardDescription className="text-sm">
                  {education.degree}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-secondary-background">
              <CardHeader>
                <CardTitle className="text-base">Experience</CardTitle>
                <CardDescription className="">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <Badge className="px-1 py-0 text-[12px]">
                        Self-taught
                      </Badge>
                      <span className="text-muted-foreground text-[12px]">
                        3+ years
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge className="px-1 py-0 text-[12px]">Working </Badge>
                      <span className="text-muted-foreground text-[12px]">
                        6 months
                      </span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download CV
              </a>
            </Button>

            <Button asChild variant="neutral">
              <Link href="/work">View Work</Link>
            </Button>
            <Button asChild variant="neutral">
              <Link href="/about">About Me</Link>
            </Button>

            {links.map((l) => (
              <Button key={l.title} variant="neutral" asChild>
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    l.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <l.icon className="h-4 w-4" />
                  {l.title}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Featured Projects */}
      <div className="mb-8">
        <h2 className="font-heading mb-6 text-xl sm:text-2xl">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.slice(0, 2).map((project) => (
            <Card key={project.name} className="overflow-hidden">
              <div className="px-6 pt-6">
                <AspectRatio
                  className="border-border rounded-base shadow-shadow border-2"
                  ratio={55.6 / 26}
                >
                  <img
                    className="rounded-base w-full"
                    src={`${project.previewImage}`}
                    alt={project.name}
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  {project.name}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button asChild variant="neutral">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </a>
                  </Button>
                  <Button asChild variant="neutral">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild>
            <Link href="/work">View all work</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
