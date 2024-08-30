import { api } from "../lib/axios"

export interface GetIssueDetailedParams {
  state: string
  issueNumber: string
}

export interface GetIssueDetailedResponse {
  url: URL
  title: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  body: string
} 

export async function GetIssueDetailed({ state, issueNumber }: GetIssueDetailedParams) {
  const response = await api.get<GetIssueDetailedResponse>(
    `/repos/${state}/issues/${issueNumber}`
  )

  return response.data
}