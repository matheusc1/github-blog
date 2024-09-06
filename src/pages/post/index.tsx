import 'dayjs/locale/pt-br'

import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Markdown from 'react-markdown'
import { useLocation, useParams } from 'react-router-dom'

import { GetIssueDetailed } from '../../api/get-issue-detailed'
import { IssueInfoCard } from './issue-info-card'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function Post() {
  const { state } = useLocation()
  const { issueNumber } = useParams()

  const { data: issue } = useQuery({
    queryKey: ['get-issue-details', state, issueNumber],
    queryFn: () => GetIssueDetailed({ state, issueNumber: issueNumber || '' }),
  })

  return (
    <div className="min-h-screen w-full">
      <div className="hidden h-72 w-full bg-logo bg-cover bg-center sm:block" />

      <div className="mx-auto max-w-sm px-3 sm:max-w-864 sm:px-0">
        <IssueInfoCard
          comments={issue?.comments}
          created_at={issue?.created_at}
          title={issue?.title}
          url={issue?.url}
          user={issue?.user}
        />

        <div className="flex w-full max-w-sm flex-col p-4 sm:max-w-864 sm:p-8">
          <Markdown
            components={{
              a: ({ ...props }) => (
                <a className="text-blue underline decoration-blue" {...props} />
              ),
              code: ({ className, children }) => {
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <pre className={`rounded bg-post p-4 ${className}`}>
                    <code className={`${match[1]}`}>{children}</code>
                  </pre>
                ) : (
                  <code>{children}</code>
                )
              },
            }}
          >
            {issue?.body}
          </Markdown>
        </div>
      </div>
    </div>
  )
}
