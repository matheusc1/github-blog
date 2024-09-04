import dayjs from "dayjs"
import { LucideArrowLeft, LucideArrowUpRightFromSquare, LucideCalendarDays, LucideGithub, LucideMessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

interface IssueInfoCardProps {
  url?: URL
  title?: string
  user?: {
    login: string
  }
  created_at?: string
  comments?: number
}

export function IssueInfoCard({ url, title, user, created_at, comments }: IssueInfoCardProps) {
  return (
    <div className="sm:flex bg-profile rounded-[10px] p-8 max-w-sm sm:max-w-864 mt-4 sm:-mt-24 gap-8 shadow-md">

      <div className="sm:flex sm:flex-col sm:justify-between space-y-3 w-full">

        <div className="flex justify-between items-center mt-3 sm:mt-0">
          <Link to="/">
            <button className='flex items-center justify-center gap-2 cursor-pointer border-b border-transparent hover:border-blue hover:border-b'>
              <LucideArrowLeft strokeWidth={3} className="size-3 text-blue" />
              <span className="uppercase text-blue font-bold text-xs">Voltar</span>
            </button>
          </Link>

          <div className="flex gap-2 items-center cursor-pointer  border-b border-transparent hover:border-blue hover:border-b">
            <Link target="_blank" to={url || ''} className="uppercase text-blue font-bold text-xs">Github</Link>
            <LucideArrowUpRightFromSquare strokeWidth={3} className="size-3 text-blue" />
          </div>
        </div>

        <p className='font-bold text-2xl text-title'>{title}</p>

        <div className="flex flex-wrap gap-x-8 justify-start">
          <div className="flex items-center gap-1">
            <LucideGithub className="size-4 text-label" />
            <span className="text-span">{user?.login}</span>
          </div>

          <div className="flex items-center gap-1">
            <LucideCalendarDays className="size-4 text-label" />
            <span className="text-span">{dayjs().to(created_at)}</span>
          </div>

          <div className="flex items-center gap-1">
            <LucideMessageCircle fill='#3A536B' className="size-4 text-label" />
            <span className="text-span">{comments} comentários</span>
          </div>
        </div>

      </div>
    </div>
  )
}