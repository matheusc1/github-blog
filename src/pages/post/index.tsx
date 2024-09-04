import { useLocation, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime"
import { useQuery } from '@tanstack/react-query'
import { GetIssueDetailed } from '../../api/get-issue-detailed'
import { IssueInfoCard } from './issue-info-card'

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
    <div className="min-h-screen w-full">
      <div className="hidden sm:block w-full bg-center bg-cover bg-logo h-72" />

      <div className="max-w-sm sm:max-w-864 mx-auto px-3 sm:px-0">
        <IssueInfoCard
          comments={issue?.comments}
          created_at={issue?.created_at}
          title={issue?.title}
          url={issue?.url}
          user={issue?.user}
        />

        <div className="w-full max-w-sm sm:max-w-864 p-4 sm:p-8 flex flex-col">
          <Markdown components={{
            a: ({ ...props }) => <a className="text-blue underline decoration-blue" {...props} />,
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
    </div>
  )
}
