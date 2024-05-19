import { Link } from "react-router-dom"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface RepoCardProps {
  title: string
  date: string
  text: string
}

export function RepoCard(children: RepoCardProps) {
  return (
    <Link to="/post">
      <button className="flex flex-col text-left w-card bg-post rounded-lg h-64 p-8 overflow-hidden
      relative outline-none hover:ring-2 hover:ring-label focus-visible:ring-2 focus-visible:ring-blue">
        <div className="w-full flex justify-between">
          <p className="text-xl text-title font-bold w-60 -mt-1">
            {children.title}
          </p>
          <span className="text-sm text-span">{dayjs().to(children.date)}</span>
        </div>

        <p className="text-span mt-5 text-ellipsis max-w-[352px] line-clamp-4">
          {children.text}
        </p>
      </button>
    </Link>
  )
}