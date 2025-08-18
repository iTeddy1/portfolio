import PROJECTS from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'

export default function Work() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Work</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-background border-2 p-4 sm:p-5"
              key={id}
            >
              <AspectRatio
                className="border-border shadow-shadow rounded-base -bottom-[2px]! border-2"
                ratio={71 / 26}
              >
                <img
                  className="rounded-base w-full"
                  src={`${project.previewImage}`}
                  alt={project.name}
                  loading="lazy"
                />
              </AspectRatio>

              <div className="text-foreground font-base mt-5">
                <h2 className="font-heading text-xl sm:text-2xl">
                  {project.name}
                </h2>

                <p className="mt-2">{project.description}</p>

                {project.role ? (
                  <p className="mt-2 text-sm opacity-90">
                    Role: {project.role}
                  </p>
                ) : null}

                {project.stack && project.stack.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <Badge
                        key={`${project.name}-tech-${i}`}
                        variant="neutral"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                ) : null}

                {project.highlights && project.highlights.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                    {project.highlights.map((h, i) => (
                      <li key={`${project.name}-hl-${i}`}>{h}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-8 grid grid-cols-2 gap-5">
                  {project.liveLink ? (
                    <a
                      className="border-border dark:text-main-foreground bg-main text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                      href={project.liveLink}
                      target="_blank"
                    >
                      Visit
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      className="border-border dark:text-main-foreground bg-main text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                      href={project.repoUrl}
                      target="_blank"
                    >
                      Github
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
