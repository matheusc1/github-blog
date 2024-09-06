import dayjs from 'dayjs'
import {
  LucideArrowLeft,
  LucideArrowUpRightFromSquare,
  LucideCalendarDays,
  LucideGithub,
  LucideMessageCircle,
} from 'lucide-react'
import { Link } from 'react-router-dom'

interface IssueInfoCardProps {
  url?: URL
  title?: string
  user?: {
    login: string
  }
  created_at?: string
  comments?: number
}

export function IssueInfoCard({
  url,
  title,
  user,
  created_at,
  comments,
}: IssueInfoCardProps) {
  return (
    <div className="mt-4 max-w-sm gap-8 rounded-[10px] bg-profile p-8 shadow-md sm:-mt-24 sm:flex sm:max-w-864">
      <div className="w-full space-y-3 sm:flex sm:flex-col sm:justify-between">
        <div className="mt-3 flex items-center justify-between sm:mt-0">
          <Link to="/">
            <button className="flex cursor-pointer items-center justify-center gap-2 border-b border-transparent hover:border-b hover:border-blue">
              <LucideArrowLeft strokeWidth={3} className="size-3 text-blue" />
              <span className="text-xs font-bold uppercase text-blue">
                Voltar
              </span>
            </button>
          </Link>

          <div className="flex cursor-pointer items-center gap-2 border-b border-transparent hover:border-b hover:border-blue">
            <Link
              target="_blank"
              to={url || ''}
              className="text-xs font-bold uppercase text-blue"
            >
              Github
            </Link>
            <LucideArrowUpRightFromSquare
              strokeWidth={3}
              className="size-3 text-blue"
            />
          </div>
        </div>

        <p className="text-2xl font-bold text-title">{title}</p>

        <div className="flex flex-wrap justify-start gap-x-8">
          <div className="flex items-center gap-1">
            <LucideGithub className="size-4 text-label" />
            <span className="text-span">{user?.login}</span>
          </div>

          <div className="flex items-center gap-1">
            <LucideCalendarDays className="size-4 text-label" />
            <span className="text-span">{dayjs().to(created_at)}</span>
          </div>

          <div className="flex items-center gap-1">
            <LucideMessageCircle fill="#3A536B" className="size-4 text-label" />
            <span className="text-span">{comments} comentários</span>
          </div>
        </div>
      </div>
    </div>
  )
}
