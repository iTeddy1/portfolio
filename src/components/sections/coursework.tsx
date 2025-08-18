import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import COURSEWORK from '@/data/coursework'

export default function Coursework() {
  return (
    <div className="mb-16">
      <h2 className="font-heading mb-8 text-xl sm:text-2xl">
        Coursework & Learning
      </h2>

      <div className="grid gap-6">
        {COURSEWORK.map((course, id) => (
          <Card key={id} className="overflow-hidden">
            <CardHeader>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg leading-tight sm:text-xl">
                    {course.title}
                  </CardTitle>
                  <p className="text-foreground/80 mt-1 text-sm">
                    {course.institution}
                  </p>
                </div>
                <div className="flex flex-col gap-1 sm:items-end">
                  <span className="text-sm font-medium">{course.period}</span>
                  {course.grade && (
                    <Badge variant="neutral" className="w-fit text-xs">
                      {course.grade}
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-4">
                {/* Description */}
                <div>
                  {Array.isArray(course.description) ? (
                    <ul className="list-disc space-y-1 pl-5 text-sm">
                      {course.description.map((item, idx) => (
                        <li key={idx} className="text-foreground/90">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-foreground/90 text-sm">
                      {course.description}
                    </p>
                  )}
                </div>

                {/* Skills */}
                {course.skills && course.skills.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-sm font-medium">
                      Technologies & Skills:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {course.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="neutral"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
