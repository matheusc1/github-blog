import 'dayjs/locale/pt-br'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { Issue } from './index'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface RepositoryCardProps {
  issue: Issue
  repositoryAndUser: string
}

export function RepositoryCard({
  issue,
  repositoryAndUser,
}: RepositoryCardProps) {
  return (
    <Link to={`/post/${issue.number}`} state={repositoryAndUser}>
      <button className="flex h-64 max-w-sm flex-col rounded-lg bg-post p-8 text-left hover:ring-2 hover:ring-label focus-visible:ring-2 focus-visible:ring-blue sm:max-w-card">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between">
          <p className="-mt-1 w-60 text-xl font-bold text-title">
            {issue.title}
          </p>
          <span className="text-sm text-span">
            {dayjs().to(issue.created_at)}
          </span>
        </div>

        <Markdown
          skipHtml
          className="mt-5 line-clamp-4 max-w-[352px] text-ellipsis text-span"
        >
          {issue.body}
        </Markdown>
      </button>
    </Link>
  )
}
