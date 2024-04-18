import { 
  LucideArrowLeft,
  LucideArrowUpRightFromSquare,
  LucideCalendarDays,
  LucideGithub,
  LucideMessageCircle,
} from 'lucide-react'
import cover from '../assets/header-cover.png'
import { Link } from 'react-router-dom'

export function Post() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <header>
        <img src={cover} className="w-full" alt="" />
      </header>

      <div className="flex flex-col justify-start bg-profile rounded-[10px] p-8 w-full max-w-864 -mt-24 gap-5 shadow-md">

        <div className="flex gap-2 items-center justify-between">
          <Link to="/">
            <button className='flex items-center justify-center gap-2 cursor-pointer border-b border-transparent hover:border-blue hover:border-b'>
              <LucideArrowLeft strokeWidth={3} className="size-3 text-blue" />
              <span className="uppercase text-blue font-bold text-xs">Voltar</span>
            </button>
          </Link>

          <Link to="https://github.com/matheusc1">
            <button className='flex items-center justify-center gap-2 cursor-pointer border-b border-transparent hover:border-blue hover:border-b'>
              <span className="uppercase text-blue font-bold text-xs">Github</span>
              <LucideArrowUpRightFromSquare strokeWidth={3} className="size-3 text-blue" />
            </button>
          </Link>
        </div>

        <p className='font-bold text-2xl text-title'>JavaScript data types and data structures</p>

        <div className="flex flex-col justify-between w-full">
          <div className="flex space-x-8">
            <div className="flex items-center gap-1">
              <LucideGithub className="size-4 text-label" />
              <span className="text-subtitle">matheusc1</span>
            </div>

            <div className="flex items-center gap-1">
              <LucideCalendarDays className="size-4 text-label" />
              <span className="text-subtitle">Há 1 dia</span>
            </div>

            <div className="flex items-center gap-1">
              <LucideMessageCircle fill='#3A536B' className="size-4 text-label" />
              <span className="text-subtitle">5 comentários</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
