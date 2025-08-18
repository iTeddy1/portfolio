import links from '@/data/links'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Links() {
  return (
    <div className="mt-20 mr-auto flex w-full flex-wrap items-center gap-10">
      {links.map((link) => {
        return (
          <TooltipProvider key={link.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a target="_blank" key={link.href} href={link.href}>
                  <link.icon />
                </a>
              </TooltipTrigger>
              <TooltipContent>{link.title}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      })}
    </div>
  )
}
