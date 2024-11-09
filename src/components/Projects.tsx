import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className=" ">
      <div className="mx-16">
        <div className="flex items-center gap-5 py-[80px]">
          <h2 className="text-6xl font-extrabold">Projects</h2>
          <div className="h-1 min-w-0 flex-grow bg-bgDark"></div>
        </div>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-rows-1 gap-6 rounded-lg border-2 border-borders bg-container p-4 shadow-lg dark:border-borders-dark dark:bg-container-dark lg:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="w-3/4 text-xs md:text-sm">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStacks.map((tech, index) => (
                    <span key={index} className="rounded-md border border-borders bg-bgLight px-2 py-1 dark:bg-bgDark">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {project.link && (
                    <a href={project.link} target="_blank" className="fill-bgDark hover:opacity-70 dark:fill-bgLight">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="28"
                        height="28"
                        strokeWidth="2"
                      >
                        <title>External Link</title>
                        <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986"></path>
                        <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954"></path>
                      </svg>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="size-7 fill-bgDark hover:opacity-70 dark:fill-bgLight"
                    >
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <span className="w-full lg:w-[90%]">
                <img src={project.image} alt={project.title} className="w-full rounded-lg object-contain" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
