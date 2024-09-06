import { useQuery } from '@tanstack/react-query'
import {
  LucideArrowUpRightFromSquare,
  LucideBuilding,
  LucideGithub,
  LucideUsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { GetUserInfo } from '../../api/get-user-info'

export function ProfileCard() {
  const { data: userInfo } = useQuery({
    queryKey: ['get-user-info'],
    queryFn: () => GetUserInfo({ username: 'matheusc1' }),
    staleTime: Infinity,
  })

  return (
    <div className="mt-4 max-w-sm gap-8 rounded-[10px] bg-profile p-8 shadow-md sm:-mt-24 sm:flex sm:max-w-864">
      <img
        src={userInfo?.avatar_url}
        className="mx-auto size-36 rounded-lg sm:mx-0"
        alt="Avata do usuário"
      />

      <div className="w-full space-y-3 sm:flex sm:flex-col sm:justify-between">
        <div className="mt-3 items-center sm:mt-0 sm:flex sm:justify-between">
          <p className="text-center text-2xl font-bold text-title">
            {userInfo?.name}
          </p>

          <div className="hidden cursor-pointer items-center gap-2 border-b border-transparent hover:border-b hover:border-blue sm:flex">
            <Link
              target="_blank"
              to={userInfo?.html_url || ''}
              className="text-xs font-bold uppercase text-blue"
            >
              Github
            </Link>
            <LucideArrowUpRightFromSquare
              strokeWidth={3}
              className="size-3 text-blue"
            />
          </div>
        </div>

        <p className="text-center text-base text-default sm:text-start">
          {userInfo?.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-x-8 sm:justify-start">
          <div className="flex items-center gap-1">
            <LucideGithub className="size-4 text-label" />
            <span className="text-subtitle">{userInfo?.login}</span>
          </div>

          {userInfo?.company && (
            <div className="flex items-center gap-1">
              <LucideBuilding className="size-4 text-label" />
              <span className="text-subtitle">{userInfo.company}</span>
            </div>
          )}

          <div className="flex items-center gap-1">
            <LucideUsersRound className="size-4 text-label" />
            <span className="text-subtitle">
              {userInfo?.followers} seguidores
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
