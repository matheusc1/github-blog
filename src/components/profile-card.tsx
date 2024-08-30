import { useQuery } from "@tanstack/react-query"
import {
  LucideArrowUpRightFromSquare,
  LucideGithub,
  LucideBuilding,
  LucideUsersRound
} from "lucide-react"
import { Link } from "react-router-dom"
import { GetUserInfo } from "../api/get-user-info"

export function ProfileCard() {
  const { data: userInfo } = useQuery({
    queryKey: ['get-user-info'],
    queryFn: () => GetUserInfo({ username: 'matheusc1' }),
    staleTime: Infinity
  })

  return (
    <div className="sm:flex block bg-profile rounded-[10px] p-8 w-full max-w-[368px] sm:max-w-864 mt-4 sm:-mt-24 gap-8 shadow-md">
      <img src={userInfo?.avatar_url} className="size-36 rounded-lg mx-auto sm:mx-0" alt="" />

      <div className="sm:flex sm:flex-col sm:justify-between space-y-3 w-full">

        <div className="sm:flex sm:justify-between items-center mt-3 sm:mt-0">
          <p className="font-bold text-center text-2xl text-title">{userInfo?.name}</p>

          <div className="hidden sm:flex gap-2 items-center cursor-pointer  border-b border-transparent hover:border-blue hover:border-b">
            <Link target="_blank" to={userInfo?.html_url || ''} className="uppercase text-blue font-bold text-xs">Github</Link>
            <LucideArrowUpRightFromSquare strokeWidth={3} className="size-3 text-blue" />
          </div>
        </div>

        <p className="text-base text-default text-center sm:text-start">
          {userInfo?.bio}
        </p>

        <div className="flex space-x-8 justify-center sm:justify-start">
          <div className="flex items-center gap-1">
            <LucideGithub className="size-4 text-label" />
            <span className="text-subtitle">{userInfo?.login}</span>
          </div>

          {
            userInfo?.company ?
              <div className="flex items-center gap-1">
                <LucideBuilding className="size-4 text-label" />
                <span className="text-subtitle">Rocketseat</span>
              </div> : ""
          }

          <div className="flex items-center gap-1">
            <LucideUsersRound className="size-4 text-label" />
            <span className="text-subtitle">{userInfo?.followers} seguidores</span>
          </div>
        </div>

      </div>
    </div>
  )
}