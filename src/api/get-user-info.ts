import { api } from "../lib/axios"

interface GetUserParams {
  username: string
}

interface GetUserResponse {
  avatar_url: string
  name: string
  bio: string
  login: string
  company?: string
  followers: number
  html_url: string
}

export async function GetUserInfo({ username }: GetUserParams) {
  const response = await api.get<GetUserResponse>(
    `https://api.github.com/users/${username}`
  )

  return response.data
}