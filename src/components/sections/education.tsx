import PAST_ROLES from '@/data/experience'
import education from '@/data/education'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Education() {
  return (
    <div className="mb-16">
      <h2 className="font-heading mb-8 text-xl sm:text-2xl">Education</h2>

      <div className="mb-8">
        <div className="flex justify-between">
          <div>
            <h3 className="font-heading text-lg sm:text-xl">
              {education.school}
            </h3>
            <p className="mt-0.5 mb-4 text-sm">{education.period}</p>
          </div>
          <Avatar className="aspect-[350/283] size-16 rounded-none outline-0">
            <AvatarImage
              className="aspect-[350/283] items-center justify-center object-contain"
              src="/uit-logo.png"
              alt="Nguyen Duy Trung"
            />
            <AvatarFallback>UIT</AvatarFallback>
          </Avatar>
        </div>
        <p className="mt-0.5">
          {education.degree} - GPA: {education.gpa}/10.0
        </p>
        <p className="mt-0.5 mb-4">
          Specializing in <b>{education.specialize}</b>
        </p>
      </div>
    </div>
  )
}
