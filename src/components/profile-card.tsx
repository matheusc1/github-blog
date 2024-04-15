import { LucideArrowUpRightFromSquare, LucideGithub, LucideBuilding, LucideUsersRound } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="flex justify-start bg-profile rounded-[10px] p-8 w-full max-w-864 -mt-24 gap-8 shadow-md">
        <img src="https://github.com/matheusc1.png" className='size-36 rounded-lg' alt="" />

        <div className="flex flex-col justify-between w-full">

          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl text-title">Matheus Cardoso</p>

            <div className="flex gap-2 items-center cursor-pointer border-0 border-blue hover:border-b">
              <span className="uppercase text-blue font-bold text-xs">Github</span>
              <LucideArrowUpRightFromSquare strokeWidth={3} className="size-3 text-blue" />
            </div>
          </div>

          <p className="text-base text-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas molestias culpa vero
            totam facere qui tempore provident!
          </p>

          <div className="flex space-x-8">
            <div className="flex items-center gap-1">
              <LucideGithub className="size-4 text-label" />
              <span className="text-subtitle">matheusc1</span>
            </div>

            <div className="flex items-center gap-1">
              <LucideBuilding className="size-4 text-label" />
              <span className="text-subtitle">Rocketseat</span>
            </div>

            <div className="flex items-center gap-1">
              <LucideUsersRound className="size-4 text-label" />
              <span className="text-subtitle">matheusc1</span>
            </div>
          </div>
          
        </div>
      </div>
  )
}