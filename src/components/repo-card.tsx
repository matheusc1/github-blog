import { Link } from "react-router-dom"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime"
import Markdown from "react-markdown"
import { Issue } from "../app"

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface RepoCardProps {
  issue: Issue
  repoAndUser: string
}

export function RepoCard({ issue, repoAndUser }: RepoCardProps) {
  return (
    <Link to={`/post/${issue.number}`} state={repoAndUser}>
      <button className="flex flex-col text-left w-card bg-post rounded-lg h-64 p-8 overflow-hidden
      relative outline-none hover:ring-2 hover:ring-label focus-visible:ring-2 focus-visible:ring-blue">
        <div className="w-full flex justify-between">
          <p className="text-xl text-title font-bold w-60 -mt-1">
            {issue.title}
          </p>
          <span className="text-sm text-span">{dayjs().to(issue.created_at)}</span>
        </div>

        <Markdown className="text-span mt-5 text-ellipsis max-w-[352px] line-clamp-4">
          {issue.body}
        </Markdown>
      </button>
    </Link>
  )
}