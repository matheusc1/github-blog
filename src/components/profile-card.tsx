import axios from "axios"
import { 
  LucideArrowUpRightFromSquare,
  LucideGithub,
  LucideBuilding,
  LucideUsersRound
} from "lucide-react"
import { useEffect, useState } from "react"

interface User {
  avatarUrl: string
  name: string
  bio: string
  username: string
  company?: string
  followers: number
  url: string
}

export function ProfileCard() {
  const [userInfo, setUserInfo] = useState<User>()

  useEffect(() => {
    async function getUserInfo() {
      try {
        const { data } = await axios.get('https://api.github.com/users/matheusc1')

        const userInfoData = {
          avatarUrl: data.avatar_url,
          name: data.name,
          bio: data.bio,
          username: data.login,
          followers: data.followers,
          company: data?.company,
          url: data.html_url
        }
        setUserInfo(userInfoData)
      } catch (error) {
        console.log(error)
      }
    }

    getUserInfo()
  }, [])

  console.log(userInfo)

  return (
    <div className="flex justify-start bg-profile rounded-[10px] p-8 w-full max-w-864 -mt-24 gap-8 shadow-md">
        <img src={userInfo?.avatarUrl} className='size-36 rounded-lg' alt="" />

        <div className="flex flex-col justify-between w-full">

          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl text-title">{userInfo?.name}</p>

            <div className="flex gap-2 items-center cursor-pointer  border-b border-transparent hover:border-blue hover:border-b">
              <a href={userInfo?.url} className="uppercase text-blue font-bold text-xs">Github</a>
              <LucideArrowUpRightFromSquare strokeWidth={3} className="size-3 text-blue" />
            </div>
          </div>

          <p className="text-base text-text">
            {userInfo?.bio}
          </p>

          <div className="flex space-x-8">
            <div className="flex items-center gap-1">
              <LucideGithub className="size-4 text-label" />
              <span className="text-subtitle">{userInfo?.username}</span>
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