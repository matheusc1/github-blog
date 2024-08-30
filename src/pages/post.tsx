import { 
  LucideArrowLeft,
  LucideArrowUpRightFromSquare,
  LucideCalendarDays,
  LucideGithub,
  LucideMessageCircle,
} from 'lucide-react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import cover from '../assets/bg.png'
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime"
import { useQuery } from '@tanstack/react-query'
import { GetIssueDetailed } from '../api/get-issue-detailed'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')


export function Post() {
  const { state } = useLocation()
  const { issueNumber } = useParams()

  const { data: issue } = useQuery({
    queryKey: ['get-issue-details', state, issueNumber],
    queryFn: () => GetIssueDetailed({ state, issueNumber: issueNumber || '' })
  })

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <img src={cover} className="w-full hidden sm:block" alt="" />

      <div className="flex flex-col justify-start bg-profile rounded-[10px] mt-4 p-8 w-full max-w-[368px] sm:max-w-864 sm:-mt-24 gap-5 shadow-md">

        <div className="flex gap-2 items-center justify-between">
          <Link to="/">
            <button className='flex items-center justify-center gap-2 cursor-pointer border-b border-transparent hover:border-blue hover:border-b'>
              <LucideArrowLeft strokeWidth={3} className="size-3 text-blue" />
              <span className="uppercase text-blue font-bold text-xs">Voltar</span>
            </button>
          </Link>

          <div className="flex gap-2 items-center cursor-pointer  border-b border-transparent hover:border-blue hover:border-b">
            <Link target="_blank" to={issue?.url || ''} className="uppercase text-blue font-bold text-xs">Github</Link>
            <LucideArrowUpRightFromSquare strokeWidth={3} className="size-3 text-blue" />
          </div>
        </div>

        <p className='font-bold text-2xl text-title'>{issue?.title}</p>

        <div className="flex flex-col justify-between w-full">
          <div className="flex space-x-8">
            <div className="flex items-center gap-1">
              <LucideGithub className="size-4 text-label" />
              <span className="text-subtitle">{issue?.user.login}</span>
            </div>

            <div className="flex items-center gap-1">
              <LucideCalendarDays className="size-4 text-label" />
              <span className="text-subtitle">{dayjs().to(issue?.created_at)}</span>
            </div>

            <div className="flex items-center gap-1">
              <LucideMessageCircle fill='#3A536B' className="size-4 text-label" />
              <span className="text-subtitle">{issue?.comments}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm sm:max-w-864 p-6 sm:p-8 flex flex-col">
        <Markdown components={{
          a: ({...props}) => <a className="text-blue underline decoration-blue" {...props} />,
          code: ({ className, children }) => {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <pre className={`p-4 bg-post rounded ${className}`}>
              <code className={`${match[1]}`}>{children}</code>
            </pre>
          ) : (
            <code>{children}</code>
          );
        }
        }}>{issue?.body}</Markdown>
      </div>
    </div>
  )
}
