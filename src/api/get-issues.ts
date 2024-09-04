import type { Issue } from "../pages/search-issues"
import { api } from "../lib/axios"

export interface GetIssuesParams {
  repositorySearch: string
}

export interface GetIssuesResponse {
  total_count: number
  incomplete_results: boolean
  items: Issue[]
}

export async function GetIssues({ repositorySearch }: GetIssuesParams) {
  const response = await api.get<GetIssuesResponse>('/search/issues', {
    params: {
      q: `repo:${repositorySearch}`,
    }
  })

  return response.data
}